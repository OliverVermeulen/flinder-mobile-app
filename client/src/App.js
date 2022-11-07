import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Onboarding from './pages/Onboarding'
import Profile from './pages/Profile'
import User from './pages/User'
import Match from './pages/Match'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {useCookies} from 'react-cookie'

const App = () => {
    const [cookies] = useCookies(['user'])

    const authToken = cookies.AuthToken

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
                {authToken && <Route path="/match" element={<Match/>}/>}
                {authToken && <Route path="/onboarding" element={<Onboarding/>}/>}
                {authToken && <Route path="/profile" element={<Profile/>}/>}
                {authToken && <Route path="/user" element={<User/>}/>}
            </Routes>
        </BrowserRouter>
    )
}

export default App