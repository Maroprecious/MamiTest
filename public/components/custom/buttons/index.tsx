import { ReactNode, HTMLProps, ButtonHTMLAttributes } from "react"
type props = {
    children: ReactNode,
    otherProps?: ButtonHTMLAttributes<HTMLButtonElement> | undefined;
    className?: string
}


export const Button = ({ children, otherProps, className }: props) => {
    return (
        <button {...otherProps} className={`bg-primary text-[#FFF] ${className}`}>
            {children}
        </button>
    )
}
