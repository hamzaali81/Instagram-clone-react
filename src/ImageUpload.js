import React, { useState,useEffect } from 'react'
import Button from '@material-ui/core/Button';
import { db,storage } from './firebase';
import firebase from "firebase";
import './imageUpload.css';


export default function ImageUpload({username}) {
    console.log('props',username);
    const [image, setImage] = useState('');
    const [progress, setProgress] = useState(0);
    const [caption, setCaption] = useState('');

    const handleChange = (e)=> {
        if(e.target.files[0]){
            console.log(e.target.files[0]);
            setImage(e.target.files[0])
        }
    }
 
    const handleUpload = () => {

// Upload the file and metadata
  var uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on('state_changed', 
  (snapshot) => {
      //Progress Function
    var progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log('Upload is ' + progress + '% done');
    setProgress(progress)
    
  }, 
  (error) => {
  //Error function
  console.log(error);
  alert(error.message);
  },
  ()=> {
  // complete function ...
  storage
  .ref("images")
  .child(image.name)
  .getDownloadURL()
  .then((url) => {
  // post image inside db
  console.log('File available at', url);
   db.collection("posts").add({
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    caption: caption,
    imageUrl: url,
    username: username
   });
   setProgress(0);
   setCaption("");
   setImage(null);
})
  }

);
}


    return (
        <div className="imageUpload">
            {/* 
      I want to have 
      Caption input
      File Picker
      Post Button */}
            {/* <h1>Image Upload</h1> */}
            <progress className="imageUpload__progress" value={progress} max="100" />
            <input type="text" placeholder="Enter a caption...." onChange={e=> setCaption(e.target.value)}/>
            <input type="file" onChange={handleChange} name="image-file"/>
            <Button onClick={handleUpload}>
                Upload
            </Button>
        </div>
    )
}
