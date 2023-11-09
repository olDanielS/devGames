import { Text, View } from "react-native"
import { BtnCategories,TextCategories } from "./styles"

interface TypeProps{
    data: {
        id: number,
        name:string
    }

    }

export default function Categories({data}: TypeProps) {
    return (
        <BtnCategories>
            <TextCategories>{data.name}</TextCategories>
        </BtnCategories>
    )
}