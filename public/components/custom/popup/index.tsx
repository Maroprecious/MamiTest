'use client'

import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {FaAngleDown} from 'react-icons/fa6'

export const PopupModal = () => (
  <Popup trigger={<div className='flex justify-center items-center cursor-pointer'>
    <p className='text-[#00A85B] text-[13px] font-normal leading-[22.4px]'>Sort By</p>
    <FaAngleDown  size={15} color='#00A85B' className='ml-[15px]'/>
  </div>} position="bottom center">
    <div>Popup content here !!</div>
  </Popup>
);