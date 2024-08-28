import { Button } from '../shared';

export const AddItemForm = () => {
  return (
    <form>
      <h2>Add an item</h2>
      <input type="text" placeholder="Item" />
      <Button>Add to list</Button>
    </form>
  );
};
