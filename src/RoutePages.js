import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Archive from './pages/Archive';
import PageNotFound from "./pages/PageNotFound";
import Article from './pages/Article';
import Layout from "./pages/Layout";

export default function RoutePages(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/stablo-template" element={<Layout/>}>
                    <Route index exact element={<Home />}/>
                    <Route path="about" exact element={<About />}/>
                    <Route path="contact" exact element={<Contact/>}/>
                    <Route path="archive" exact element={<Archive/>}/>
                    <Route path="article/:title" element={<Article/>}/>
                    <Route path="*" element={<PageNotFound/>} />
                </Route>   
            </Routes>
        </BrowserRouter>
    );
}