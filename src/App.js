import React, {useEffect, useState} from "react";
import './styles/App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}
// дз: сделать так, чтобы цикл, рисующий ссылки на все страницы постов, срабатывал с помощью useMemo не на каждом рендеринге, а только тогда, когда изменилось общее количество страниц
export default App;
