import React from 'react';
import './Profile.css'
import logo from '../../Images/2102633.png';

function Profile() {
  return <div className='Profile'>
    <div>
      <div>
        <img className='Profile__img' src='https://kartinkin.net/uploads/posts/2021-07/thumbs/1625656494_9-kartinkin-com-p-oboi-minimalizm-krasivie-10.jpg' height="185px" width="100%"></img>
      </div>
      <div className='Profile__content'>
        <div>
          <div className='Profile__ava-text'>
            <img src={logo} height='120px'></img>
            <div>
              <span className='Profile__text-user'>User</span><br></br>
              <span className='Profile__text'>Date of Birth: 10 april</span><br></br>
              <span className='Profile__text'>City: Moscow</span><br></br>
              <span className='Profile__text'>Education: BSU'11</span>
            </div>
          </div>
        </div>
        <div className='posts'>
          <div className='post__heading'>
            <span>My posts</span>
          </div>
          <textarea className='post' rows='3'></textarea>
        </div>
        <div>
          <button className='Profile__button'>Send</button>
        </div>
        <div className='posts'>
          <div className='item'>
            <div className='post_pic'></div>
            <span className='post__text'>Hi! How are you?</span>
          </div>
          <div className='item'>
            <div className='post_pic'></div>
            <span className='post__text'>What are you doing today?</span>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Profile;