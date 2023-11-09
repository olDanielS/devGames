import { HeaderArea,Head, Logo, TextLogoRigth, TextLogoLeft, SavedGame,SeachArea,SeachInput} from "./styles";
import Feater from '@expo/vector-icons/Feather'


export default function Header(){
    return(
        <HeaderArea>
            <Head>
                <Logo>
                    <TextLogoRigth>Dev</TextLogoRigth><TextLogoLeft>Games</TextLogoLeft>
                </Logo>
                <SavedGame>
                    <Feater name="bookmark" color='#FFF' size={20}/>
                </SavedGame>
            </Head>

            <SeachArea>
                <SeachInput placeholder="Looking for a game?"/>
                <Feater name="search" color="#FF455F" size={30}/>
            </SeachArea>
            

        </HeaderArea>
    )
}