"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { data } from "../../utils/data";
import { ProductCard } from "../cards/productCard";
import { PiCaretRightBold, PiCaretLeftBold } from 'react-icons/pi'
import { useMediaQuery } from "../hooks/useMediaquery";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
SwiperCore.use([Navigation]);


export const Carousel = () => {
    const md = useMediaQuery("(min-width: 764px)");
    const sm = useMediaQuery("(min-width: 480px)");
    const lg = useMediaQuery("(min-width: 1220px)");

    const handleNext = () => {
        const nextBtn = document.querySelector(
            ".swiper-button-next"
        ) as HTMLElement;
        const clickEvent = new Event("click");
        console.log(nextBtn, 'nex')
        nextBtn.dispatchEvent(clickEvent);
    };

    const handlePrev = () => {
        const prevBtn = document.querySelector(
            ".swiper-button-prev"
        ) as HTMLElement;
        const clickEvent = new Event("click");
        prevBtn.dispatchEvent(clickEvent);
    };
    return (
        <div className="w-full relative mt-10 overflow-hidden pb-16">
            <h4 className="text-[#312E2E] text-[25px] font-medium py-[18px]">Related products at <span className="text-[#00A85B]">The Food Emporium</span></h4>
            <Swiper spaceBetween={0} slidesPerView={lg ? 4 : md ? 3 : sm ? 2 : 1} navigation={true}>
                {data.map((element) => (
                    <SwiperSlide key={element.id}>
                        <ProductCard {...element} classname={lg ? 'card2' : md ? 'card3' : sm ? 'card3' : 'card3'} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="w-full justify-center flex gap-6 mt-8 mb-6 items-center">
                <div onClick={handlePrev}
                    className="w-[54px] rounded-[50%] h-[54px] border bg-primary flex justify-center items-center">
                    <PiCaretLeftBold size={18} color="#FFF" />
                </div>

                <div
                    onClick={handleNext}
                    className="w-[54px] rounded-[50%] h-[54px] bg-primary flex justify-center items-center">
                    <PiCaretRightBold size={18} color="#FFF" />
                </div>
            </div>
        </div>
    );
};