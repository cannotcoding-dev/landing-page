"use client";
import { motion } from 'framer-motion';
import React from 'react';

const HowItWorks = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto py-24 px-4 text-center"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">운영 방식은 이렇게!</h2>
    <ul className="space-y-4 text-lg md:text-xl font-medium bg-[#181f29] rounded-2xl p-8 shadow-xl text-left mx-auto max-w-xl">
      <li>⏱ 4주 과정 / 주 1회 Zoom 수업 (90분)</li>
      <li>🎥 수업 녹화본 제공 / 복습 가능</li>
      <li>📂 실습 가이드북 + 템플릿 제공</li>
      <li>🙋‍♀️ Slack 커뮤니티 / 피드백 및 질의응답 가능</li>
      <li>💬 프롬프트 작성 훈련 + Cursor 실전 실습</li>
    </ul>
  </motion.section>
);

export default HowItWorks; 