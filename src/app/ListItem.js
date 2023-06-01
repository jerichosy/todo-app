"use client"
import './ListItem.css';

import { useContext } from 'react';
import { LevelContext } from './context/LevelContext';

export default function ListItem({ children }) {
  const level = useContext(LevelContext);
  console.log(level)
  if (level === 0) {
    throw Error('List item must be inside a list!');
  }
  if (level > 4) {
    throw Error('Unsupported level: ' + level);
  }
  return (
    <li className={`list-item-${level}`}>{children}</li>
  )
}
