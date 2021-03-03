// import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CreatePost from './pages/CreatePost/CreatePost'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import {useGlobalContext} from './context'
import useToken from './custom-hooks/useToken/useToken'
function App() {
  const {getToken} = useGlobalContext()
  const {token,setToken} = useToken()

  if(!token){
    return(
      <div>
        <Router>
          <Navbar />
          <Login setToken ={setToken}  />
        </Router>
      </div>
      
    )
  }
  return (
    
    <div className="App">
    <Router>
      <Navbar />
      {/* <TestNavbar /> */}
      <Switch>
        <Route component = {Dashboard} path = "/dashboard" />
        <Route component = {Login} path = "/signin" />
        <Route exact component = {Home}path="/" />
        <Route path="/about" component = {About} />
        <Route path="/createpost" component = {CreatePost} />      
      </Switch>
    </Router>
    </div>
  );
}

export default App;
