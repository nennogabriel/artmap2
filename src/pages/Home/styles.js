import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export const Aside = styled.div`
  width: 300px;
  height: 100%;
  background: green;

  padding: 1rem;
  > * {
    margin-bottom: 0.75rem;
  }
`;

export const Flex = styled.div`
  display: flex;

  button {
    padding: 2px 8px;
    margin-right: 1rem;
  }
`;

export const MapWrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  padding: 29px;
`;

export const BoardOut = styled.div`
  height: 100%;
  padding: 7px;
  border: 7px solid black;
`;

export const BoardIn = styled.div`
  height: 100%;
  border: 7px solid black;
  padding: 17px;
  > div {
    height: 100%;
    position: relative;
    overflow: hidden;
  }
`;

export const TextContainer = styled.div`
  position: absolute;
  color: #000;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 999;
  header {
    font-family: ${(props) => props.fontHeader};
    font-size: 120px;
    background-image: linear-gradient(to top, white, transparent);
  }
  main {
    font-family: ${(props) => props.fontMain};
    font-size: 140px;
    background: white;
    color: #dd5050;
  }
  footer {
    font-family: ${(props) => props.fontFooter};
    font-size: 32px;
    background: white;
  }
`;
