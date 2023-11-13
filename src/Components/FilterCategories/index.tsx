import { Text, View, ActivityIndicator } from "react-native"
import { BtnGame, TitleGame, Background, DarkOverlay, Info, Rating, Pontuation } from "./styles"

import FontAwesome from '@expo/vector-icons/FontAwesome'
import { useState } from "react"

interface TypeProps {
    data: {
        id: number,
        name: string,
    }

}

export default function FilterCategorie({ data }) {
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