import { Contatiner, Title, Subtitle } from "./style";

type Props = {
    title: string;
    subtitle: string;
}

export function Highlight( { title, subtitle}: Props) {
    return (
        <Contatiner>
            <Title>
                {title}
            </Title>
            
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Contatiner>
    );
}