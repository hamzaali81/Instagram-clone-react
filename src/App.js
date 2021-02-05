import React,{ useState,useEffect } from 'react';
import './App.css';
import Post from './Components/Post/Post';
import { db,auth } from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';


console.log(db);

function getModalStyle() {
  const top = 50 ;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));


export default function App() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  // const [posts, setPosts] = useState([]);
  const [open, setOpen]= useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null)
  const [openSignIn, setOpenSignIn] = useState(false);

  useEffect(() => {
    const unsubscribe = 
     auth.onAuthStateChanged(function (authUser) { //persistance
          if (authUser) {
              // User is signed in.
              console.log(authUser);
              setUser(authUser);
              if(authUser.displayName){
                //don't update username
              }
  else{
     return authUser.updateProfile({
       //if we just create someone
       displayName: username,
     })
  }
          } else {
              // User is signed out.
              setUser(null)
          }
      });
      return ()=> {
        //perform some cleanup action
        unsubscribe();
      }
    },[user, username])
 
    //useEffect -> Runs a piece of code based on a specific condition

  useEffect(()=>{
    //this is where the codes run
    db.collection('posts').onSnapshot(snapshot => {
      console.log(snapshot);
      // every time a new post is added, this code firebase
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post:  doc.data()

      })
      ))
    })
  },[])

  const signUp = (e)=> {
    //  setOpen(true)
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email, password)
         .then(function (authUser) {
                console.log(authUser);
                // authUser.user
              return authUser.user.updateProfile({
                  displayName: username
                })
         })
         .catch(function (error) {
           alert(error.message)
         });
         return setOpen(false)
    }
    

  const signIn = (e)=> {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
          alert(error.message)
    
        });
    setOpenSignIn(false)
    }
    const emailfn = (e)=>{
      setEmail(e.target.value)
    }
    const passwordfn = (e)=> {
      setPassword(e.target.value)
    }
    
    const usernamefn = (e)=> {
      setUsername(e.target.value)
    
    }

  console.log(posts);
  return (
    <div className="app">

<Modal
        open={open}
        onClose={()=> setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        
         <div style={modalStyle} className={classes.paper}>
           <form className="app__signup">
           <center>
     <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="instagram" />
          
     </center>
     <Input type="text" placeholder="username" value={username} onChange={usernamefn}/>
          <Input type="text" placeholder="email" value={email} onChange={emailfn}/>
          <Input type="password" placeholder="password" value={password} onChange={passwordfn}/>
          <Button type="submit" onClick={signUp}>Sign Up</Button>
             </form>   
    
    </div>
      </Modal>
<Modal
        open={openSignIn}
        onClose={()=> setOpenSignIn(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        
         <div style={modalStyle} className={classes.paper}>
           <form className="app__signup">
           <center>
     <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="instagram" />
          
     </center>
          <Input type="text" placeholder="email" value={email} onChange={emailfn}/>
          <Input type="password" placeholder="password" value={password} onChange={passwordfn}/>
          <Button type="submit" onClick={signIn}>SignIn</Button>
             </form>   
    
    </div>
      </Modal>

      <div className="app__header">
          <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="instagram" />
      </div>
      {
        user ?(

          <Button onClick={()=> auth.signOut()}>Logout</Button>
        ) : (
          <div className="app__loginContainer">

            <Button onClick={()=> setOpenSignIn(true)}>Sign In</Button>
            <Button onClick={()=> setOpen(true)}>Sign Up</Button>

          </div>
        )

      }

      <h1>Hello Clever Programmer's Let's build an Instagram Clone</h1>
  
      {
        posts.map(({id,post})=> (
          // console.log(post);
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }
    </div>
  )
}
