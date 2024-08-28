import { useState } from 'react';
import { Item, Item as ItemType } from './Item';

export const ItemList = () => {
  const [items, setItems] = useState<ItemType[]>([
    {
      id: '1',
      name: 'milk',
      status: false,
    },
    {
      id: '2',
      name: 'eggs',
      status: false,
    },
    {
      id: '3',
      name: 'bread',
      status: false,
    },
  ]);

  const handleChange = (id: string) => {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, status: !item.status } : item)));
  };

  if (!items.length) {
    return <p className="no-items-message">No items found</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item key={item.id} handleChange={handleChange} item={item} />
      ))}
    </ul>
  );
};
