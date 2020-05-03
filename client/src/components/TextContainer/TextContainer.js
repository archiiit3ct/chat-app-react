import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

// Container for displaying users in the room
const TextContainer = ({ users }) => (
  <div className="textContainer">
    {
      users
        ? ( // Check are there any users
          <div>
            <h1>Users in a room:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => ( // Display users
                  <div key={name} className="activeItem">
                    {name[0].toUpperCase() + name.slice(1)}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;