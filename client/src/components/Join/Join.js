import React, { useState } from 'react';
import { Link } from "react-router-dom";
import chat from '../../icons/chat.png';
import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
        <div className="joinInnerContainer">
          <img className="chatIcon" src={chat} alt="chat icon" />
         <h1 className="heading">Chat-BOX</h1>
         <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
         </div>
         <div>
          <input placeholder="Group" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
         </div>
         <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">JOIN</button>
         </Link><br></br><br></br><br></br>
         <h6 className="footer">© Developed by Dhanushka S. Jayasinghe</h6>
        </div>
    </div>
  );
}
