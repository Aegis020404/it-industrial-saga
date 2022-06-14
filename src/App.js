import React, {useRef} from "react";
import './style/normalize.css';
import './style/main.css'
import {BrowserRouter} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";


function App() {
    let wrap = useRef(false)
    window.addEventListener('load', function() {
        wrap.current.hidden = false;
    })
    return (
        <BrowserRouter >
            <div ref={wrap} hidden={true}>
            <Header />
            <AppRouter />
            <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
