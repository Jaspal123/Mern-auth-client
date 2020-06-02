import React from 'react';
import Layout from './core/Layout';

function App() {
  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
        <h1 className="p-5">React Node MongoDB Express Autentication Boilerplate</h1>
        <h2>MERN STACK</h2>
        <p className="lead">
        MERN stack login register system with account activation,login with facebook and google as well as protected and private routes for authenticated user and users with admin role.
        </p>
      </div>
    </Layout>
  );
}

export default App;
