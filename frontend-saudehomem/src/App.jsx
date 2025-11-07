import './styles/App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ExamesPreventivos from './pages/ExamesPreventivos';
import ExamesHormonais from './pages/ExamesHormonais';
import ExamesSexuais from './pages/ExamesSexuais';
import Dicas from './pages/Dicas';
import VisualComponents from './pages/VisualComponents';
import Agendamento from './pages/Agendamento';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<VisualComponents />} />
        <Route path="/home" element={<Home />} />
        <Route path="/visual" element={<VisualComponents />} />
        <Route path="/exames-preventivos" element={<ExamesPreventivos />} />
        <Route path="/exames-hormonais" element={<ExamesHormonais />} />
        <Route path="/exames-sexuais" element={<ExamesSexuais />} />
        <Route path="/dicas" element={<Dicas />} />
        <Route path="/agendamento" element={<Agendamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
