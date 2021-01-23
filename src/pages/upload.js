import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { GlobalStyle, Screen } from 'styles';
import {
  Upload,
} from 'components';

const AppContainer = styled.div`
  position: relative;
  margin: 200px 0px 0px 0px;
  ${Screen.largePhone`
  margin-top: 150px
  margin-left: 10px;
  margin-right: 10px;
`};
`;

const App = () => (
  <>
    <AppContainer >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <GlobalStyle />
      <Upload />
    </AppContainer>
  </>
);

export default App;
