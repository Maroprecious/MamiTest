'use client'
import DesktopLayout from "../../../public/components/layout/desktop-layout"
import { MobileProductDetails } from "../../../public/components/productDetails/mobileDetails"
import { useState } from "react"
import { UserReview, CustomerReview, GeneralReviews } from "../../../public/components/reviews"
import { Carousel } from "../../../public/components/relatedProducts"
import { useMediaQuery } from "../../../public/components/hooks/useMediaquery"
import ProductDetails from "../../../public/components/productDetails"
import { Preloader } from "../../../public/components/preloader"
import { useEffect } from "react"


const SingleProduct = ({ params }: { params: { id: number } }) => {
    const matches = useMediaQuery("(max-width: 1024px)");
    const [active, setActive] = useState<string>('Customer reviews')
    const [preloader, setPreloader] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setPreloader(false)
    }, 3000);
  }, [])

  if (preloader) return <Preloader />


    const handleClick = (name: string) => {
        setActive(name)
    }
    return (
        <DesktopLayout showSearch={false}>
            {matches ? <MobileProductDetails id={params.id} /> : <ProductDetails id={params.id} />}

            <div className="flex justify-start items-center pt-[50px]">
                <div>
                    <p onClick={() => handleClick('Customer reviews')} className={active === 'Customer reviews' ? 'underline_' : 'text__'}>Customer reviews</p>
                    <div className={active === 'Customer reviews' ? 'line' : ''}></div>
                </div>
                <div className="ml-[40px]">
                    <p onClick={() => handleClick('Support')} className={active === 'Support' ? 'underline_' : 'text__'}>Support</p>
                    <div className={active === 'Support' ? 'line' : ''}></div>
                </div>
            </div>
            <div className="flex-col lg:flex-row flex w-full items-center justify-between pb-[40px]">
                <div className="lg:w-[30%] xl:[30%] w-full">
                    <CustomerReview />
                </div>
                <div className="lg:w-[60%] w-full pt-[22px]">
                    <UserReview />
                </div>
            </div>
            <GeneralReviews />
            <Carousel />
        </DesktopLayout>
    )
}
export default SingleProduct
