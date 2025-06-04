import React, { useState, useEffect } from "react";
import ChildComp from "./ChildComp";
import ShowUsers from "./ShowUsers";
import ReadNews from "../components/ReadNews";

const Home = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  const [second, setSecond] = useState(0);

  const [num, setNum] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showText = () => {
    setShow(!show);
  };

  const array1 = [1, 2, 3, 4, 5];
  const users = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

  const students = [
    { id: 1, name: "สมชาย", age: 20, grade: "A" },
    { id: 2, name: "สมหญิง", age: 22, grade: "B" },
    { id: 3, name: "สมศรี", age: 21, grade: "C" },
    { id: 4, name: "สมปอง", age: 23, grade: "A" },
    { id: 5, name: "สมจิตร", age: 19, grade: "B" },
  ];
  return (
    <>
      <p className="text-lg text-gray-700">
        <strong>รายชื่อนักเรียน:</strong>
        <br />
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              ชื่อ : {student.name} อายุ : {student.age} ปี เกรด :
              {student.grade}
            </li>
          ))}
        </ul>
      </p>

      <h1 className="text-lg">Timer : {second} วินาที</h1>

      <p>
        <ReadNews />
      </p>
      <button className="bg-red-400  " onClick={() => setNum(1)}>
        เลือก 1
      </button>
      <button className="bg-green-400" onClick={() => setNum(2)}>
        เลือก 2
      </button>
      <button className="bg-blue-400" onClick={() => setNum(3)}>
        เลือก 3
      </button>
      <h1>เลือก : {num}</h1>

      <button className="bg-blue-400" onClick={showText}>
        {show ? "ซ่อนข้อความ" : "แสดงข้อความ"}
      </button>
      {show && (
        <h1 className="text-2xl font-bold text-blue-500">
          สวัสดีครับ ยินดีต้อนรับสู่เว็บไซต์ของเรา
        </h1>
      )}
      <p>
        <button className="bg-green-400" onClick={() => setCount(count + 1)}>
          เพิ่มจำนวน
        </button>
        <button className="bg-red-400" onClick={() => setCount(count - 1)}>
          ลบจำนวน
        </button>
        <h1>จำนวน : {count}</h1>
      </p>
      <input
        type="text"
        placeholder="กรอกชื่อ"
        className="border-2 border-blue-500 rounded-lg p-2"
        onChange={(e) => setName(e.target.value)}
      />
      <h1>ชื่อ : {name}</h1>

      <ChildComp prop1={"Hello"} prop2={20} prop3={5} prop4={array1} />
      <ShowUsers users={users} />

      <section className="flex flex-col items-center justify-center py-16 bg-gradient-to-b from-blue-100 to-blue-300 min-h-[60vh] rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-4 drop-shadow">
          ยินดีต้อนรับสู่บริการออกแบบเว็บไซต์
        </h1>
        <p className="text-lg text-blue-900 mb-6 max-w-xl text-center">
          เราคือผู้เชี่ยวชาญด้านการออกแบบและพัฒนาเว็บไซต์สำหรับธุรกิจของคุณ
          สร้างความโดดเด่นและน่าเชื่อถือในโลกออนไลน์ด้วยดีไซน์ที่ทันสมัยและตอบโจทย์ทุกความต้องการ
        </p>
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 transition"
        >
          ติดต่อเรา
        </a>
      </section>
    </>
  );
};

export default Home;
