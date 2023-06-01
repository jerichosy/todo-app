"use client"
import './ListItem.css';

import { useContext } from 'react';
import { LevelContext } from './context/LevelContext';

export default function ListItem({ children }) {
  const level = useContext(LevelContext);
  return (
    <li className={`list-item-${level}`}>{children}</li>
  )
}
