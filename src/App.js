import React,{useState,useContext,useEffect} from 'react'
import Main from './components/main/Main'
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom" ;
import Profile from "./components/main/Profile";
import './index.css'
import Signup from "./components/authentification/components/SignUp"
import Signin from "./components/authentification/components/SignIn"
import  {FirebaseContext} from  "./components/authentification"



const App=()=>{
  const [logedUser,setLogedUser]=useState(null)
  const firebase = useContext(FirebaseContext) ;

 useEffect(()=>setLogedUser(firebase.state.user),[firebase.state.user])
 
  return (
    <div className="App">

 
      <Main />
  
      
    </div>
  );
  }

export default App;