import Header from './components/Header';
import Footer from './components/Footer';
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 max-w-7xl p-4 sm:px-6 md:px-8">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
