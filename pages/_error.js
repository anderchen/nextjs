import React from 'react';

import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => {
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <p>Try 
        <Link href="/auth">
          <a>going back</a>
        </Link>.
      </p>
    </div>
  );
};

export default indexPage;