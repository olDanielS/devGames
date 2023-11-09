import styled from "styled-components/native";
import { background } from "../../DefaultColors";


export const Container = styled.View`
    flex: 1;
    background-color: ${background};
    padding: 10px;
` 
export const CategoryList = styled.FlatList`
    background-color: green;
    height: 34px;
` 
export const BobyTitle = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;

` 
export const Body = styled.View`
    flex: 1;
`