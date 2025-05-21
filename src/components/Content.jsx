import React from "react";
import ButtonOk from "./ButtonOk";
import TitleNews from "./TitleNews";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

const Content = () => {
  return (
    <div className="p-8  bg-white rounded-lg shadow-md">
      <h1>Content</h1>
      {/* <ButtonOk text="OK" />
      <ButtonOk text="Register" />
      <TitleNews title={"Test news 1"} />
      <TitleNews title={"Test news 2"} />
      <TitleNews title={"Test news 3"} />
      <TitleNews title={"Test news 4"} /> */}

      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<h1>หน้าแรก</h1>} />
          <Route
            path="/about"
            element={<h1 className="text-xl">เกี่ยวกับเรา</h1>}
          />
          <Route path="/contact" element={<h1>ติดต่อเรา</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Content;
