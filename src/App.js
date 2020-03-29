import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import { Provider } from 'react-redux';
import store from './components/redux/store';
import AdminProduct from './components/administrator/Product/AdminProduct';
import AdminCategory from './components/administrator/Category/Category';
import AdminUser from './components/administrator/User/User'
import Login from './components/auth/Login'
function App() {
  return (
    <Provider store={store}>
      <Router> 
        <div>
          <Route exact path='/' component={Home} />
          <Route path="/login" component={Login} />
          <Route exact path='/adminproduct' component={AdminProduct} />
          <Route exact path='/admincategory' component={AdminCategory} />
          <Route exact path='/adminuser' component={AdminUser} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
