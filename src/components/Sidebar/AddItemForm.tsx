import { useState } from 'react';
import { Button } from '../shared';
import { useItemsStore } from '../../lib/store/itemsStore';

export const AddItemForm = () => {
  const { addItem } = useItemsStore();
  const [item, setItem] = useState('');

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item) return;
    addItem(item);
    setItem('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Add an item</h2>
      <input autoFocus type="text" placeholder="Name..." value={item} onChange={(e) => setItem(e.target.value)} />
      <Button>Add to list</Button>
    </form>
  );
};
