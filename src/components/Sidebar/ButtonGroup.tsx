import { Button } from '../shared';

const buttons = ['Mark all as complete', 'Mark all as incomplete', 'Reset to initial', 'Remove all items'] as const;

export const ButtonGroup = () => {
  return (
    <div className="button-group">
      {buttons.map((button) => (
        <Button key={button} variant="secondary">
          {button}
        </Button>
      ))}
    </div>
  );
};
