import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  html {
    box-sizing: border-box;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`;
