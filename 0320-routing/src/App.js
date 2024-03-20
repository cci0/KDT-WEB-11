import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                {/* 경로에 따라 다른 값 보여주기 */}
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductPage />} />
                    <Route path="*" element={<NotFound />} />
                    {/* path: 경로 이름(주소창) element: 이동 페이지(js) */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
