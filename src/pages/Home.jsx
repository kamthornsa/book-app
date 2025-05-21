import React from "react";

const Home = () => {
  return (
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
  );
};

export default Home;
