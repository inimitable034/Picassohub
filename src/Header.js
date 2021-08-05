import React from 'react';


export default function Header(props) {
  return (
    <div>
      <div className ="cart-header">
        <a >
          <h1>Shopping Cart</h1>
        </a>
      </div>
      <div className="cart-float">
        <a href="./Transaction" >
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="./Login"> SignIn</a>
      </div>
      </div>

  );
}
