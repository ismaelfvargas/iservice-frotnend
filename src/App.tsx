import React from 'react';

import SignIn from './pages/Signin';
import GlobalStyle from './styles/global';
import SignUp from "./pages/Signup";

const App: React.FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
