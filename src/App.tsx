import { Background, Footer, Header, ItemList, Sidebar } from './components';
import { Item as ItemType } from './components/ItemList/Item';
import { ActionType } from './lib/constants';
import { useLocalStorage } from './lib/hooks';

function App() {
  const [items, setItems] = useLocalStorage<ItemType[]>('items', []);

  const handleAddItem = (name: string) => {
    setItems([
      ...items,
      {
        id: Date.now(),
        name,
        status: false,
      },
    ]);
  };

  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggleItemStatus = (id: number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, status: !item.status } : item)));
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleMarkAllAsComplete = () => {
    setItems(items.map((item) => ({ ...item, status: true })));
  };

  const handleMarkAllAsIncomplete = () => {
    setItems(items.map((item) => ({ ...item, status: false })));
  };

  const handleResetToInitial = () => {
    setItems([
      {
        id: Date.now(),
        name: 'milk',
        status: false,
      },
    ]);
  };

  const handleAction = (action: ActionType) => {
    if (action === 'REMOVE_ALL_ITEMS') {
      handleRemoveAllItems();
    }
    if (action === 'MARK_ALL_AS_COMPLETE') {
      handleMarkAllAsComplete();
    }
    if (action === 'MARK_ALL_AS_INCOMPLETE') {
      handleMarkAllAsIncomplete();
    }
    if (action === 'RESET_TO_INITIAL') {
      handleResetToInitial();
    }
  };

  return (
    <>
      <Background />
      <main>
        <Header totalItems={items.length} checkedItems={items.filter((i) => i.status).length} />
        <ItemList items={items} handleToggleItemStatus={handleToggleItemStatus} handleDeleteItem={handleDeleteItem} />
        <Sidebar handleAddItem={handleAddItem} handleAction={handleAction} />
      </main>
      <Footer />
    </>
  );
}

export default App;
