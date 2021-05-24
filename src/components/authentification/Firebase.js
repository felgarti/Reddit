import app from 'firebase/app'
import 'firebase/auth'
import "firebase/firestore"


class Firebase  
{
    constructor()
    {
        
        this.state={
            user : null 
        }
        app.initializeApp({
            apiKey: "AIzaSyCGl5NXcvHWWMOJOUbnbDaT3emDtTm6bMM",
            authDomain: "argarti-7cde7.firebaseapp.com",
            projectId: "argarti-7cde7",
            storageBucket: "argarti-7cde7.appspot.com",
            messagingSenderId: "475608311331",
            appId: "1:475608311331:web:0aa644de0904bd26e27396",
            measurementId: "G-CN744ZBE2N"
          });

            this.auth=app.auth() ;
    }
    SignupUser=(email,password)=>
    {
        return this.auth.createUserWithEmailAndPassword(email,password)
    }
    SigninUser=(email,password)=>
    {
       return  this.auth.signInWithEmailAndPassword(email,password)
    }
    SignoutUser=()=>
    {
        return this.auth.signOut()
    }
}

export default Firebase ; 