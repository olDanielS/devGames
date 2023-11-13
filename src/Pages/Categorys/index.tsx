import { useState, useEffect } from 'react';
import { Container, CategoryList, BobyTitle, Body } from "./styles";

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import Header from "../../Components/Header";

import api from '../../Services/api';
import {API_KEY} from '@env';
import { FlatList } from 'react-native';


export default function Categorys() {
    
    const navigation = useNavigation();
    const route = useRoute();

    const [categorie, setCategorie] = useState();

    useEffect(() => {
        navigation.setOptions({
            title: route.params?.name
        })
        console.log(route.params?.id)

        async function getCategoryById(){
            const response = await api.get(`games?page_size=5&key=${API_KEY}&genres=${route.params?.id}?`)
            setCategorie(response.data.results)
            console.log(response.data.results[0])
        }

        getCategoryById();

    }, [])
  

    return (
        <Container>
           
        </Container>
    )
}