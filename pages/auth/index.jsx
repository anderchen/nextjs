import React from 'react';

import User from '../../components/User';

const authIndexPage = () => {
  return (
    <div>
      <h1>The Auth Index Page</h1>
      <User name="Anderson" age={"30"}/>
    </div>
    );
};

export default authIndexPage;