import Menu from "./components/Menu";
import CreateGame from "./components/CreateGame"
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Routes, Route, useNavigate } from 'react-router-dom'
import JoinGame from "./components/JoinGame";
import  Leaderboard  from "./components/Leaderboard";
import Game from "./components/Game";
import { useState } from "react";
import { useEffect } from "react";
import React from 'react'
import SessionObserver from "./components/SessionObserver";



function Router () {
    const navigate = useNavigate();
    const [session, setSession] = React.useState();

    function changeSession (newSession){
        setSession(newSession);
    }
    
    useEffect(() => {
        if(session){
            localStorage.setItem('userSession', JSON.stringify(session));
            console.log('session stored');
            //navigate('/');
        }
        
    }, [session])

    useEffect(() => {
        const session = JSON.parse(localStorage.getItem('userSession')) ;
        if(session){
            console.log("session found");
            setSession(session);
            
        }else{
            console.log("session no found");
        }
    }, [])

    return (
        <Routes>
            <Route exact path='/' element={Menu()}/>
            <Route path='/creategame' element={CreateGame()}/>
            <Route path='/login' element={(
                <Login sessionUpdate={changeSession}/>
            )}/>
            <Route path='/signup' element={<Signup sessionUpdate={changeSession}/>}/>
            <Route path='/join' element={JoinGame()}/>
            <Route path='/leaderboard' element={Leaderboard()}/>
            <Route path='/game' element={Game()}/>
        </Routes>
    )
}

export default Router;