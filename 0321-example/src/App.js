import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExNotFound from './pages/ExNotFound';
import StudentHeader from './components/StudentHeader';
import ExStudentDetail from './pages/ExStudentDetail';
import Exmain from './pages/Exmain';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Exmain />} />
                    <Route path="/student" element={<StudentHeader />} />
                    <Route path="/student/:name" element={<ExStudentDetail />} />
                    <Route path="*" element={<ExNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
