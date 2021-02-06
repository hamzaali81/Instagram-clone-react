import React,{useState, useEffect} from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';
import { db,stoage } from '../../firebase';
import firebase from '../../../node_modules/firebase/app';
//Material UI
export default function Post(props) {
    // console.log(props);
    const { user,username,imageUrl,caption,postId } = props;
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState([])
    const [postComment,setPostComment] = useState();
    console.log('props',props);
    useEffect(() => {
    // left unsubscribe
    let unsubscribe;
    if(postId){
        //nested listener
        unsubscribe = db.collection("post")
       .doc(postId)
       .collection("comments")
       .orderBy('timestamp','desc')
       .onSnapshot((snapshot)=> {
           setComments(snapshot.docs.map((doc)=> doc.data()));
       })
    }

    const postComment = (e)=> {
 e.preventDefault();
 db.collection("post").doc(postId).collection({
     text: comment,
     username: user.displayName,
     timestamp: firebase.firestore.FieldValue.server

 })
 setPostComment('');
    }
    return ()=> {
        unsubscribe();
    };

    },[postId])
    return (
        <div className="post">
            <div className="post__header">
             <Avatar className="post__avatar" alt="Remy Sharp" src={imageUrl} />
            <h3>{username}</h3>
            {/* //Avatar */}
            </div>

            {/* header --> avatar + username */}
            <img  className="post__image" src={imageUrl} alt="react-image" />
            {/* image */}
            <h4 className="post__text">{username}: <strong>Clever</strong> {caption}</h4>
            
                <div className="post__comments">
                    {comments.map((comment)=>(
                        <p>
                            <strong>{comment.username}</strong> {comment.text}
                        </p>
                    ))}
                </div>
           {/* {
               user && ( */}

            <form className="post__commentBox">

          <input
          className="post__input"
           type="text" 
           placeholder="Add a comment..."
           value={comment}
           onChange={(e)=> setComment(e.target.value)}
           />
           <button
           disabled={!comment}
           className="post__button"
           type="submit"
           onClick={postComment}
           >
           post
           </button>
            </form>
               {/* )
           } */}
            {/* username + caption */}
        </div>
    )
}
