import styled from '@emotion/styled';

type CheckBox = {
    marked: boolean
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    .title-box{
        display: flex;
        align-content: center;
        align-items: center;
        padding-left: 20px;
    }
`;

export const RolesContainer = styled.div`
    width: 90vw;
    padding: 10px;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    background-color: #FFFFFF;
    p{
        align-self: start;
    }
    .table{
        width: 100%;
        padding: 10px;
    }
`;

export const StyledCheckbox = styled('input')<CheckBox>`
    background-color: #1DD195;
    padding: 2px;
    border-radius: 10px;
    width: 25px;
    height: 25px;
`;

export const RoleDataSection = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    width: 90vw;
    margin-left: 10px;
    align-items: center;

    @media(max-width: 768px){
        flex-direction: column;
    }
`;

export const RoleDataContainer = styled.div`
    position: relative;
    color: #587169;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 60px;
    padding-left: 10px;
    border-radius: 10px;
    border: 2px solid #A3B8B0;
    label{
        position: absolute;
        background-color: white;
        top: -12px;
        left: 7px;
        color: #A3B8B0;
    }
    margin-right: 10px;
    @media(max-width: 768px){
        margin-top: 10px;
    }
`;