import React from 'react';
import { UserIcon } from './Icons';

export const Header = () => (
  <div>
    <a href="./">ItemsCatalog</a>
    <input type="text" placeholder="Search..." />
    <a href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);
