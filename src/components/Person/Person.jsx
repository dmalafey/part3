
import React from 'react';
import PropTypes from 'prop-types';

import './Person.css';

const Person = ({
  name, age, click, changed, children,
}) => (
  <div className="Person">
    <p onClick={click}>
            I&apos;m
      {' '}
      {name}
      {' '}
            and I am
      {' '}
      {age}
      {' '}
            years old!
    </p>
    <p>{children}</p>
    <input type="text" onChange={changed} value={name} />
  </div>
);

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  click: PropTypes.func,
  changed: PropTypes.func,
  children: PropTypes.string,
};

Person.defaultProps = {
  click: undefined,
  changed: undefined,
  children: undefined,
};

export default Person;
