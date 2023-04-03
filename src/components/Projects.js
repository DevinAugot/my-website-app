import React, { useState } from 'react';
import NavBar from './NavBar';

function ProjectPage() {
  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  return (
    <>
      <NavBar />
      <div className="h1-project">
        <h1>Current & Completed Project's</h1>
      </div>
      <div className="para-div">
        <p>
          Hey, Welcome to my project page. This page will give you some idea of
          what I'm capable of as a Developer currently as im still learning to
          code and constantly imporiving my skills by pursuing some passion
          projects and some fun web based game builds over the last 8 months.
          I'm continsouly growing and honing my skills between what I'm learning
          in college and pursuing in my free time studies. I hope you enjoy!
        </p>
      </div>

      <div className="btn-div">
        <button onClick={openModal}>My Most Current Project</button>
      </div>

      <div id="myModal" className="modal" style={{ display: modalVisible ? 'block' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <img id="pro-1" src="./images/InstaCodeHome.png" alt="Insta-code" />
          <img id="pro-1" src="./images/InstaCodeLogin.png" alt="Insta-code" />
          <img id="pro-1" src="./images/InstaCodeSignUp.png" alt="Insta-code" />
          <img id="pro-1" src="./images/FeedPage.png" alt="" />
          <p>
            This is a current sprint project I'm doing in college that is a
            ficitious social media website very similar to instagram that,
            allows users to post current coding projects,pictures, code
            snippet's and even allows them to ask for help debugging etc. This
            program/app runs on fetch api's that grab data from user inputs and
            parse and stringify the JSON data from a live server react database
            which in turn posts user information on a feed page once the log in
            or sign up is confirmed.
          </p>
        </div>
      </div>

      <div className="exp-tabs">
        <div className="row">
          {/* your other tabs here */}
        </div>
      </div>
    </>
  );
}

export default ProjectPage;

