import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import ForgotPassword from './pages/ForgotPassword'
import SendOTP from './pages/SendOTP'
import ResetPassword from './pages/ResetPassword'
import ResetConfirmed from './pages/ResetConfirmed'
import WelcomeDash from './pages/WelcomeDash'
import DashAccounts from './pages/DashAccounts'
import DashCreateAccount from './pages/DashCreateAccount'
import DashCreateModule from './pages/DashCreateModule'
import CreatedUser from './pages/CreatedUser'
import './App.css'


function App() {
 

  return (
    <>
       <Router>
        <Routes>

            <Route path='/' element ={<Login />} />
            <Route path='/forgot-password' element ={<ForgotPassword />} />
            <Route path='/forgot-password/send-otp' element ={<SendOTP />} />
            <Route path='/reset-pass' element ={<ResetPassword />} />
            <Route path='/reset-confirmed' element ={<ResetConfirmed />} />
            <Route path='/dashboard' element ={<WelcomeDash />} />
            <Route path='/dashboard-accounts' element ={<DashAccounts />} />
            <Route path='/dashboard-create-accounts' element ={<DashCreateAccount />} />
            <Route path='/dashboard-create-modules' element ={<DashCreateModule />} />
            <Route path='/dashboard-new-account' element ={<CreatedUser />} />
        </Routes>
    </Router>
    </>
  )
}

export default App
