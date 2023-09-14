export type footerType = {
    title: string,
    details: detailsType[]
}
type detailsType = {
    name: string,
    value: number
}

export type categoriesType = {
    id: number,
    name: string
}

export type DataType = {
    id: number,
    name: string,
    img: string,
    category: string,
    price: number,
    ratings: number,
    ratedBy: number,
    description: string,
    discount: string,
    classname?: string
}


export type breadCrumbType = {
    data: {
        title: string
        href: string
    }[]
}