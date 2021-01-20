import React,{useState} from 'react';
import './App.css';
import Post from './Components/Post/Post';


export default function App() {
  const [posts, setPosts] = useState([
    {
      username: "hamza ali",
      caption: "WOW it works",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"

    },
    {
      username: "hamza ahmed",
      caption: "Ohhhhh",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"

    },
    {
      username: "ahmed",
      caption: "How to work",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"

    },
    {
      username: "umar",
      caption: "Okkkkkk",
      imageUrl: "https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"

    }
  ])
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
      {/* Posts */}
      <Post />
      {/* Posts */}
      {
        posts.map((post)=> {
          <Post username={post.username} caption={post.caption} imageUrl={post.imgUrl} />
        })
      }
    </div>
  )
}
