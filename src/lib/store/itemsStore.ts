import { create } from 'zustand';
import { Item as ItemType } from '../../components/ItemList/Item';

interface ItemStore {
  items: ItemType[];
  addItem: (item: string) => void;
}

export const useItemsStore = create<ItemStore>((set) => ({
  items: [],
  addItem: (name: string) =>
    set((state) => ({
      items: [
        ...state.items,
        {
          id: Date.now(),
          name,
          status: false,
        },
      ],
    })),
  deleteItem: (id: number) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  toggleItemStatus: (id: number) => {
    set((state) => ({
      items: state.items.map((item) => (item.id === id ? { ...item, status: !item.status } : item)),
    }));
  },
  removeAllItems: () => {
    set({ items: [] });
  },
  markAllAsComplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, status: true })),
    }));
  },
  markAllAsIncomplete: () => {
    set((state) => ({
      items: state.items.map((item) => ({ ...item, status: false })),
    }));
  },
  resetToInitial: () => {
    set({ items: [] });
  },
}));
