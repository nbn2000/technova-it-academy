/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  console.log(import.meta.env.VITE_NOTION_API_KEY);

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
      newErrors.phone = "Telefon raqam eng kamida 12 xonalik bo‘lishi kerak";
    } else if (!phone.includes("+")) {
      newErrors.phone = `Telefon raqam boshida "+" belgisi bo‘lishi kerak`;
    } else if (phone.length > 80) {
      newErrors.phone = `Telefon raqam 80 belgidan oshmasligi kerak`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!validate()) return;

      setSubmitting(true);

      const res = await fetch("https://api.notion.com/v1/pages", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
          "Content-Type": "application/json",
          "Notion-Version": "2022-06-28",
        },
        body: JSON.stringify({
          parent: {
            database_id: import.meta.env.VITE_DATABASE_ID,
          },
          properties: {
            oquvchi_ismi: {
              title: [
                {
                  text: {
                    content: name,
                  },
                },
              ],
            },
            telefon_raqami: {
              rich_text: [
                {
                  text: {
                    content: phone,
                  },
                },
              ],
            },
            Status: {
              status: {
                name: "Bog'lanilmagan",
              },
            },
          },
        }),
      });

      if (!res.ok) throw new Error("Server error");

      setToastType("success");
      setToastMessage("Muvaffaqiyatli yuborildi!");
      setShowToast(true);

      setName("");
      setPhone("");
      setErrors({});
      onClose();
    } catch (err) {
      console.error(err);
      setToastType("error");
      setToastMessage("Xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring.");
      setShowToast(true);
    } finally {
      setSubmitting(false);
      setTimeout(() => setShowToast(false), 4000);
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
              className="absolute top-4 right-4 text-2xl text-[#fefefe] hover:text-red-500"
              onClick={onClose}
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4 text-[#14B217] neon-text text-center">
              Ro‘yxatdan o‘tish
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 text-sm">Ism va familiya</label>
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
                <label className="block mb-1 text-sm">Telefon raqam</label>
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

              <button
                type="submit"
                disabled={submitting}
                className={`w-full py-3 font-bold rounded-xl transition shadow-md ${
                  submitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#14B217] hover:bg-[#12a015] cursor-pointer"
                }`}
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
          className={`fixed top-6 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-xl shadow-xl z-50 text-sm font-semibold ${
            toastType === "success"
              ? "bg-[#14B217] text-black"
              : "bg-red-500 text-white"
          }`}
        >
          {toastMessage}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
