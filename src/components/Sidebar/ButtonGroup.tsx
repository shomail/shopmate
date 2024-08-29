import { buttons, ActionType } from '../../lib/constants';
import { Button } from '../shared';

interface ButtonGroupProps {
  handleAction: (action: ActionType) => void;
}

export const ButtonGroup = ({ handleAction }: ButtonGroupProps) => {
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
