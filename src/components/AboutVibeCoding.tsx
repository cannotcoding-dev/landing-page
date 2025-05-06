"use client";
import { motion } from 'framer-motion';
import React from 'react';

const AboutVibeCoding = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto py-24 px-4 text-center"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">바이브 코딩이란?</h2>
    <p className="text-xl md:text-2xl mb-6 font-semibold">"이젠 코드를 직접 치지 않아도 웹사이트를 만들 수 있어요."</p>
    <div className="bg-[#181f29] rounded-2xl p-8 md:p-10 shadow-xl mb-6">
      <p className="mb-3 text-lg font-bold">바이브 코딩(Vibe Coding)은:</p>
      <ul className="space-y-2 text-left list-disc list-inside text-base md:text-lg">
        <li>AI에게 기획을 설명하고,</li>
        <li>AI에게 코드를 부탁하고,</li>
        <li>결과물을 편집하고 피드백 받는 방식으로<br/>👉 개발 결과물을 스스로 만들어내는 새로운 접근법입니다.</li>
      </ul>
    </div>
    <p className="text-base md:text-lg mb-2">🎯 더 이상 "코딩을 배우는 과정"이 아닙니다.<br/>이제는 "코딩 없이도 구현하는 능력"을 배우는 거예요.</p>
  </motion.section>
);

export default AboutVibeCoding; 