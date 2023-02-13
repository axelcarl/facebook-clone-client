import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const search = (event) => {
    if (event.key === 'Enter')
      navigate(`/users?searchTerm=${searchTerm}`);
  }

  return (
    <div
      className='banner-container'
    >
      <div className="banner-logo" onClick={() => navigate('/')}>
        facebook
      </div>
      <div className="banner-search">
        <input
          type="text"
          className="friend-search"
          placeholder='Friend Search, Ex. "John"'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={e => search(e)}
        />
      </div>
    </div>
  );
}

export default Banner;