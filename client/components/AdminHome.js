import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const AdminHome = () => {
  return (
    <div>
      <h1>
        hello World!
      </h1>
    </div>
  )
}

export default connect(null, null)(AdminHome);
