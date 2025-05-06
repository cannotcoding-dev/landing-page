"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Curriculum = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto py-24 px-4"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center tracking-tight">무엇을 배우나요? <span className="text-base align-top">(실전 중심 커리큘럼)</span></h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left border-separate border-spacing-y-3">
        <thead>
          <tr className="text-[#3be8b0] text-lg">
            <th className="p-3">주차</th>
            <th className="p-3">주제</th>
            <th className="p-3">실습</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-[#181f29] rounded-2xl shadow-xl">
            <td className="p-3 font-bold">1주차</td>
            <td className="p-3">바이브 코딩의 원리</td>
            <td className="p-3">GPT와 Cursor로 첫 웹 구조 만들기</td>
          </tr>
          <tr className="bg-[#181f29] rounded-2xl shadow-xl">
            <td className="p-3 font-bold">2주차</td>
            <td className="p-3">기획력으로 코딩 대체하기</td>
            <td className="p-3">&quot;이런 웹을 만들어줘&quot; 프롬프트 작성법</td>
          </tr>
          <tr className="bg-[#181f29] rounded-2xl shadow-xl">
            <td className="p-3 font-bold">3주차</td>
            <td className="p-3">AI의 결과물 다듬기</td>
            <td className="p-3">디자인 수정, 간단한 피드백 반영 실습</td>
          </tr>
          <tr className="bg-[#181f29] rounded-2xl shadow-xl">
            <td className="p-3 font-bold">4주차</td>
            <td className="p-3">실제 서비스처럼 만들기</td>
            <td className="p-3">내 링크인바이오/소개페이지 완성</td>
          </tr>
          <tr className="bg-[#181f29] rounded-2xl shadow-xl">
            <td className="p-3 font-bold">보너스</td>
            <td className="p-3">AI 도구 확장편</td>
            <td className="p-3">Webflow, Notion, Vercel 활용법 간단 소개</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="mt-8 text-center text-base md:text-lg space-y-1">
      <p>👩‍💻 <b>기획 + 커뮤니케이션 = 개발 결과물</b></p>
      <p>GPT = 팀원 / Cursor = 개발자로 생각하면 쉬워요!</p>
    </div>
  </motion.section>
);

export default Curriculum; 