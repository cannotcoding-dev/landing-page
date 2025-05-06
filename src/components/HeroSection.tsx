"use client";
import { motion } from 'framer-motion';
import React from 'react';

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center py-24 text-center bg-gradient-to-b from-[#10151c] to-[#18202a] relative overflow-hidden min-h-[600px]"
    style={{
      backgroundImage: "url('/images/background.png')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    {/* 어두운 오버레이 */}
    <div className="absolute inset-0 bg-black/60 z-0" aria-hidden="true" />
    <div className="relative z-10 w-full flex flex-col items-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight whitespace-nowrap">코딩 몰라도 괜찮아요.</h1>
      <p className="text-2xl md:text-3xl mb-2 font-semibold tracking-tight">AI와 함께, 나만의 웹을 만드는 법을 배웁니다.</p>
      <p className="text-lg md:text-xl mb-8 text-[#3be8b0] font-medium">비전공자를 위한 AI 바이브 코딩 실전 클래스</p>
      <ul className="mb-8 text-base md:text-lg space-y-2">
        <li>👉 GPT, Cursor, Notion, Webflow 등 AI 도구를 활용한 실제 개발 경험</li>
        <li>💌 지금 신청하면 얼리버드 혜택과 클래스 소식을 가장 먼저 알려드려요!</li>
      </ul>
      <button className="bg-[#3be8b0] text-black text-lg px-10 py-4 rounded-full font-semibold shadow-xl hover:bg-[#2bcf9c] transition-all duration-200">
        사전 신청하기
      </button>
    </div>
  </motion.section>
);

export default HeroSection; 