import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Archive from './pages/Archive';
import PageNotFound from "./pages/PageNotFound";
import Layout from "./pages/Layout";

export default function RoutePages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home />}/>
                    <Route path="about" element={<About />}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="archive" element={<Archive/>}/>
                    <Route path="*" element={<PageNotFound/>} />
                </Route>   
            </Routes>
        </BrowserRouter>
    );
}