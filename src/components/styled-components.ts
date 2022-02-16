import styled from 'styled-components';
import { props } from "../interface/interfaces";

export const Flex = styled.div<props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;

export const Container = styled.div<props>`
    margin-top:50px;
    height: calc(${props => props.height}vh - 50px);
    width: 90%;
    border-radius: 10px 10px 0 0;
    background: url(${props => props.src}) no-repeat;
    background-size: contain;
    background-position: center;
    opacity: 0.5;
`
export const ContainerInfo = styled.div<props>`
    height: calc(${props => props.height})vh;
    width: 100%;
    color: white;
    background: black;
`

export const AvatarContainer = styled.div<props>`
    width:100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    margin: auto;
`
export const Avatar = styled.div<props>`
    width:auto;
    height: ${props => props.height}vh;
    background: url(${props => props.src}) no-repeat;
    background-position: top;
    background-size: cover;
`

export const Degrade = styled.div<props>`
    width:100%;
    height: ${props => props.height}vh;
    position: absolute;
    top: 0;
    z-index: 2;
    background: linear-gradient(transparent 0, black 90%);
`
export const MiniAvatar = styled.div<props>`
    width:50px;
    height: 50px;
    background: url(${props => props.src}) no-repeat;
    background-size: cover;
    background-position: top;
    border-radius: 50%;
    border: 2px solid white;
`
export const ButtonBuy = styled.button<props>`
    width: 80%;
    margin: auto;
    background: red;
    border: none;
    color: white;
    padding:5px;
    margin-top: 20px;
    border-radius: 7px;
    cursor: pointer;
`