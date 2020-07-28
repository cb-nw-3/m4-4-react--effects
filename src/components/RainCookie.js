import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import cookieSrc from '../cookie.svg';

const RainCookie = () => {
  //   const ref = useRef(
  return <Cookie src={cookieSrc}></Cookie>;
};

const Cookie = styled.img`
  position: absolute;
  width: 50px;
  left: 0;
  top: -10px;
`;

export default RainCookie;
