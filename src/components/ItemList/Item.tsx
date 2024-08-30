import { useItemsStore } from '../../lib/store/itemsStore';

export interface Item {
  id: number;
  name: string;
  status: boolean;
}

interface ItemProps {
  item: Item;
}

export const Item = ({ item: { name, status, id } }: ItemProps) => {
  const { toggleItemStatus, deleteItem } = useItemsStore();
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={status} onChange={() => toggleItemStatus(id)} /> {name}
      </label>
      <button onClick={() => deleteItem(id)}>❌</button>
    </li>
  );
};
