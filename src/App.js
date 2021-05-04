import { GlobalStyle } from './global/style'
import './App.css';
import { GlobalStateProvider } from './provider/globalState';
import { Routes } from './routes';
import { AuthProvider } from './provider/auth';

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
