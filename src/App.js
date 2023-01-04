import './App.css';
import './global.scss';

import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/contacts/Contacts';
import About from './Pages/about/About';
import Home from './Pages/home/Home';

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={ <About /> }></Route>
                    <Route path="/contacts" element={<Contact />}></Route>
                    <Route path="/menu" element={ <h1>Menu Page</h1>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout (props) {
    return <>
        <Header/>

        <div className="main-content">
          <Outlet />
        </div>

        <Footer />
    </>;
}

export default App;