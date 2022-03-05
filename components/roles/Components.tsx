import styled from '@emotion/styled';

type CheckBox = {
    marked: boolean
}

export const RolesContainer = styled.div`
    width: 100vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 20px;
    background-color: #FFFFFF;
    p{
        align-self: start;
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
    display: flex;
    flex-direction: row;
    width: 95vw;
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