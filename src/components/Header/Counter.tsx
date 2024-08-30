import { useItemsStore } from '../../lib/store/itemsStore';

export const Counter = () => {
  const { items } = useItemsStore();
  const totalItems = items.length;
  const checkedItems = items.filter((i) => i.status).length;

  if (totalItems === 0) {
    return (
      <p>
        {' '}
        <b>0</b> items in cart
      </p>
    );
  }

  return (
    <p>
      {' '}
      <b>{checkedItems}</b> / {totalItems} items in cart
    </p>
  );
};
