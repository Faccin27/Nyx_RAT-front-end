'use client';

import styled from "styled-components";
import User from '../../assets/user.png';
import Image from "next/image";
import Input from "../Input";
import Botao from "../botao";
import { useState, useEffect } from "react";
const Div = styled.div`

`
const Formulario = styled.form``



export default function Login(){
    return(
        <Div>
            <Formulario method="post">
                <Image
                src={User}
                alt="Foto do usuário"
                width={200}
                />
                <Input
                type="text"
                placeholder="USERNAME"
                />
                <br />
                <br />
                <Input
                type="password"
                placeholder="PASSWORD"
                />
                <br />
                <br />
                <Botao
                nome='LOGIN'
                onClick={()=> console.log('Enviado')}
                >
                  
                </Botao>
            </Formulario>
        </Div>
    )
}