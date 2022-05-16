import Menu from "./components/Menu";
import CreateGame from "./components/CreateGame"
import Login from "./components/Login"
import { Routes, Route } from 'react-router-dom'
import JoinGame from "./components/JoinGame";
import  Leaderboard  from "./components/Leaderboard";
import Game from "./components/Game";
function Router () {
    return (
        <Routes>
            <Route exact path='/' element={Menu()}/>
            <Route path='/creategame' element={CreateGame()}/>
            <Route path='/login' element={Login()}/>
            <Route path='/join' element={JoinGame()}/>
            <Route path='/leaderboard' element={Leaderboard()}/>
            <Route path='/game' element={Game()}/>
        </Routes>
    )
}

export default Router;