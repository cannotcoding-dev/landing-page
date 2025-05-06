"use client";

import React, { useEffect, useRef } from "react";

// Tally 타입 선언 추가
declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

const TALLY_EMBED_URL =
  "https://tally.so/embed/mepBvk?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&theme=dark";

const PreRegister = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tally embed script
    const scriptId = "tally-embed-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://tally.so/widgets/embed.js";
      script.async = true;
      script.onload = () => {
        if (window.Tally) window.Tally.loadEmbeds();
      };
      document.body.appendChild(script);
    } else {
      if (window.Tally) window.Tally.loadEmbeds();
    }
  }, []);

  return (
    <section id="pre-register" className="max-w-xl mx-auto py-24 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight whitespace-nowrap">
        지금은 사전 신청 기간입니다!
      </h2>
      <p className="mb-8 text-base md:text-lg">
        클래스는 6월 중순 시작 예정입니다.<br />
        지금 신청하시면 오픈 일정과 할인 혜택을 가장 먼저 안내드려요.
      </p>
      <div
        ref={ref}
        className="bg-[#232b36] rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center"
      >
        <iframe
          data-tally-src={TALLY_EMBED_URL}
          loading="lazy"
          width="100%"
          height="447"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="바이브 코딩 강의 예약 등록자 명단"
          className="w-full"
          style={{ minHeight: 400 }}
        ></iframe>
      </div>
    </section>
  );
};

export default PreRegister; 