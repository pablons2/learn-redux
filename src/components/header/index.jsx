"use client"
import { useState } from "react";
import {useSelector, useDispatch } from 'react-redux'
import UserActionTypes from "../../redux/user/action-types";
// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const {currentUser}= useSelector(rootReducer=>rootReducer.userReducer);
  const dispatch = useDispatch()
  console.log({currentUser})
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

const handleLoginClick = ()=>{
  dispatch({
    type:UserActionTypes.LOGIN,
    payload: { name: "pabloN", email:"pablo@pablo.com"},
    // qualquercoisa: "qualquer coisa mesmo"
    
  })

}
const handleLogoutClick = ()=>{
  dispatch({
    type: UserActionTypes.LOGOUT
   
  })
}
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser? <div ><span>Bem vindo, <b>{currentUser.name}</b>! </span> <span onClick={handleLogoutClick}>sair</span> </div>  :
        (<div onClick={handleLoginClick}>Login</div>)}
        
        <div onClick={handleCartClick}>Carrinho</div>
     
       
        
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
