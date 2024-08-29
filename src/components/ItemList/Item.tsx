export interface Item {
  id: number;
  name: string;
  status: boolean;
}

interface ItemProps {
  item: Item;
  handleToggleItemStatus: (id: number) => void;
  handleDeleteItem: (id: number) => void;
}

export const Item = ({ item: { name, status, id }, handleToggleItemStatus, handleDeleteItem }: ItemProps) => {
  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={status} onChange={() => handleToggleItemStatus(id)} /> {name}
      </label>
      <button onClick={() => handleDeleteItem(id)}>❌</button>
    </li>
  );
};
