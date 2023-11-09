import { useState, useEffect } from 'react';
import { Container, CategoryList } from "./styles";

import Header from "../../Components/Header";
import Categories from '../../Components/Categories';

import api from '../../Services/api';
import {API_KEY} from '@env';

export default function Home() {

    const [categories, setCategories] = useState([])
    useEffect(() => {
        async function handleCategories() {

            const response = await api.get(`genres?key=${API_KEY}`)
            const resp = response.data.results;
            resp.forEach(item => {
                console.log(item.name, item.id) 
            });

        }
        handleCategories();
    }, [])

    return (
        <Container>
            <Header />
            <CategoryList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={categories}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <Categories data={item} />}
            />
        </Container>
    )
}