import Menu from "./components/Menu";
import CreateGame from "./components/CreateGame"
import { Routes, Route } from 'react-router-dom'

function Router () {
    return (
        <Routes>
            <Route exact path='/' element={Menu()}/>
            <Route path='/CreateGame' element={CreateGame()}/>
        </Routes>
    )
}

export default Router;