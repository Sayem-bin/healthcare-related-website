import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound'
import Services from './Pages/Home/Services/Services';
import AboutUs from './Pages/Home/About/AboutUs';
import Experts from './Pages/Home/Experts/Experts';
import Details from './Pages/Home/Details/Details';
import Register from './Pages/LogIn/Register/Register';
import LogIn from './Pages/LogIn/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/LogIn/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/details/:name/">
              <Details></Details>
            </PrivateRoute>
            <Route exact path="/details">
              <Details></Details>
            </Route>
            <Route path="/about">
              <AboutUs></AboutUs>
            </Route>
            <Route path="/dentists">
              <Experts></Experts>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
