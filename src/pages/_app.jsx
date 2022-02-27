import "../../styles/globals.css";
import styled from "styled-components";

export const Container = styled.div`
  background-color: green;
  color: white;
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
