import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';


//Material UI
export default function Post(props) {
    console.log(props);
    return (
        <div className="post">
             <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            {/* //Avatar */}

            <h3>Username</h3>
            {/* header --> avatar + username */}
            <img className="post__image" src="https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png" alt="react-image"/>
            {/* image */}
            <h4 className="post__text">Username: <strong>Clever</strong> Wow day three live session</h4>
            {/* username + caption */}
        </div>
    )
}
