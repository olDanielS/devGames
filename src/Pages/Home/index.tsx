import { useState, useEffect } from 'react';
import { Container, CategoryList, BobyTitle, Body } from "./styles";

import Header from "../../Components/Header";
import Categories from '../../Components/CategoriesNameList';
import Games from '../../Components/GamesList';

import api from '../../Services/api';
import {API_KEY} from '@env';
import { FlatList } from 'react-native';

export default function Home() {

    const [categories, setCategories] = useState([]);
    const fixedItem = { id: 0, name: 'All games'};

    const [trendingGames, setTrendingGames] = useState();


    useEffect(() => {
        async function handleGetCategories() {

            const response = await api.get(`genres?key=${API_KEY}`)
            setCategories(response.data.results)
        }
        async function handleGetGames() {

            const response = await api.get(`games?page_size=5&key=${API_KEY}`)
            setTrendingGames(response.data.results)
        }

        handleGetCategories();
        handleGetGames();
    }, [])

    return (
        <Container>
            <Header/>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={[fixedItem, ...categories]}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Categories data={item} />}
                style={{maxHeight: 50}}

            />

            <Body>

            <BobyTitle>Trending games</BobyTitle>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={trendingGames}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <Games data={item} />}
                
                />
            </Body>

        </Container>
    )
}