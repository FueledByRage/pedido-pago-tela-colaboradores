import styled from '@emotion/styled';

type props = {
    selected: boolean
}

export const Button = styled('button')<props>`
    width: 197px;
    height: 30px;
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;
    border-bottom: ${props => props.selected ? '2px solid #22E0A1' : 'none'};
    color: ${props => props.selected ? 'black' : '#A3B8B0'};
    font-weight: bold;
`;