import styled from '@emotion/styled';
import { jsx, css, keyframes } from "@emotion/react";

type ContainerProps = {
    show: boolean
}

const animation = keyframes`
    from{
        margin-bottom: -30vh;
    }
    to{
        margin-bottom: 0px;
    }
`;

export const Container = styled('div')<ContainerProps>`
    width: 95vw;
    background-color: #FFFFFF;
    display: flex;
    padding: 10px;
    flex-direction: column;
    border: ${ContainerProps => ContainerProps.show ? '3px solid #B5F1DD' : '1px solid #EAEFED'};
    border-radius: 15px;
    margin-top: 10px;
    color: #587169;
    .name, .icon{
        opacity: ${ContainerProps => ContainerProps.show ? '1' : '.5'};
    }
    .name{
        font-weight: bold;
        margin-left: 10px;
        color: #587169;
    }
`;

export const ContainerColumn = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
`;

export const ContainerRow = styled.div`
    display: flex;
    flex-direction: row;
    padding: 5px;
    font-size: 12px;
    align-items: center;
    justify-content: space-between;
`;

export const ActionsButton = styled.button`
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #B5F1DD;
    border-radius: 10px;
    width: 95%;
    font-weight: bold;
    padding: 20px;
    color: #34423D;
    font-size: 16px;
    color: #B5F1DD;
    span{
        margin-left: 5px;
    }
`;

export const MobileBox = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    align-self: center;
    border-top: 2px solid #EAEFED;
    width: 100vw;
    .title{
        margin-left: 15px;
        align-self: start;
        font-weight: bold;
        color: #34423D;
    }
`;

export const Modal = styled.div`
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    position: fixed;
    width: 100%;
    height: 100vh;
    background-color: rgb(0,0,0,.3);
    display: flex;
    align-items: end;
    justify-content: center;
`;

export const Categories = styled.div`
    width: 95vw;
    height: 30vh;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding: 25px 10px 30px;
    animation: ${animation} 1s ease;
    color: #587169;
    font-size: 16px;
    border-radius: 10px 10px 0px 0px;
    padding: 10px 8px;
    .title{
        margin-left: 2px;
        font-size: 18px;
        color: #34423D;
        font-weight: bold;
    }

`;

export const ShowMoreButton = styled.button`
    border: none;
    background-color: transparent;
    width: 25px;
    height: 25px;
`;

export const LoadMoreButton = styled.button`
    margin-top: 10px;
    width: 95%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 2px solid #B5F1DD;
    border-radius: 10px;
    font-size: 15px;
    color: #1DD195;
    span{
        color: #34423D;
        margin-left: 10px;
        font-weight: bold;
    }

`;

export const Categorie = styled.div`
    display: flex;
    align-text: center;
    width: 100%;
    padding: 10px;
`;