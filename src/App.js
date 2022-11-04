import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar';
import Categories from './components/Categories';
import BookSection from './components/BookSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<BookSection />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
