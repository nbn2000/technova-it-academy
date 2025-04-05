import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#A4D11140] p-6 text-[#383C45]">
      <img src="/logo.jpg" alt="TechNova IT Academy" className="w-48 mb-6" />

      <div className="space-y-4 w-full max-w-xs">
        <a
          href="https://t.me/Technovaitacademy"
          className="block w-full text-center bg-[#383C45] text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-[#D42322] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Telegram
        </a>
        <a
          href="https://www.instagram.com/technova_it.academy"
          className="block w-full text-center bg-[#383C45] text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-[#D42322] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="tel:+123456789"
          className="block w-full text-center bg-[#383C45] text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-[#D42322] transition"
        >
          tel: +998 94 092 7272
        </a>
      </div>

      <div className="w-full max-w-md mt-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d537.1704229704413!2d71.67288483859132!3d41.01048452862999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb4dbeee79a49d%3A0x3d5ab99e383db984!2sHamroh%20street%20(formerly%20Oxunboboyev)!5e0!3m2!1sen!2s!4v1739802537102!5m2!1sen!2s"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl shadow-lg"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="text-center text-lg font-medium mt-2">
          Hamroh ko’cha 64-uy
        </p>
      </div>
    </div>
  );
}

export default App;
