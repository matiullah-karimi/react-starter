import Login from "./pages/Login";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col bg-gray-50 h-screen">
      <Header />
      <main className="flex-1">
        <Login />
      </main>
      <Footer/>
    </div>
  );
}

export default App;
