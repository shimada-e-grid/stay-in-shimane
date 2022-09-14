import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

export const Layout: React.FC = () => {
  return (
    <BrowserRouter>
    <Router />
    </BrowserRouter>
  );
}

export default Layout;
