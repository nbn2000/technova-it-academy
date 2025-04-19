import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";
import "./App.css";
import frontend from "/front-end.jpg";
import backend from "/backend.jpg";
import itfoundation from "/it-foundation.jpg";
import english from "/english.jpg";
import ielts from "/ielts.jpg";
import korea from "/korea.jpg";
import design from "/design.avif";
import interier from "/interier.avif";
import social from "/social.jpg";
import logo from "/logo.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const delayVariants = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-[#020202] text-white font-['Rubik']">
      {/* HERO SECTION */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="h-32 bg-[#1f1f1f] rounded-md mb-4 flex items-center justify-center text-sm text-[#D8FADB]">
          <img src={logo} alt={"logo"} className="object-cover w-full h-full" />
        </div>
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-[#10B314] neon-text drop-shadow-glow mb-4"
        >
          Technova IT Academy
        </motion.h1>
        <motion.p
          variants={delayVariants(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl text-lg md:text-xl text-[#D8FADB] neon-text"
        >
          Kelajagingizni bugun boshlang! IT, dizayn va tillar orqali yangi
          cho‘qqilarga chiqamiz.
        </motion.p>
        <motion.button
          onClick={() => setIsModalOpen(true)}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-6 py-3 cursor-pointer bg-[#14B217] shadow-neon text-black font-semibold rounded-xl shadow-xl  transition-all duration-600"
        >
          Hoziroq ro‘yxatdan o‘ting
        </motion.button>

        <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-br from-[#14B217]/10 via-transparent to-[#10B314]/20 blur-2xl"></div>
      </section>

      {/* COUNTDOWN SECTION */}
      <motion.section
        variants={delayVariants(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-black py-8 text-center"
      >
        <h3 className="text-xl text-[#D8FADB] mb-4 neon-text">
          Chegirmalarga oxirgi muddat:
        </h3>
        <div className="flex justify-center  text-3xl md:text-5xl font-bold">
          {["03", ":", "15", ":", "42"].map((val, i) => (
            <div key={i} className="flex">
              <div
                className={
                  val === ":"
                    ? "px-4 py-2"
                    : `bg-[#10B314]/20 px-4 py-2 rounded neon-glow animate-pulse`
                }
              >
                {val}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* COURSES SECTION */}
      <motion.section
        variants={delayVariants(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 px-6 md:px-20 bg-[#0F0F0F]"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-[#14B217] neon-text">
          Kurs yo‘nalishlarimiz
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Frontend Dasturlash", src: frontend },
            { name: "Backend Dasturlash", src: backend },
            { name: "IT Foundation", src: itfoundation },
            { name: "General English", src: english },
            { name: "IELTS tayyorlov", src: ielts },
            { name: "Koreys tili", src: korea },
            { name: "Grafik Dizayn", src: design },
            { name: "Interyer Dizayn", src: interier },
            { name: "SMM Pro", src: social },
          ].map((title, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#111] max-w-[400px] mx-auto w-full p-6 rounded-xl text-center shadow-neon  transition-all duration-600"
            >
              <div className="h-32  bg-[#1f1f1f] rounded-md mb-4 flex items-center justify-center text-sm text-[#D8FADB]">
                <img
                  src={title.src}
                  alt={title.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl text-white font-semibold neon-text">
                {title.name}
              </h3>
              <p className="text-[#D8FADB] mt-2 text-sm neon-text">
                Joylar soni cheklangan!
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* WHY TECHNOVA SECTION */}
      <motion.section
        variants={delayVariants(0.5)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#EFFFF0] py-16 px-4 md:px-8 lg:px-24"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#14B217] neon-text">
          Nega aynan Technova IT Academy?
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-[#030B0A]">
          {[
            "O‘z sohasida tajribali ustozlar",
            "Amaliy va interaktiv mashg‘ulotlar",
            "Bitiruvchilarga IT-Park’ka a’zo kompaniyalarda yoki o‘zimizda ishga joylashishda ko‘mak",
            "Har bir kurs uchun zamonaviy metodika va real loyihalar asosida o‘qitish",
          ].map((reason, i) => (
            <motion.li
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-6 rounded-xl shadow-md  shadow-glow transition-all duration-400"
            >
              {reason}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* PARTNERS SECTION */}
      <motion.section
        variants={delayVariants(0.6)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="bg-[#020202] pt-16 pb-14 text-center"
      >
        <h3 className="text-2xl md:text-4xl text-[#D8FADB] mb-6 font-semibold neon-text">
          Aloqa Ma&apos;lumotlari
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            {
              name: "Instagram",
              icon: "/instagram.png",
              link: "https://www.instagram.com/technova_it.academy",
            },
            {
              name: "Telegram",
              icon: "/telegram.png",
              link: "https://t.me/Technovaitacademy",
            },
            {
              name: "Telegram",
              icon: "/telegram.png",
              link: "https://t.me/Technova_itacademy",
            },
            {
              name: "+998 94 092 7272",
              icon: "/cellphone.png",
              link: "tel:+998940927272",
            },
          ].map((e, i) => (
            <motion.a
              key={i}
              href={e.link}
              target="_blank"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-[#1a1a1a] flex flex-row justify-center items-center gap-2 px-8 py-4 rounded-md text-[#14B217] shadow-neon transition-all duration-400"
            >
              {e.name} <img src={e.icon} alt={e.name} width="25" />
            </motion.a>
          ))}
        </div>
        <motion.p
          variants={delayVariants(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-xl text-lg text-center mx-auto mt-6 md:text-xl text-[#D8FADB] neon-text"
        >
          Namangan, Hamroh ko’cha 64-uy
        </motion.p>
      </motion.section>

      {/* FINAL CTA */}
      <motion.section
        variants={delayVariants(0.7)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="pt-20 pb-14 px-6 text-center bg-gradient-to-b from-[#0c0c0c] to-black"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-[#14B217] mb-6 neon-text">
          Yaxshi IT kelajakni Technova bilan boshlang
        </h2>
        <p className="text-[#D8FADB] max-w-xl mx-auto mb-8">
          Hoziroq ro‘yxatdan o‘ting va Technova’ning kelajakni qurayotgan
          minglab talabalariga qo‘shiling. Har bir boshlovchi uchun eng yaxshi
          platforma!
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsModalOpen(true)}
          className="bg-[#10B314] cursor-pointer text-black px-8 py-4 font-bold rounded-xl shadow-xl shadow-neon transition-all duration-300"
        >
          Joy band qilish
        </motion.button>
      </motion.section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div className="flex justify-end items-center p-2 w-full">
        <a
          href="https://www.techgigs.uz"
          className="text-[#D8FADB] text-end flex  justify-center items-center gap-3"
        >
          created by
          <img
            src="/logo-white-word.webp"
            alt="techgigs logo"
            className="h-[30px] object-contain"
          />
        </a>
      </div>
    </div>
  );
}
