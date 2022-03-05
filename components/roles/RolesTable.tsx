import styled from '@emotion/styled';

export const TableHead = styled.div`
    width:90vw;
    border: 2px solid #A3B8B0;
    border-radius: 10px 10px 0px 0px;
    display: flex;
    flex-direction: row;
    font-weight: bold;
    `;

export const TableRow = styled.div`
    border-top: 2px solid #EAEFED;
    border-bottom: 2px solid #EAEFED;
    width: 90vw;
    display: flex;
    flex-direction: row;
    `;
    
export const TableCell = styled.div`
        color: #587169;
        background-color: transparent;
        padding: 25px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        :first-child{
            width: 40%;
            display: flex;
            justify-content: start;
        }
`;
