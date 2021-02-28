// import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CreatePost from './pages/CreatePost/CreatePost'
import SignUpForm from './components/Forms/SignUpForm/SignUpForm'
function App() {
  return (
    
    <div className="App">
    <Router>
      <Navbar />
      {/* <TestNavbar /> */}
      <Switch>
        <Route exact component = {Home}path="/" />
        <Route path="/about" component = {About} />
        <Route path="/createpost" component = {CreatePost} />      
        <Route path="/signup"  component ={SignUpForm}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
