import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import CreatePost from './pages/CreatePost/CreatePost'
import SignUpForm from './components/Forms/SignUpForm/SignUpForm'
function App() {
  return (
    
    <div className="App">
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
        <Route path="/signup">
          <SignUpForm />
        </Route>
        {/* <Route path="/cocktail/:id">
          <SingleCocktail />
        </Route>
        <Route path="*">
          <Error />
        </Route> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
