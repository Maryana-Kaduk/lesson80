import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: Boolean,
    btnType?: 'button' | 'submit',
    containerStyles?: string,
    textStyles?: string, 
    title: string,
    rightIcon?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement> 
}

export interface SearchManufactorProps {
    manufactor: string;
    setmanufactor: (manufactor: string) => void;
}

export interface CarCardProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export interface FilterProps {
    manufactor?:string;
    year?:string;
    model?:string;
    limit?:number;
    fuel?:string;
}

export interface HomeProps {
    searchParams: FilterProps;
}

export interface OptionProps {
    title:string;
    value:string
}

export interface CustomFilterProps {
    title:string;
    options:OptionProps[ ]
}