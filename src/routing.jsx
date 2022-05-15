import Menu from "./components/Menu";
import CreateGame from "./components/CreateGame"
import Login from "./components/Login"
import { Routes, Route } from 'react-router-dom'

function Router () {
    return (
        <Routes>
            <Route exact path='/' element={Menu()}/>
            <Route path='/creategame' element={CreateGame()}/>
            <Route path='/login' element={Login()}/>
        </Routes>
    )
}

export default Router;