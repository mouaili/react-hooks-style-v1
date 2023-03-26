import React, { useContext } from 'react';
import UserContext from '../context/DataContext';
import DataColor from '../context/DataColor';

const ContentData = () => {
  const user = useContext(UserContext);
  const data = useContext(DataColor);
  console.log(user, data);

  return (
    <ul
      style={{
        color: data.color,
        background: data.backgroundColor,
        padding: data.padding,
        textAlign: data.textAlign,
        listStyle: data.listStyleType,
        fontSize: data.fontSize,
      }}
    >
      <li>Name: {user.name}</li>
      <li>Age: {user.age}</li>
      <li>Color: {data.color}</li>
    </ul>
  );
};

export default ContentData;
