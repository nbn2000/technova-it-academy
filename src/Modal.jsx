import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  const validate = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Ism va familiya majburiy";
    } else if (name.trim().length < 3) {
      newErrors.name = "Ism kamida 3 ta belgidan iborat bo‘lishi kerak";
    } else if (name.trim().length > 90) {
      newErrors.name = "Ism 90 ta belgidan oshmasligi kerak";
    }

    if (!phone.trim()) {
      newErrors.phone = "Telefon raqam majburiy";
    } else if (phone.length < 12) {
      newErrors.phone = "Telefon raqam eng kamida 12 xonalik bolishi kerak";
    } else if (!phone.includes("+")) {
      newErrors.phone = `Telefon raqamni oldida "+" belgisi bolish kerak`;
    } else if (phone.length > 80) {
      newErrors.phone = `Telefon raqami 80 honalikdan oshmasligi kerak`;
    }

    if (!course) {
      newErrors.course = "Kursni tanlang";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSubmitting(true);
      setErrors({});
      setName("");
      setPhone("");
      setCourse("");
      setErrors({});
      onClose();
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setSubmitting(false);
      }, 1000);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-[#0d0d0d] text-[#fefefe] w-[90%] max-w-lg p-6 rounded-2xl shadow-neon-noscale relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              className="absolute top-4 right-4 text-[#fefefe] text-xl"
              onClick={onClose}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#14B217] neon-text text-center">
              Ro‘yxatdan o‘tish
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm text-[#fefefe]">
                  Ism va familiya
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white placeholder:text-gray-400 border border-[#14B217]/30 focus:outline-none focus:ring-2 focus:ring-[#14B217]"
                  placeholder="Ismingizni kiriting"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm text-[#fefefe]">
                  Telefon raqam
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => {
                    const value = e.target.value;
                    const filtered = value.replace(/[^\d+]/g, "");
                    setPhone(filtered);
                  }}
                  className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white placeholder:text-gray-400 border border-[#14B217]/30 focus:outline-none focus:ring-2 focus:ring-[#14B217]"
                  placeholder="+998 XX XXX XX XX"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block mb-1 text-sm text-[#fefefe]">
                  Kurs yo‘nalishi
                </label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full cursor-pointer p-3 rounded-xl bg-[#1a1a1a] text-white border border-[#14B217]/30 focus:outline-none focus:ring-2 focus:ring-[#14B217]"
                >
                  <option value="" disabled>
                    Kursni tanlang
                  </option>
                  <option>Frontend</option>
                  <option>Backend</option>
                  <option>IT Foundation</option>
                  <option>IELTS</option>
                  <option>General English</option>
                  <option>Koreys tili</option>
                  <option>Grafik dizayn</option>
                  <option>Interyer dizayn</option>
                  <option>SMM Pro</option>
                </select>
                {errors.course && (
                  <p className="text-red-500 text-sm mt-1">{errors.course}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 ${
                  submitting ? "bg-gray-400" : "bg-[#14B217] hover:bg-[#12a015]"
                } text-black font-bold rounded-xl shadow-md transition`}
              >
                {submitting ? "Yuborilmoqda..." : "Yuborish"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-[#14B217] text-black px-6 py-3 rounded-xl shadow-xl z-50 text-sm font-semibold"
        >
          Muvaffaqiyatli yuborildi!
        </motion.div>
      )}
    </AnimatePresence>
  );
}
