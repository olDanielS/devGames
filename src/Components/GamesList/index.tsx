import { Text, View } from "react-native"
import { BtnGame, TitleGame, Background, DarkOverlay, Info, Rating, Pontuation } from "./styles"

import FontAwesome from '@expo/vector-icons/FontAwesome'

interface TypeProps {
    data: {
        id: number,
        name: string,
    }

}

export default function Games({ data }) {
    return (

        <BtnGame onPress={() => console.log(data)}>
            <Background source={{ uri: data.background_image }} reziseMode="cover" />
            <DarkOverlay />

            <Info>
                <TitleGame>{data.name}</TitleGame>
                <Pontuation>

                    <FontAwesome name="star" size={13} color={"#FABB1E"} />
                    <Rating>{data.rating.toFixed(1)}/5</Rating>
                </Pontuation>
            </Info>

        </BtnGame>

    )
}