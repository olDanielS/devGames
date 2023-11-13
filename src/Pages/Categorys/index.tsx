import { useState, useEffect } from 'react';
import { Container, CategoryList, BobyTitle, Body } from "./styles";

import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';

import FilterCategories from '../../Components/FilterCategories';

import api from '../../Services/api';
import {API_KEY} from '@env';
import { FlatList } from 'react-native';
import { ActivityIndicator, View} from 'react-native';


export default function Categorys() {
    
    const navigation = useNavigation();
    const route = useRoute();

    const [categorie, setCategorie] = useState();
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        navigation.setOptions({
            title: route.params?.name
        })
        console.log(route.params?.id)

        async function getCategoryById(){
            const response = await api.get(`games?page_size=5&key=${API_KEY}&genres=${route.params?.id}`)
            setCategorie(response.data.results)
            setLoading(!loading)
        }

        getCategoryById();

    }, [])
  

    return (
        <Container>
            {
                loading ? (
                    <FlatList
                       
                       showsHorizontalScrollIndicator={false}
                       data={categorie}
                       keyExtractor={(item) => item.id.toString()}
                       renderItem={({ item }) => <FilterCategories data={item} />}
                       
       
                   />

                ) :
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                    <ActivityIndicator size={32} color="#FFF"/>

                </View>
            }
        </Container>
    )
}