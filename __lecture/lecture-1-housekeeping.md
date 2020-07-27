### Housekeeping: Rules of Hooks

We saw `useState`, which is a React hook.

Hooks have certain rules.

---

### 1. Must be called from a React component

Cannot call hooks from anywhere

```js
// 🙅‍♀️ Not in a component :
const [data, setData] = React.useState(null);

const App = () => {
  return <div>{data.name}</div>;
};
```

---

### 1. Must be called from a React component

Cannot call hooks from anywhere\*

```js
// 🙅‍♀️ in a function, not a component:
const getData = () => {
  const [data, setData] = React.useState(null);

  return data;
};

const App = () => {
  const data = getData();
  return <div>{data.name}</div>;
};
```

\*we will see a way to do this, kinda, in the future. For now though, hooks should always be right there in the component.

---

### 2. Cannot be conditional

React hooks should always be at the top level inside your function.

```js
const App = ({ showErrors }) => {
  let error;

  // 🙅‍♀️ in a condition:
  if (showErrors) {
    error = React.useState(null);
  }

  return "hi";
};
```

---

# Exercises

Fix the following state hooks

---

```js
const Button = ({ type, children }) => {
  if (type === "primary") {
    const [color, setColor] = React.useState("red");

    return (
      <button
        style={{ color }}
        onMouseEnter={() => {
          setColor("purple");
        }}
        onMouseLeave={() => {
          setColor("red");
        }}
      >
        {children}
      </button>
    );
  } else {
    return <button style={{ backgroundColor: "purple" }}>{children}</button>;
  }
};
```
const useApi = (path) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    fetch(path)
      .then(res => res.json())
      .then(json => {
        setData(json);
      })
      .catch(err => {
        setError(err);
      });
  }, [path])
  return [data, error];
}
const App = ({ path }) => {
  const [data, error] = useDataFromPath('goodbye');
  return (
    <span>
      {error && <p className="red">Problem! {error}</p>}
      Data: {JSON.stringify(data)}
    </span>
  );
}
const Button = () => {
  const data = useDataFromPath('/hello');
}

const Time = ({ throttleDuration }) => {
  const [time, setTime] = React.useState(
    new Date()
  );
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, throttleDuration);
    return () => {
      window.clearInterval(intervalId);
    }
  }, [throttleDuration])
  return (
    <span>
      It is currently<br />{time.toTimeString()}
    </span>
  );
}
render(<Time throttleDuration={1000} />)

Josh Comeau - Instructor  9:39 AM
Solution:
function useCurrentTime(throttleDuration) {
  const [time, setTime] = React.useState(
    new Date()
  );
  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, throttleDuration);
    return () => {
      window.clearInterval(intervalId);
    }
  }, [throttleDuration])
  return time;
}
const Time = ({ throttleDuration }) => {
  const time = useCurrentTime(throttleDuration);
  return (
    <span>
      It is currently<br />{time.toTimeString()}
    </span>
  );
}
render(<Time throttleDuration={1000} />)