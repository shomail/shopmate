import { Background, Footer, Header, ItemList, Sidebar } from './components';

function App() {
  return (
    <>
      <Background />
      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
