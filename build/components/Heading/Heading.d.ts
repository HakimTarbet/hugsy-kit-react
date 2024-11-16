import React from 'react';
import { LevelType } from './Heading.dto';
import './Heading.scss';
interface HeadingProps {
    children: React.ReactNode;
    level?: LevelType;
}
export declare const Heading: React.FC<HeadingProps>;
export {};
