import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div class="flex flex-row">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </>
  );
}

export default App;
