import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex flex-1">

          <BrowserRouter>
            <Sidebar />
            <section className="flex-1 p-6">
              <Routes>
                <Route path="/" element={<h1>หน้าแรก</h1>} />
                <Route
                  path="/about"
                  element={<h1 className="text-xl">เกี่ยวกับเรา</h1>}
                />
                <Route path="/contact" element={<h1>ติดต่อเรา</h1>} />
              </Routes>
            </section>
          </BrowserRouter>

        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
