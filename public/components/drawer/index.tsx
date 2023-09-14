import { easeInOut, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { CategoriesCard, PriceCard, ProductRatingCard } from "../cards";
import { Button } from "../custom";

export const SideDrawer = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ left: -1000, opacity: 0 }}
        animate={{
          left: visible ? 0 : -1000,
          opacity: visible ? 1 : 0,
          transition: {
            duration: 0.3,
            ease: easeInOut,
          },
        }}
        className="w-full z-40 top-0 bg-white side fixed"
      >
        <CategoriesCard />
        <PriceCard />
        <ProductRatingCard />
        <div className="flex w-full gap-4 justify-center items-center">
          <Button className="w-[100px] h-[40px] rounded-lg">
            Login
          </Button>
          <Button className="w-[100px] h-[40px] rounded-lg">
            Sign up
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
