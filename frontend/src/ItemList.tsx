/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { ItemData } from './ItemData';
import { Item } from './Item';
import { CustomList } from './Styles';

interface Props {
  data: ItemData[];
}

export const ItemList = ({ data }: Props) => (
  <CustomList>
    {data.map((item) => (
      <li key={item.itemId}>
        <Item data={item} />
      </li>
    ))}
  </CustomList>
);
