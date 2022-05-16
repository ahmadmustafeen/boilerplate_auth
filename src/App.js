import { BrowserRouter } from 'react-router-dom';
import Navigator from './navigator';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Navigator />
    </BrowserRouter>
  );
}

export default App;
