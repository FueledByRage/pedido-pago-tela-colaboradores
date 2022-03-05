import styled from '@emotion/styled';

type ButtonProps = {
    off: boolean,
    next: boolean,
}

export const SelectRegistersContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: #587169;
    justify-content: space-between;
    align-items: center;
    select{
        margin-left: 20px;
        padding: 10px 15px;
        border-radius: 10px;
        color: #587169;
        border 3px solid #587169;
    }
`;

export const NavigateButton = styled('button')<ButtonProps>`
    width: 50px;
    padding: 10px;
    border: 1px solid #587169;
    background-color: transparent;
    font-weight: bold;
    opacity: ${props =>props.off ? '.7' : '1'};
    border-radius: ${props => props.next? '0px 6px 6px 0px' : ' 6px 0px 0px 6px'};
`;

export const NavigateButtons = styled.div`
    width: 170px;
    display: flex;
    flex-direction: row;
    color: #587169;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
`;