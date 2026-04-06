import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import ContextState from './context/ContextState';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Branding from './components/services/Branding';
import DigitalMarketing from './components/services/DigitalMarketing';
import SeoServices from './components/services/SeoServices';
import SocialMedia from './components/services/SocialMedia';
import Error from './components/Error';

const App = () => {
    return (
        <HashRouter>
            <ContextState>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/blog' element={<Blog />} />
                    <Route path='/blog-details' element={<BlogDetails />} />

                    <Route path='/branding' element={<Branding />} />
                    <Route path='/digital-marketing' element={<DigitalMarketing />} />
                    <Route path='/seo-services' element={<SeoServices />} />
                    <Route path='/social-media' element={<SocialMedia />} />

                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </ContextState>
        </HashRouter>
    );
}

export default App;
