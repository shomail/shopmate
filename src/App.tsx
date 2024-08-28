import { useState } from 'react';
import { Background, Footer, Header, ItemList, Sidebar } from './components';
import { Item as ItemType } from './components/ItemList/Item';

function App() {
  const [items, setItems] = useState<ItemType[]>([
    {
      id: Date.now(),
      name: 'milk',
      status: false,
    },
    {
      id: Date.now(),
      name: 'eggs',
      status: false,
    },
    {
      id: Date.now(),
      name: 'bread',
      status: false,
    },
  ]);

  const handleAddItem = (name: string) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: Date.now(),
        name,
        status: false,
      },
    ]);
  };

  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList items={items} setItems={setItems} />
        <Sidebar handleAddItem={handleAddItem} />
      </main>
      <Footer />
    </>
  );
}

export default App;
