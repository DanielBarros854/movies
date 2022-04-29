import { ToastContainer } from 'react-toastify';
import Routers from './routes';

import 'react-toastify/dist/ReactToastify.css';
import './styles.css'

const App = () => {
  return (
    <div className='app'>
      <Routers />
      <ToastContainer autoClose={3000}/>
    </div>
  );
}

export default App;
