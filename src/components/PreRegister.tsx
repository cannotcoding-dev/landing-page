"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';

const PreRegister = () => {
  const [form, setForm] = useState({ name: '', email: '', reason: '' });

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="max-w-xl mx-auto py-24 px-4 text-center"
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight whitespace-nowrap">지금은 사전 신청 기간입니다!</h2>
      <p className="mb-8 text-base md:text-lg">클래스는 6월 중순 시작 예정입니다.<br />지금 신청하시면 오픈 일정과 할인 혜택을 가장 먼저 안내드려요.</p>
      <form className="bg-[#181f29] rounded-2xl p-8 shadow-xl flex flex-col gap-5 items-center">
        <input
          type="text"
          placeholder="이름"
          className="w-full px-4 py-3 rounded bg-[#232b36] text-white focus:outline-none text-lg"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-3 rounded bg-[#232b36] text-white focus:outline-none text-lg"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="관심 이유 or 기대하는 점 (선택)"
          className="w-full px-4 py-3 rounded bg-[#232b36] text-white focus:outline-none text-lg min-h-[60px]"
          value={form.reason}
          onChange={e => setForm({ ...form, reason: e.target.value })}
        />
        <button
          type="button"
          className="bg-[#3be8b0] text-black text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#2bcf9c] transition-all duration-200 mt-2"
        >
          사전 신청하기
        </button>
      </form>
    </motion.section>
  );
};

export default PreRegister; 