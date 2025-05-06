"use client";
import { motion } from 'framer-motion';
import React from 'react';

const RecommendedFor = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto py-24 px-4 text-center"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">이런 분에게 추천해요</h2>
    <ul className="space-y-4 text-lg md:text-xl font-medium bg-[#181f29] rounded-2xl p-8 shadow-xl">
      <li>&quot;코딩을 배우긴 싫은데, 웹사이트는 만들고 싶다&quot;</li>
      <li>챗GPT, Cursor, Notion 등 AI 툴이 익숙하거나 흥미가 있다</li>
      <li>기획자, 디자이너, 마케터, 크리에이터 등 사이드 프로젝트 해보고 싶은 분</li>
      <li>나만의 웹페이지, 포트폴리오, 링크인바이오, 블로그 등을 만들고 싶은 분</li>
      <li>AI를 실전에서 어떻게 쓰는지 배우고 싶은 분</li>
    </ul>
  </motion.section>
);

export default RecommendedFor; 