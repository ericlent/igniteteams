import { Container, Logo, BackButton, BackIcon } from "./styles";
import logImg from "@assets/logo.png";

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <Container>
            {
                showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logImg}/>
        </Container>
    )
}

