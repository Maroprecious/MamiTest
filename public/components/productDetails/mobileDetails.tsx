import { images } from '../../../public/utils/images'
import { AiFillStar } from "react-icons/ai"
import { Button } from "../../../public/components/custom"
import { data } from '../../utils/data'
import { useEffect, useState } from 'react'
import { DataType } from '../../types'



const initial = {
    id: 0,
    name: "",
    img: "",
    category: "",
    price: 0,
    ratings: 0,
    ratedBy: 0,
    description: "",
    discount: "",
};

export const MobileProductDetails = ({ id }: { id: number }) => {
    const [product, setProduct] = useState<DataType>(initial);
    const [number, setNumber] = useState<number>(0);

    useEffect(() => {
        if (id) {
            const product = data.find((product) => product.id === Number(id)) || initial;
            setProduct(product);
        }
    }, [id]);
    return (
        <div className="flex flex-col pt-20">
            <div className="h-[482px] w-full flex flex-col gap-[10px]">
                <div className="w-full bg-cover bg-center h-[350px] md:h-[470px]">
                    <img src={product.img} className="w-full h-full rounded-[5px]" />
                </div>
                <div className="flex justify-start items-center gap-[10px] w-full">
                    {
                        images.map((image) =>
                            <div key={image.id} className="w-[110px] h-[90px] sm:w-[150px] sm:h-[130px] md:w-[200px] md:h-[170px]">
                                <img src={image.img} className="w-full h-full rounded-[5px] bg-cover bg-center " />
                            </div>
                        )
                    }
                </div>
            </div>
            <div className=" w-full md:pt-[190px]">
                <p className={'text-[10px] font-medium leading-[16px] py-[4px] px-[10px] w-[70px] bg-[#EC3237] mt-[10px] text-[#FFF] rounded-[16px] flex justify-center items-center'}>20% off</p>
                <h3 className="text-[27px] text-[#312E2E] font-medium pt-[9px]">{product.name}</h3>
                <div className="mt-[12px] flex flex-col items-start justify-start">
                    <div className="flex items-center justify-start">
                        <img src="/images/svg/bag.svg" className="w-[18px] h-[18px]" />
                        <p className="text-[12px] text-[#312E2E] font-light ml-[4px]">79 units available<span className="text-[#757575]"> (1 litre each)</span></p>
                    </div>
                    <div className='flex justify-between items-center leading-[22.4px] mt-2'>
                        <AiFillStar size={16} color='#FDE512' className='mr-[6px]' />
                        <h6 className='text-[12px] text-[#312E2E] font-medium'>{product.ratings}<span className='font-normal text-[#757575]'>({product.ratedBy} reviews)</span></h6>
                    </div>
                </div>
                <div>
                    <h4 className='text-[#00A85B] text-[25px] font-medium leading-[32px] mt-[13px]'>${product.price}</h4>
                    <h5 className="text-[16px] text-[#312E2E] font-medium leading-[28.8px] mt-[7px]">Description</h5>
                    <p className='text-[#8A8A8A] text-[11px] pt-[8px] font-light leading-[19.2px]'>
                        Itambe Natural Milk is sourced from small, locally-owned farms where cows are raised with
                        care and attention. We believe in treating animals with respect, and our farmers
                        follow all necessary guidelines to ensure the health and well-being of their herds. Our
                        milk is produced using sustainable, eco-friendly practices, and we are committed to
                        reducing our environmental footprint. Overall, Itambe Natural Milk is a brand of milk
                        that is dedicated to producing high-quality, nutritious products while also being
                        mindful of the environment and the well-being of its cows.
                    </p>
                    <div className="flex w-[121px] h-[48px] justify-between items-center rounded-[50px] bg-[#FFF] button_ px-[8px]">
                        <p onClick={() => {
                            if (number !== 1) {
                                setNumber((prev) => prev - 1);
                            }
                        }} className="w-[27px] h-[27px] bg-[#EDEDED;] text-[#9A9A9A] flex justify-center items-center rounded-[50%]">-</p>
                        <p className="text-[13px] text-[#312E2E] font-light">{number}</p>
                        <p onClick={() => setNumber((prev) => prev + 1)}
                            className="bg-primary text-[#FFF] w-[27px] h-[27px] flex justify-center items-center rounded-[50%] ">+</p>
                    </div>
                    <Button className="text-[13px] leading-[19.2px] font-medium w-[50%] h-[48px] py-[10px] px-[16px] rounded-[5px] mt-[2px]">Add to cart
                    </Button>
                </div>
            </div>
        </div>
    )
}