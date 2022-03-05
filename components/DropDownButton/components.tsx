import styled from '@emotion/styled';

type OptionProps = {
    disabled: boolean
}

export const DropDownContainer = styled.div`
    position: relative;
`;

export const DropButton = styled.button`
    display: flex;
    justify-content: center;
    border: none;
    background-color: transparent;
`;

export const DropMenu = styled.div`
    position: absolute;
    width: 200px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    top: 45;
    margin-left: -200px;
`;

export const DropOption = styled('div')<OptionProps>`
    pointer-events: ${OptionProps => OptionProps.disabled ?? 'none'}
    opacity: ${OptionProps => OptionProps.disabled ? '.3' : '1'}
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    padding: 20px;
    background-color: #FFFFFF;
    color: #587169;
    span{
        margin-left: 10px;
    }
`;