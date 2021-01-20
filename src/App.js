import React,{ useState,useEffect } from 'react';
import './App.css';
import Post from './Components/Post/Post';
import { db } from './firebase';

console.log(db);
export default function App() {
  const [posts, setPosts] = useState([]);
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
  console.log(posts);
  return (
    <div className="app">
      <div className="app__header">
          <img 
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" 
          alt="instagram" />
      </div>
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
