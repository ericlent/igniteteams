import { useNavigation } from "expo-router";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logImg from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate("groups");
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={ handleGoBack }>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logImg}/>
        </Container>
    )
}

