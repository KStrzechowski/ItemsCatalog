import React from 'react';
import { GetAvailableItems, ItemData } from './ItemData';
import { ItemList } from './ItemList';
import { PageTitle } from './PageTitle';
import { Page } from './Page';

interface Props {
  data: ItemData[];
}

export const HomePage = () => (
  <Page>
    <div>
      <PageTitle>Available items</PageTitle>
      <ItemList data={GetAvailableItems()} />
    </div>
  </Page>
);
