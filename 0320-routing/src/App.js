import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import NotFound from './pages/NotFound';
import ProductDetailPage from './pages/ProductDetailPage';
import StudentHeader from './components/StudentHeader';
import StudentDetail from './pages/StudentDetail';

function App() {
    const [products, setProducts] = useState([]);

    const getProduct = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
        setProducts(res.data.slice(0, 10));
    };

    useEffect(() => {
        getProduct();
    }, []);
    return (
        <div className="App">
            <BrowserRouter>
                {/* 경로에 따라 다른 값 보여주기 */}
                <Header />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/products" element={<ProductPage products={products} />} />
                    <Route path="/products/:productId" element={<ProductDetailPage products={products} />} />

                    {/* 실습1 정답 */}
                    <Route path="/student" element={<StudentHeader />} />
                    <Route path="/student/:name" element={<StudentDetail />} />
                    <Route path="*" element={<NotFound />} />
                    {/* path: 경로 이름(주소창) element: 이동 페이지(js) */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
