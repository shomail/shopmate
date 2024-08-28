export interface Item {
  id: number;
  name: string;
  status: boolean;
}

interface ItemProps {
  item: Item;
  handleChange: (id: number) => void;
}

export const Item = ({ item: { name, status, id }, handleChange }: ItemProps) => {
  const onCheckboxChange = () => {
    handleChange(id);
  };

  return (
    <li className="item">
      <label>
        <input type="checkbox" checked={status} onChange={onCheckboxChange} /> {name}
      </label>
      <button>❌</button>
    </li>
  );
};
