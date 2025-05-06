"use client";
import { motion } from 'framer-motion';
import React from 'react';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    viewport={{ once: true }}
    className="bg-[#181f29] py-16 px-4 mt-10 text-center text-sm md:text-base text-[#b0b8c1]"
  >
    <div className="mb-2">📩 문의: <a href="mailto:daniel@dothegy.org" className="underline hover:text-[#3be8b0] transition">daniel@dothegy.org</a></div>
    <div className="mb-2">📚 클래스 운영 정책 / 저작권 안내</div>
    <div className="mt-6 text-lg md:text-xl text-white font-bold">“기획만 할 줄 알아도, 결과물은 나옵니다 – 그게 바이브 코딩!”</div>
  </motion.footer>
);

export default Footer; 