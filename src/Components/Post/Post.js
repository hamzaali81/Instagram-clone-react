import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';


//Material UI
export default function Post(props) {
    console.log(props);
    const { username,imageUrl,caption } = props;
    return (
        <div className="post">
            <div className="post__header">
             <Avatar className="post__avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <h3>{username}</h3>
            {/* //Avatar */}
            </div>

            {/* header --> avatar + username */}
            <img  className="post__image" src={imageUrl} alt="react-image" />
            {/* image */}
            <h4 className="post__text">{username}: <strong>Clever</strong> {caption}</h4>
            {/* username + caption */}
        </div>
    )
}
