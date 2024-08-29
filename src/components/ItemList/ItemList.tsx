import { Item, Item as ItemType } from './Item';

interface ItemListProps {
  items: ItemType[];
  handleDeleteItem: (id: number) => void;
  handleToggleItemStatus: (id: number) => void;
}

export const ItemList = ({ items, handleToggleItemStatus, handleDeleteItem }: ItemListProps) => {
  if (!items.length) {
    return <p className="no-items-message">No items found</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <Item
          key={item.id}
          handleToggleItemStatus={handleToggleItemStatus}
          item={item}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </ul>
  );
};
