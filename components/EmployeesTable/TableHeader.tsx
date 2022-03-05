import styled from '@emotion/styled';

export const TableHead = styled.tr`
    color: #587169;
    font-weight: bold;
    td{
        padding: 20px;
        border-top: 1px solid #A3B8B0;
        border-bottom: 1px solid #A3B8B0;
    }

    td:first-child{
        border-left: 1px solid #A3B8B0;
        border-radius: 10px 0 0 10px;
    }
    td:last-child{
        border-right: 1px solid #A3B8B0;
        border-radius: 0px 10px 10px 0px;
    }
`;