import './App.css';
import { GlobalStateProvider } from './provider';
import { Routes } from './routes';

function App() {
  return (
    <GlobalStateProvider>
      <Routes />
    </GlobalStateProvider>
  );
}

export default App;
