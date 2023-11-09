import styled from "styled-components/native";

export const HeaderArea = styled.View`
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 20px;
`
export const Head = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.View`
    flex-direction: row;
`
export const TextLogoRigth = styled.Text`
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
`
export const TextLogoLeft = styled.Text`
    color: #FF455F;
    font-size: 30px;
    font-weight: bold;
`
export const SavedGame = styled.TouchableOpacity`
    border-radius: 20px;
    background-color: #1F2430;
    width: 37px;
    height: 37px;
    align-items: center;
    justify-content: center;
`
export const SeachArea = styled.View`
    flex-direction: row;
    gap: 10px;
    margin-top: 20px;
`
export const SeachInput = styled.TextInput.attrs({
    placeholderTextColor: "#FFF"
  })`
    width: 85%;
    background-color: #1F2430;
    border-radius: 20px;
    padding: 7px;
    font-size: 16px;
    height: 43px;
    padding-left: 13px;
    font-weight: 500;
`



