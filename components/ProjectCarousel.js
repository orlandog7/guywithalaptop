'use client';

import { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';
import QuestionAnswering from './QuestionAnswering';
import FredChart from './FredChart';
import SentimentTwitter from './SentimentTwitter';

export default function ProjectCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative">
      {swiperReady && (
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {/* Slide 1: AI Support Assistant */}
          <SwiperSlide>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
              <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400">
                AI-Powered Customer Support Assistant
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Responds to typical customer service inquiries such as business hours, shipping, and refunds.
              </p>
              <QuestionAnswering />
              <Link
                href="/projects/ai-support-assistant"
                className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Project →
              </Link>
            </div>
          </SwiperSlide>

          {/* Slide 2: Twitter/X Sentiment */}
          <SwiperSlide>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transition-all duration-300 ease-in-out space-y-4">
              <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400">
                AI-Powered Sentiment Analysis (Stock Market)
              </h3>
              <p className="text-slate-700 dark:text-slate-300">
                Real-time sentiment analysis from finance headlines via Yahoo, scored using Azure AI.
              </p>

              <SentimentTwitter compact />

              <Link
                href="/projects/sentiment-twitter"
                className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2"
              >
                View Project →
              </Link>
            </div>
          </SwiperSlide>


            {/* Slide 3: Economic Sentiment Dashboard */}
            <SwiperSlide>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4">
                <h3 className="text-xl font-bold text-blue-500 dark:text-blue-400">
                  U.S. Economic Sentiment Dashboard
                </h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Visualizes live data from the FRED API (e.g., University of Michigan sentiment index).
                </p>

                {/* Pass compact mode for smaller layout */}
                <FredChart seriesId="UMCSENT" compact />

                <Link
                  href="/projects/economic-dashboard"
                  className="inline-block mt-2 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                  View Project →
                </Link>
              </div>
            </SwiperSlide>

        </Swiper>
      )}

      {/* Navigation Arrows */}
      <button
        ref={prevRef}
        className="absolute left-[-2rem] top-1/2 -translate-y-1/2 text-7xl text-slate-400 hover:text-blue-500 transition z-30"
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        ref={nextRef}
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 text-7xl text-slate-400 hover:text-blue-500 transition z-30"
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}
