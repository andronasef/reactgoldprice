import { HashRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Settings from './pages/Settings';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div dir="rtl" lang="ar">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route index path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}
export default App;
