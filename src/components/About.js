import React from 'react';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="about-section">
          <h1 className="about-heading text-center">About iNotebook</h1>
          <p className="about-description">
            iNotebook is a secure, cloud-based note-taking app that helps you stay organized, productive, and in control of your ideas — anytime, anywhere. Whether you're a student, developer, writer, or professional, iNotebook makes it easy to create, manage, and access your notes across devices.
          </p>
          <p className="about-description">
            With features like real-time editing, tag-based organization, and secure authentication, iNotebook ensures your data is both accessible and protected. No more sticky notes or scattered files — everything is neatly stored and searchable in one place.
          </p>
          <p className="about-description">
            Our mission is to build a clean, intuitive, and privacy-first platform that empowers users to focus on what matters most: their thoughts, tasks, and creative process.
          </p>

          <h3 className="about-heading text-center my-4">Note Management with CRUD Operations</h3>
          <p className="about-description">
            iNotebook is built around robust CRUD operations to give you full control over your notes:
          </p>
          <ul className="about-description">
            <li><strong>Create:</strong> Add new notes with a title, description, and tag.</li>
            <li><strong>Read:</strong> View your saved notes anytime from your personal dashboard.</li>
            <li><strong>Update:</strong> Edit existing notes in-place to keep your information up to date.</li>
            <li><strong>Delete:</strong> Remove notes you no longer need — permanently and securely.</li>
          </ul>
          <p className="about-description">
            All operations are handled securely through authenticated API calls, ensuring your data is private and only accessible to you.
          </p>

          <h3 className="about-heading text-center my-4">Meet Our Team</h3>
          <div className="row my-4">
            <div className="col-md-4 team-member text-center">
              <img src="" alt="Team Member 1" />
              <h5>Harry</h5>
              <p>Guider</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img src="" alt="Team Member 2" />
              <h5>Varshini</h5>
              <p>Founder & Lead Developer</p>
            </div>
            <div className="col-md-4 team-member text-center">
              <img src="" alt="Team Member 3" />
              <h5>Bootstrap</h5>
              <p>Supporter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
