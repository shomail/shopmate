import { ActionType } from '../../lib/constants';
import { AddItemForm } from './AddItemForm';
import { ButtonGroup } from './ButtonGroup';

interface SidebarProps {
  handleAddItem: (item: string) => void;
  handleAction: (action: ActionType) => void;
}

export const Sidebar = ({ handleAddItem, handleAction }: SidebarProps) => {
  return (
    <div className="sidebar">
      <AddItemForm handleAddItem={handleAddItem} />
      <ButtonGroup handleAction={handleAction} />
    </div>
  );
};
