import styled from '@emotion/styled';

type props = {
    status: boolean
}

type ImageProps ={
    url: string
}

export const TableCell = styled.td`
    padding:25px 10px;
    color: #587169;
    .icon-div{
        display:flex;
        flex-direction: row;
        span{
            margin-left: 15px;
        }
    }
`;

export const StatusCell = styled('span')<props>`
    padding: 4px 15px;
    background-color: ${props => props.status ? '#B5F1DD' : '#EAEFED'};
    border-radius: 15px;
    font-weight: bold;
`;

export const Icon = styled('div')<ImageProps>`
    width: 32px;
    height: 32px;
    background-position: 50% 50%;
    background-size: cover;
    background-image: url(${ImageProps => ImageProps.url});
    border-radius: 20px;
    background-repeat: no-repeat;
`