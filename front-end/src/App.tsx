import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import RouterComponent from './components/RouterComponent';

import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles />
      <ToastContainer
        position='bottom-center'
        theme='colored'
      />
      <RouterComponent />
    </>
  );
}
