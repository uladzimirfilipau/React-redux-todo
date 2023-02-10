import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, completed, text }) => {
  const itemStyle = {
    textDecoration: completed ? 'line-through' : 'none',
  };

  return (
    <li onClick={onClick} style={itemStyle}>
      {text}
    </li>
  );
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
