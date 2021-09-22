export interface ItemData {
  itemId: number;
  name: string;
  available: boolean;
  price: number;
  condition: Condition;
  description: string;
}

export type Condition = 'New' | 'Used';

const items: ItemData[] = [
  {
    itemId: 1,
    name: 'Chair',
    available: true,
    price: 100,
    condition: 'New',
    description: 'Solid oak chair',
  },
  {
    itemId: 2,
    name: 'Table',
    available: true,
    price: 400,
    condition: 'New',
    description: 'Solid oak table',
  },
];

export const GetAvailableItems = () => {
  return items.filter((q) => q.available === true);
};
