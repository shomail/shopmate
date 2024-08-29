import { Counter } from './Counter';
import { Logo } from './Logo';

interface HeaderProps {
  totalItems: number;
  checkedItems: number;
}

export const Header = ({ totalItems, checkedItems }: HeaderProps) => {
  return (
    <header>
      <Logo />
      <Counter totalItems={totalItems} checkedItems={checkedItems} />
    </header>
  );
};
