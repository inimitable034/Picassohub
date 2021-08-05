import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { CarouselComponent } from './CarouselComponent';
import { Navbar } from './Navbar';
import { Wallgallery } from './Wallgallery';
import { About } from './About';
import { Abstract } from './Abstract';
import { Contact } from './Contact';
import Shop  from './Shop';
import { Frames } from './Frames';
import { Route, Link, Router } from 'react-router-dom';
import { Transaction } from './Transaction';
import  Login  from './Login';
import {Footer} from './Footer';
import { Register } from './Register';
import React, { useState, useEffect } from 'react';
import fire from './fire'
import Header from './Header';
import Basket from './Basket';
import data from './data';

const App=() => {

  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const [user, setUser]= useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":          
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":          
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  }

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user)
      {
        clearInputs();
        setUser(user);
      }else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  return (
    <div className="app">
    <Navbar />
    <Route exact path="/Login" >
      <Login 
       email={email}
       setEmail={setEmail} 
       password={password} 
       setPassword={setPassword} 
       handleLogin={handleLogin} 
       handleSignup={handleSignup}
       hasAccount={hasAccount}
       setHasAccount={setHasAccount}
       emailError={emailError}
       passwordError={passwordError}
      />
    </Route>
    <Route exact path="/" component={CarouselComponent} />
    <Route exact path="/" component={Wallgallery} />
    <Route exact path="/" component={Abstract} />
    <Route exact path="/wallgallery" component={Wallgallery} />
    <Route exact path="/about" component={About} />
    <Route exact path="/abstract" component={Abstract} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/frames" component={Frames} />
    <Route exact path="/shop">
      <Header countCartItems={cartItems.length}></Header>
    <Shop
     products={products}
      onAdd={onAdd}
    />
    <Basket
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Basket>
      </Route>
    <Route exact path="/transaction" component={Transaction} />
    <Route exact path="/register" component={Register} />
    <Footer/>
    </div>
  );
}
export default App;