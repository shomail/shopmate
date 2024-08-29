export type ActionType = 'MARK_ALL_AS_COMPLETE' | 'MARK_ALL_AS_INCOMPLETE' | 'RESET_TO_INITIAL' | 'REMOVE_ALL_ITEMS';

export const buttons = [
  {
    action: 'MARK_ALL_AS_COMPLETE',
    label: 'Mark all as complete',
  },
  {
    action: 'MARK_ALL_AS_INCOMPLETE',
    label: 'Mark all as incomplete',
  },
  {
    action: 'RESET_TO_INITIAL',
    label: 'Reset to initial',
  },
  {
    action: 'REMOVE_ALL_ITEMS',
    label: 'Remove all items',
  },
] as const;
