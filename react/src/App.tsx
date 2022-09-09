import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

export const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
