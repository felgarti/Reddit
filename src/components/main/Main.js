import React,{useState,useContext} from 'react' ; 
import './popup-form/popup.css'
import Articles from './Article';
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route ,Link} from "react-router-dom" ;
import { Container } from './popup-form/Container';
import {FirebaseContext} from '../authentification/'

function Main() {
    const firebase = useContext(FirebaseContext) ; 
    
  const[subreddit, setSubreddit]=useState('memes');
  const[popup, setPopup]=useState(false);
  const onSubmit = (event) => {
  event.preventDefault(event);
  console.log(event.target.name.value);
  console.log(event.target.email.value);
};


    return ( <div className="main" style={{height : "auto" }}>
      
        <Router>
       
   
   <Navbar subreddit={subreddit} setSubreddit={setSubreddit} popup={popup} setPopup={setPopup} /> 

       
       
        
       
      <Switch>
      <Route exact path="/">
      <Articles subreddit={subreddit}  media={""} />  <Container onSubmit={onSubmit} popup={popup} setPopup={setPopup} firebase={firebase} /> 
          </Route>
         
        
         
          
          <Route exact path="/images">
      <Articles subreddit={subreddit} media={"image"} />  <Container onSubmit={onSubmit} popup={popup} setPopup={setPopup} firebase={firebase} /> 
          </Route>
          <Route exact path="/videos">
      <Articles subreddit={subreddit}  media={"video"} />  <Container onSubmit={onSubmit} popup={popup} setPopup={setPopup}  firebase={firebase} /> 
          </Route>
          
    
    
      </Switch>
       
     


</Router>
       
        </div>
    )
    }

export default Main
