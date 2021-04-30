import { GlobalStyle } from './global/style'
import './App.css';
import { GlobalStateProvider } from './provider/globalState';
import { Routes } from './routes';
import { AuthProvider } from './provider/auth';
import "react-responsive-carousel/lib/styles/carousel.min.css"

function App() {
  return (
    <GlobalStateProvider>
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </GlobalStateProvider>
  );
}

export default App;
