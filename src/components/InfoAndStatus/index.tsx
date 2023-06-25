import { Container, Info, Status } from "./styles";

interface InfoAndStatusProps {
    info: string;
    status: string;
}

export function InfoAndStatus({info, status}: InfoAndStatusProps){
    return (
        <Container>
            <Info>{info}</Info>
            <Status>{status}</Status>
        </Container>       
    )
}