import { ItemData } from './ItemData';
import { Item } from './Item';

interface Props {
  data: ItemData[];
}

export const ItemList = ({ data }: Props) => (
  <ul>
    {data.map((item) => (
      <li key={item.itemId}>
        <Item data={item} />
      </li>
    ))}
  </ul>
);
