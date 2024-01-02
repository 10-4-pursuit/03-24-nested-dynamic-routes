import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Nav from './components/Nav';



function App() {
  return (
    <BrowserRouter> 
    <div className="App">
    <Nav />

    <Blog /> 
    {/* <h1>Home Page</h1>  */}
    </div>
</BrowserRouter>
  );
}

// const Home = () => {
//   return (
// <div> 
// <h1>Home</h1>
// </div>
//   )
//  }

export default App;

