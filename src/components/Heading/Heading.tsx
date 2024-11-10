import React from 'react';
import { LevelType } from './Heading.dto';

import './Heading.scss';

interface HeadingProps {
  children: React.ReactNode;
  level?: LevelType;
}

export const Heading: React.FC<HeadingProps> = ({ level = 1, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag>{children}</Tag>;
};