/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserIcon } from './Icons';
import {
  fontSize,
  fontFamily,
  gray1,
  CustomInput,
  CustomButton,
} from './Styles';

export const Header = () => {
  const navigate = useNavigate();
  const handleAddItemClick = () => {
    navigate('additem');
  };

  return (
    <div
      css={css`
        height: 100px;
        font-size: ${fontSize};
        font-family: ${fontFamily};
        outline-color: ${gray1};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
      `}
    >
      <Link
        to="/"
        css={css`
          text-decoration: none;
          color: black;
          font-size: 20px;
          font-weight: bold;
          font-family: ${fontFamily};
        `}
      >
        Items Catalog
      </Link>
      <CustomInput type="text" placeholder="Search..." />
      <CustomButton onClick={handleAddItemClick}>Add Item</CustomButton>
      <Link to="signin">
        <UserIcon />
        <span>Sign In</span>
      </Link>
    </div>
  );
};
