import styled from "styled-components/native";


export const BtnGame = styled.TouchableOpacity`
    flex-direction: column;
    width: 100%;
    max-height: 170px;
    margin-top: 10px;
   
`
export const Background = styled.Image`
    width: 100%;
    height: 100%;
    border-radius: 8px ;
    
    `
export const Info = styled.View`
 position: absolute;
 z-index: 99;
 bottom: 10px;
 left: 20px;
 flex-direction: column;

 
 `;
export const TitleGame = styled.Text`
     font-size: 18px;
     color: #FFF;
     text-align: center;
     
     font-weight: bold;
 `
export const Pontuation = styled.View`
     flex-direction: row;
     align-items: center;
     gap: 5px;
 `



export const Rating = styled.Text`
     font-size: 16px;
     color: #FFF;
     text-align: center;
 `
export const DarkOverlay = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6); /* Ajuste o valor do alfa para alterar a opacidade */

`;