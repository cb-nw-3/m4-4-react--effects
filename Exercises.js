const App1 = () => {
  const [count, setCount] = React.useState(0);
  document.title = `You have clicked ${count} times`;
  return (
    <button onClick={() => setCount(count + 1)}>
      Increment
    </button>
  );
}

const App = ({ color }) => {
    const [value, setValue] = React.useState(false);
    window.localStorage.setItem('value', value);
    window.localStorage.setItem('color', color);
    return (
      <div>
        Value: {value}
        <button onClick={() => setValue(!value)}>
          Toggle thing
        </button>
      </div>
    );
  }

  const Modal = ({ handleClose }) => {
    window.addEventListener('keydown', (ev) => {
      if (ev.code === 'Escape') {
        handleClose();
      }
    });
    return (
      <div>
        Modal stuff
      </div>
    );
  }