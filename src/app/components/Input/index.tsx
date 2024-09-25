import { InputProps } from '../../utils/input'
import styled from 'styled-components'


const InputContainer = styled.input`
  background: #D9D9D94F;
  border: 1px solid #ccc; // Borda cinza clara
  padding: 10px; // Espaçamento interno
  font-size: 16px; // Tamanho da fonte
  border-radius: 7869px; // Bordas arredondadas
  width: auto; // Largura total do container
  box-sizing: border-box; // Inclui padding e border no tamanho total
  margin-bottom: 10px; // Espaçamento inferior entre os inputs

  &:focus {
    border-color: #6200EE; // Cor da borda ao focar
    outline: none; // Remove o outline padrão
  }

  &::placeholder {
    color: #aaa; // Cor do placeholder
  }
`;



export default function Input({type, required, placeholder}:InputProps){
    return(
        <>
            <InputContainer
            type={type}
            required={required}
            placeholder={placeholder}
            />
        </>
    )
}