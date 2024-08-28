import { AddItemForm } from './AddItemForm';
import { ButtonGroup } from './ButtonGroup';

interface SidebarProps {
  handleAddItem: (item: string) => void;
}

export const Sidebar = ({ handleAddItem }: SidebarProps) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup />
    </div>
  );
};
