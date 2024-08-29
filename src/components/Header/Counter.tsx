interface CounterProps {
  totalItems: number;
  checkedItems: number;
}

export const Counter = ({ totalItems, checkedItems }: CounterProps) => {
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
