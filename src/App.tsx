import 'style.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import 'react-toastify/dist/ReactToastify.css';

import { Container, MantineProvider } from '@mantine/core';
import { Footer, Header } from './components'
import { ViewRoutes } from './pages/Router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MantineProvider>
            <Header />
            <Container size={'md'}>
              <ViewRoutes />
            </Container>
            <Footer />
          </MantineProvider>
        </div>
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
