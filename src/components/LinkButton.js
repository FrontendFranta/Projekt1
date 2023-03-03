import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const LinkButton = ({ to, text }) => {
  return (
    <Link to={to}>
      <Button text={text} />
    </Link>
  );
};

export default LinkButton;
