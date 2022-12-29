import './App.css';
import './global.scss';

import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Pages/contacts/Contacts';

function App () {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<h1>Home Page</h1>}></Route>
                    <Route path="/about" element={ <h1>About Page</h1>}></Route>
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

        <Outlet />

        <Footer />
    </>;
}

export default App;
