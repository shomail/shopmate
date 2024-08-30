import { buttons, ActionType } from '../../lib/constants';
import { useItemsStore } from '../../lib/store/itemsStore';
import { Button } from '../shared';

export const ButtonGroup = () => {
  const { markAllAsComplete, markAllAsIncomplete, removeAllItems, resetToInitial } = useItemsStore();

  const handleAction = (action: ActionType) => {
    if (action === 'REMOVE_ALL_ITEMS') {
      removeAllItems();
    }
    if (action === 'MARK_ALL_AS_COMPLETE') {
      markAllAsComplete();
    }
    if (action === 'MARK_ALL_AS_INCOMPLETE') {
      markAllAsIncomplete();
    }
    if (action === 'RESET_TO_INITIAL') {
      resetToInitial();
    }
  };
  return (
    <div className="button-group">
      {buttons.map(({ action, label }) => (
        <Button key={action} variant="secondary" onClick={() => handleAction(action)}>
          {label}
        </Button>
      ))}
    </div>
  );
};
