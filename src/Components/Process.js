import React from "react";
import { Link } from "react-router-dom";

const Process = () => {
  return (
    <div className="process">
      <h3>My Specialties</h3>
      <p>I offer therapy sessions in person, in a comfy room, or online via video. I'm available most evenings."</p>

      <div className="p-div">
        <div className="processes">
          <img src="./images/pre.png" alt="abbys"></img>
          <p>Prenatal</p>
        </div>

        <div className="processes">
          <img src="./images/post.png" alt="abbys"></img>
          <p>Post Pregnancy </p>
        </div>

        <div className="processes">
          <img src="./images/baby.png" alt="abbys"></img>
          <p> Baby Loss </p>
        </div>

        <div className="processes">
          <img src="./images/sad.png" alt="abbys"></img>
          <p>Pregnancy Choices Depression </p>
        </div>

        <div className="processes">
          <img src="./images/relationship.png" alt="abbys"></img>
          <p>Relationship Issues </p>
        </div>
      </div>

      
    
      <div className="therapy-type">
        <h3> My Expertise</h3>

        <div className="t-type">
          <h4>Anxiety </h4>
          <h4>Behavioural Issues </h4>
        
          <h4>School Issues </h4>
          <h4>Self Esteem </h4>
          <h4> Women's Issues  </h4>
        </div>
      </div>
      <div className="quote">
        <h5>
          <span>"</span>I often use a Person-centered approach in my practice.
          In your first session, we'll explore what brought you to therapy and
          then decide the most appropriate ways to help you make progress.
        </h5>
      </div>
      <div className="therapy-type">
        <h3>Types of Therapy</h3>

        <div className="t-type">
          <h4>Attachment-based </h4>
          <h4>Christian Counselling </h4>
          <h4>Existential </h4>
          <h4>Gestalt </h4>
          <h4>Integrative </h4>
          <h4>Person-Centred </h4>
        </div>
      </div>

      <div className="get-started">
        <Link to="/booking">
          {" "}
          <button className="rounded-pill">BOOK A SESSION WITH ME</button>
        </Link>
      </div>
    </div>
  );
};

export default Process;
