import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import {face} from 'material-design-icons';

const App = () =>{
   return (<div className="ui comments">
   <h3 className="ui dividing header">Comments</h3>
   <div className="comment">
     <a href="/" className="avatar">
       <i class="material-icons md-48">face</i>
     </a>
     <div className="content">
       <a className="author">Matt</a>
       <div className="metadata">
         <span className="date">Today at 5:42PM</span>
       </div>
       <div className="text">
         How artistic!
       </div>
       <div className="actions">
         <a className="reply">Reply</a>
       </div>
     </div>
   </div>
   <div className="comment">
     <a className="avatar">
     <i class="material-icons md-48">{face}</i>
     </a>
     <div className="content">
       <a className="author">Elliot Fu</a>
       <div className="metadata">
         <span className="date">Yesterday at 12:30AM</span>
       </div>
       <div className="text">
         <p>This has been very useful for my research. Thanks as well!</p>
       </div>
       <div className="actions">
         <a className="reply">Reply</a>
       </div>
     </div>
     <div className="comments">
       <div className="comment">
         <a className="avatar">
         <i class="material-icons md-48">face</i>
         </a>
         <div className="content">
           <a className="author">Jenny Hess</a>
           <div className="metadata">
             <span className="date">Just now</span>
           </div>
           <div className="text">
             Elliot you are always so right :)
           </div>
           <div className="actions">
             <a className="reply">Reply</a>
           </div>
         </div>
       </div>
     </div>
   </div>
   <div className="comment">
     <a className="avatar">
     <i class="material-icons md-48">face</i>
     </a>
     <div className="content">
       <a className="author">Joe Henderson</a>
       <div className="metadata">
         <span className="date">5 days ago</span>
       </div>
       <div className="text">
         Dude, this is awesome. Thanks so much
       </div>
       <div className="actions">
         <a className="reply">Reply</a>
       </div>
     </div>
   </div>
   <form className="ui reply form">
     <div className="field">
       <textarea></textarea>
     </div>
     <div className="ui blue labeled submit icon button">
       <i className="icon edit"></i> Add Reply
     </div>
   </form>
 </div>
 )
}

ReactDOM.render(<App />, document.querySelector('#root'))