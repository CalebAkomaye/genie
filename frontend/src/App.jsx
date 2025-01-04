import { Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import DashBoard from './components/pages/main/DashBoard';
import DemoPage from './components/pages/main/DemoPage';
import DocsPage from './components/pages/main/DocsPage';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/demo' element={<DemoPage />} />
        <Route path='/docs' element={<DocsPage />} />

        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
