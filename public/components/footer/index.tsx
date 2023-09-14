import { PiTwitterLogo } from 'react-icons/pi'
import { TbBrandFacebook } from 'react-icons/tb'
import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineEnvelope } from 'react-icons/hi2'
import React from 'react'
import { footerData } from '../../utils/footerData'

export const Footer = () => {
  return (
    <>
      <div className="border-t border-solid border-[#D8D8D8] lg:mx-[80.25px] pb-[50px] bg-[#FCFCFC]" />
      <div className="bg-[#FCFCFC] flex-wrap px-4 lg:px-[80.25px] w-full m-auto h-auto flex items-center justify-between pb-[50px]">
        <div className="w-full lg:w-[32%]">
          <div className="bg-logo w-[157px] h-[38.738px] bg-cover" />
          <div className="w-full lg:w-[231px] mt-[30px]">
            <p className="text-[#8A8A8A] text-[12px] font-light leading-[22.4px]">
              We're here to help you find the stores nearest to you, no matter
              where you are. Simply enter your zip code or city and state into
              the search bar above, and we'll show you a list of stores in your
              area.
            </p>
            <p className="text-[#8A8A8A] text-[12px] font-light mt-[25px]">
              {" "}
              Happy Shopping!
            </p>
          </div>
          <h5 className="text-[#312E2E] text-[14px] font-semibold pt-[55px]">
            Get in touch
          </h5>
          <p className="text-[#312E2E] text-[12px] font-normal pt-[10px] w-[284px] leading-[22.4px]">
            Suite 209,1047 Bairdmore Blvd, Winnipeg, MB R3T 5H3.
          </p>
          <div className="inline-flex items-start gap-[24px] pt-[30px]">
            <PiTwitterLogo size={24} color="#00A85B" />
            <TbBrandFacebook size={24} color="#00A85B" />
            <AiOutlineInstagram size={24} color="#00A85B" />
            <HiOutlineEnvelope size={24} color="#00A85B" />
          </div>
        </div>

        {/* footer section with quick actions */}

        <div className="flex items-start flex-wrap justify-between flex-grow mt-[13px]">
          {footerData.map((elem, id) => {
            return (
              <div
                key={elem.title}
                className="flex-col w-1/2 lg:w-1/4 my-4 items-start justify-start"
              >
                <h5
                  key={id}
                  className="text-[#312E2E] text-[14px] font-semibold"
                >
                  {elem.title}
                </h5>
                <ul className="mt-[25px] flex-col items-start">
                  {elem.details.map((content) => (
                    <li
                      key={content.value}
                      className="mt-[17px] text-[#312E2E] text-[12px] font-normal leading-[22.4px]"
                    >
                      {content.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
