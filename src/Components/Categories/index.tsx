import { Text, View } from "react-native";
import { BtnCategories, TextCategories } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ScreenTypes } from "../../Routes/StackRoutes";


interface TypeProps {
   id: number,
   name: string

}

export default function Categories({ data }: TypeProps) {
    
    const navigation = useNavigation<ScreenTypes>();

    return (
        
        <BtnCategories onPress={() => navigation.navigate('Categorys', {name: data.name, id: data.id})}>
            <TextCategories>{data.name}</TextCategories>
        </BtnCategories>
    )
}