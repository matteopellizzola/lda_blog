import './App.css';

import {BrowserRouter, Route, Routes, Outlet} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<h1>Home Page</h1>}></Route>
                    <Route path="/about" element={ <h1>About Page</h1>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function Layout (props) {
    return <>
        <h1>Website title</h1>

        <Outlet />

        footer?
    </>;
}

export default App;
