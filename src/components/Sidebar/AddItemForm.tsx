import { useState } from 'react';
import { Button } from '../shared';

interface AddItemProps {
  handleAddItem: (item: string) => void;
}

export const AddItemForm = ({ handleAddItem }: AddItemProps) => {
  const [item, setItem] = useState('');

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!item) return;
    handleAddItem(item);
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
