import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer/Footer';


function App() {
  return (
<BrowserRouter>
<Header />
<Main>
</Main>
<Footer></Footer>
</BrowserRouter>
  );
}

export default App;
