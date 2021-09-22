/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { ItemData } from './ItemData';
import { CustomItem } from './Styles';

interface Props {
  data: ItemData;
}

export const Item = ({ data }: Props) => (
  <CustomItem>
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        font-size: 20px;
      `}
    >
      <Link
        to={`/items/${data.itemId}`}
        css={css`
          text-decoration: none;
          color: #02025a;
        `}
      >
        {data.name}
      </Link>
      <div
        css={css`
          color: #e2d300ac;
        `}
      >{`  ${data.price}$`}</div>
    </div>
    <div>{`Condition: ${data.condition}`}</div>
    <div>
      {data.description.length > 50
        ? `${data.description.substring(0, 47)}...`
        : `${data.description}`}
    </div>
  </CustomItem>
);
