// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from './pages/Dashboard';
import Navbar from './pages/Navbar';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element = {
              <Navbar title="Dashboard">
                <Dashboard/>
              </Navbar>
            }
          />
          <Route
            path = "/about"
            element = {
              <Navbar title="About">
                <About/>
              </Navbar>
            }
          />
          <Route
            path = "/news"
            element = {
              <Navbar title="News">
                <News/>
              </Navbar>
            }
          />
          <Route
          path="/news/:id"
          element={
            <Navbar title="News Detail">
              <NewsDetail />
            </Navbar>
          }
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;