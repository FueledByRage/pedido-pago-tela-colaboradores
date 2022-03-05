import styled from '@emotion/styled';

type MobileContainer = {
    show: boolean
}

export const MobileContainerRoles = styled('div')<MobileContainer>`
    width: 95vw;
    background-color: #FFFFFF;
    display: flex;
    padding: 10px;
    flex-direction: column;
    border: ${MobileContainer => MobileContainer.show ? '3px solid #B5F1DD' : '1px solid #EAEFED'};
    border-radius: 15px;
    margin-top: 10px;
    color: #587169;

    .top{
        font-weight: bold;
    }
    .name{
        margin-left: 10px;
    }

`;

export const RowleMobile = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 10px;
    :nth-of-type(1n){
        height: 73px;
    }
    :nth-of-type(2n){
        height: 65px;
    }
    :nth-of-type(3n){
        height: 92px;
    }
`;
export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;