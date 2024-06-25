import { Container, Logo } from "./styles";
import logImg from "@assets/logo.png";

export function Header(){
    return(
        <Container>
            <Logo source={logImg}/>
        </Container>
    )
}