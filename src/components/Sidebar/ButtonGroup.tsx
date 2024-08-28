import { Button } from '../shared';

export const ButtonGroup = () => {
  return (
    <div className="button-group">
      <Button variant="secondary">Mark all as complete</Button>
      <Button variant="secondary">Mark all as incomplete</Button>
      <Button variant="secondary">Reset to initial</Button>
      <Button variant="secondary">Remove all items</Button>
    </div>
  );
};
