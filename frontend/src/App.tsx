import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import MindMap from './pages/MindMap';
import SkillTree from './pages/SkillTree';
import WorkSpace from './pages/WorkSpace';
import Contribute from './pages/Contribute';
import Create from './pages/Create';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';

function App() {
  // Set the page title
  useEffect(() => {
    document.title = 'flodevs | Unlocking Your Potential';
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mindmap" element={<MindMap />} />
          <Route path="/skilltree" element={<SkillTree />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;