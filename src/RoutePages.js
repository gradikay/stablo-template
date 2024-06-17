import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Archive from './pages/Archive';
import PageNotFound from "./pages/PageNotFound";
import Article from './pages/Article';
import Layout from "./pages/Layout";

export default function RoutePages(){
    const basename = process.env.NODE_ENV === 'development' ? '/' : '/stablo-template';
    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="archive" element={<Archive />} />
                    <Route path="article/:title" element={<Article />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
