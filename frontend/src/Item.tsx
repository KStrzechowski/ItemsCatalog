import React from 'react';
import { ItemData } from './ItemData';

interface Props {
  data: ItemData;
}

export const Item = ({ data }: Props) => (
  <div>
    <div>{data.name}</div>
    <div>{`Condition: ${data.condition}, price: ${data.price}$`}</div>
    <div>
      {data.description.length > 50
        ? `${data.description.substring(0, 47)}...`
        : `${data.description}`}
    </div>
  </div>
);
