import Layout from './components/templates/Layout';
import { Providers } from "./components/templates/Provider"

export const App: React.FC = () => {
  return (
    <Providers>
      <div className="App">
        <header className="App-header">
        </header>
        <Layout />
      </div>
    </Providers>
  );
}

export default App;
