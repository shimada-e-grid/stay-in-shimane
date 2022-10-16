import Layout from './components/templates/Layout';
import { Providers } from "./components/templates/Provider"

export const App: React.FC = () => {
  return (
    <Providers>
      <div className="App px-8 py-4">
        <header className="App-header">
        </header>
        <Layout />
      </div>
    </Providers>
  );
}

export default App;
