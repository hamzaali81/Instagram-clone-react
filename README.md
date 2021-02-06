# Instagram Clone 
demo Project
(https://instagram-app-clone-b2a4f.web.app/)

## react-instagram-embed


```
import InstagramEmbed from 'react-instagram-embed';
<InstagramEmbed
  url='https://instagr.am/p/Zw9o4/'
  clientAccessToken='123|456'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>

```

url: your post url
```
clientAccessToken='your token'
Access token is combination of App Id and Client Token. See (https://developers.facebook.com/docs/instagram/oembed/#access-tokens) for more details.
```

