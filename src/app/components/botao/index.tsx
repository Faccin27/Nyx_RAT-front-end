import Home from "@/app/page";
import { BotaoProps } from "@/app/utils/botao";
import { renderToString } from "react-dom/server";
import styled, { ServerStyleSheet } from "styled-components";

const Botaso = styled.button`
  background: #B700FF;
  color: white; // Cor do texto branca
  border: none; // Sem borda
  padding: 10px 20px; // Espaçamento interno
  font-size: 54px; // Tamanho da fonte
  border-radius: 766px; // Bordas arredondadas
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  width: 100%; // Ajuste a largura para 100% do contêiner
  display: block; // Define o botão como um bloco

  &:hover {
    background-color: #3700B3; // Cor de fundo mais escura ao passar o mouse
    transition: translateY(-2px)
  }
`;

const Container = styled.div`
  width: 100%; // Certifique-se de que o contêiner pai tenha uma largura definida
  display: flex; // Use flexbox para garantir que o botão se estique
  justify-content: center; // Centraliza o botão horizontalmente
`;



export default function Botao( {nome, onClick}:BotaoProps ) {
    return(
        <Container>
            <Botaso
            onClick={onClick}>
            
                {nome}
            </Botaso>
        </Container>
    )
}

export const getServerSideProps = async () => {
    const sheet = new ServerStyleSheet();
    const page = renderToString(sheet.collectStyles(<Home />));
    const styleTags = sheet.getStyleElement();
    return { props: { styleTags } };
  };