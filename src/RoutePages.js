import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';            // Importing the Home page component
import About from './pages/About';          // Importing the About page component
import Contact from './pages/Contact';      // Importing the Contact page component
import Archive from './pages/Archive';      // Importing the Archive page component
import PageNotFound from "./pages/PageNotFound";  // Importing the PageNotFound page component
import Article from './pages/Article';      // Importing the Article page component
import Layout from "./pages/Layout";        // Importing the Layout component

/**
 * RoutePages Component
 * 
 * This component sets up the routing configuration for the application.
 * It uses BrowserRouter from react-router-dom to enable navigation.
 * Routes are defined using Routes and Route components.
 */
export default function RoutePages() {
    // Determine the base URL based on the environment
    const basename = process.env.NODE_ENV === 'development' ? '/' : '/stablo-template';

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* Home Page Route - index means main page */}
                    <Route index element={<Home />} />

                    {/* About Page Route */}
                    <Route path="about" element={<About />} />

                    {/* Contact Page Route */}
                    <Route path="contact" element={<Contact />} />

                    {/* Archive Page Route */}
                    <Route path="archive" element={<Archive />} />

                    {/* Article Page Route */}
                    <Route path="article/:title" element={<Article />} />

                    {/* Page Not Found Route */}
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
