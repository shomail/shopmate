import { Item, Item as ItemType } from './Item';

interface ItemListProps {
  items: ItemType[];
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
}

export const ItemList = ({ items, setItems }: ItemListProps) => {
  const handleChange = (id: number) => {
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
