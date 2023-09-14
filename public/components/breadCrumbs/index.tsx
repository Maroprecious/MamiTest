import Link from "next/link"
import { PiCaretRightBold } from 'react-icons/pi'
import { breadCrumbType } from "../../types"
import { FC } from "react"

export const BreadCrumbs: FC<breadCrumbType> = ({ data }) => {
    return (
        <div className="flex justify-start items-center gap-2">
            {data.map((element, idx) => (
                <div className="flex justify-start items-center gap-2" key={element.title + idx}>
                    <Link className={`${data.length === idx + 1 ? 'breadCrumb_' : 'text_'}`} href={element.href}>{element.title}</Link>
                    {data.length !== idx + 1 && <PiCaretRightBold size={12} color="#B0BABF"/>}
                </div>
            ))}
        </div>
    )
}