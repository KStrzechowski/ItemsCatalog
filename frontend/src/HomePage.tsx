import { GetAvailableItems, ItemData } from './ItemData';
import { ItemList } from './ItemList';
import { PageTitle } from './PageTitle';
import { Page } from './Page';

interface Props {
  data: ItemData[];
}

export const HomePage = () => {
  return (
    <Page>
      <div>
        <PageTitle>Available items</PageTitle>
      </div>
      <ItemList data={GetAvailableItems()} />
    </Page>
  );
};
