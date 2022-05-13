import { BrowserRouter } from 'react-router-dom';
import ForgetPassword from './containers/auth/forgetpassword';
import Navigator from './navigator';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
      {/* <ForgetPassword /> */}
    </BrowserRouter>
  );
}

export default App;
