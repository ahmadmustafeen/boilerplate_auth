import { BrowserRouter } from 'react-router-dom';
import ForgetPassword from './containers/auth/forgetpassword';
import Navigator from './navigator';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      {/* <ForgetPassword /> */}
    </BrowserRouter>
  );
}

export default App;
