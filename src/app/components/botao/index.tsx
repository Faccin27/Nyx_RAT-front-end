import { BotaoProps } from "@/app/utils/botao";
import styled from "styled-components";

const Botaso = styled.button`
background: #B700FF;
  color: white; // Cor do texto branca
  border: none; // Sem borda
  padding: 10px 20px; // Espaçamento interno
  font-size: 54px; // Tamanho da fonte
  border-radius: 766px; // Bordas arredondadas
  cursor: pointer; // Cursor de ponteiro ao passar o mouse
  widht: 200px;

  &:hover {
    background-color: #3700B3; // Cor de fundo mais escura ao passar o mouse
    transition: background-color 0.3s ease-in-out; // Transição suave
  }
`



export default function Botao( {nome, onClick}:BotaoProps ) {
    return(
        <>
            <Botaso
            onClick={onClick}
            >
                {nome}
            </Botaso>
        </>
    )
}