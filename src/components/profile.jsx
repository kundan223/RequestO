// Profile.js
import React from 'react';

const Profile = () => {
  // Dummy data (you can replace this with actual data from your application)
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePicture: 'https://example.com/profile-picture.jpg',
  };

  return (
    <div className="profile">
      <img src={user.profilePicture} alt="Profile" />
      <div>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default Profile;
