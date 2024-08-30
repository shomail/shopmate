import Select from 'react-select';
import { Item, Item as ItemType } from './Item';
import { useState } from 'react';
import { useItemsStore } from '../../lib/store/itemsStore';

export type OptionValue = 'default' | 'checked' | 'unchecked';

const options: Array<{ value: OptionValue; label: string }> = [
  { value: 'default', label: 'Sort by Default' },
  { value: 'checked', label: 'Sort by Items in Cart' },
  { value: 'unchecked', label: 'Sort by Items Left' },
];

export const ItemList = () => {
  const { items } = useItemsStore();
  const [sortBy, setSortBy] = useState<OptionValue>('default');

  const sortedItems = (items: ItemType[]) => {
    if (sortBy === 'checked') {
      return items.sort((a, b) => (a.status === b.status ? 0 : a.status ? -1 : 1));
    }

    if (sortBy === 'unchecked') {
      return items.sort((a, b) => (a.status === b.status ? 0 : a.status ? 1 : -1));
    }

    return items;
  };

  if (!items.length) {
    return <p className="no-items-message">No items found</p>;
  }

  return (
    <ul className="item-list">
      <section className="sorting">
        <Select options={options} defaultValue={options[0]} onChange={(option) => setSortBy(option!.value)} />
      </section>
      {sortedItems(items).map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
};
