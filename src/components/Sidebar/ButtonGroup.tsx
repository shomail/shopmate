import { buttons } from '../../lib/constants';
import { Button } from '../shared';

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
