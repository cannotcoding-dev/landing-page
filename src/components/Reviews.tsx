"use client";
import { motion } from 'framer-motion';
import React from 'react';

const reviews = [
  {
    name: '지현님',
    job: '브랜드 디자이너',
    text: '코딩 수업이 아니라 실전 프로젝트 같았어요. 제가 개발자처럼 지시해서 웹이 나왔어요!'
  },
  {
    name: '재훈님',
    job: '광고 AE',
    text: 'Cursor는 무서웠는데 이제는 내가 기획해서 다뤄요. 결과물을 만드는 게 너무 뿌듯해요.'
  },
  {
    name: '은지님',
    job: '영상 편집자',
    text: '코딩은 여전히 몰라요. 근데 저만의 사이트는 완성했어요. 이게 제가 원하던 방식이에요.'
  },
];

const cardVariants = {
  rest: { scale: 1, y: 0, boxShadow: '0 4px 24px 0 rgba(0,0,0,0.10)' },
  hover: { scale: 1.04, y: -8, boxShadow: '0 8px 32px 0 rgba(59,232,176,0.15)' },
};

const Reviews = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto py-24 px-4"
  >
    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center tracking-tight">수강 후기</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          className="bg-[#181f29] rounded-2xl p-8 shadow-xl flex flex-col items-center min-h-[220px] cursor-pointer"
          variants={cardVariants}
          initial="rest"
          whileHover="hover"
          animate="rest"
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <span className="text-5xl mb-3">🗣️</span>
          <p className="text-base md:text-lg mb-4 font-medium text-center leading-relaxed">“{r.text}”</p>
          <div className="text-sm text-[#3be8b0] font-semibold">– {r.name}, {r.job}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

export default Reviews; 