import styled from '@emotion/styled';



export const Column = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    .title{
        margin-left: 70px;
    }
    .name, .email{
        font-family: Poppins;
        font-style: normal;
        margin-left: 20px;
        align-self: start;
  
    }
    .name{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 150%;
    }
    .email{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        display: flex;
        align-items: center;
        color: #587169;
    }
    .top, .bottom{
        align-self: start;
        margin-left: 10px;
    }
    .bottom{
        font-weight: bold;
        font-size: 14px;
        color: #34423D;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 50px;
    align-items: center;
    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 50px;
    align-items: center;

`;

export const Cards = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #FFFFFF;
    padding: 50px;
    align-items: center;
    justify-content: space-evenly;
    @media(max-width: 768px){
        flex-direction: column;
    }
`;


export const CardInfo = styled.div`
    background-color: #F5FAF8;
    padding: 16px;
    color: #587169;
    border-radius: 10px;
    border: 2px solid #CAD6D1;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: start;
    align-content: center;
    margin-left: 20px;
    min-width: 200px;
    span{
        margin-left: 20px;
    }
    .top{
        color: #587169;
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        align-self: start;

    }
    .bottom{
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        align-self: center;
        color: #587169;
    }
    @media(max-width: 768px){
        margin-top: 10px;
    }
`;

export const IconInfo = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #CAD6D1;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
`;

export const IconUser = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    background-color: #CAD6D1;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    @media(max-width: 768px){
        align-self: start;
    }   
`;

export const ContainerInputs = styled.div`
    padding: 10px;
    position: relative;
    width: 90vw;
    align-self: center;
    border-radius: 10px;
    border: 2px solid #CAD6D1;
    background-color: #FFFFFF;
    p{
        font-weight: 600;
        font-size: 18px;
        color: ##34423D;
        margin-left: 30px;
    }
    div{
        padding:10px;
    }

`;

export const SelectInput = styled.select`
    padding: 10px;
    color: #587169;
    width: 100%;
    height: 56px;
    border-radius: 10px;
    border: 2px solid #CAD6D1;
    background-color: #F5FAF8;
    margin-left: 20px;

`
export const InputBox = styled.div`
    position: relative;
    width: 100%;
    height: 56px;
    label{
        background-color: white;
        color: #A3B8B0;
        position: absolute;
        top: 0px;
        left: 45px;
    }


    :nth-of-type(even){
        @media(max-width: 768px){
            margin-top: 10px;
         }   
    }
`;