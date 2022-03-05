import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFile } from 'react-icons/fi';
import { ActionsButton } from '../EmployeesMobile/components';
import { Column, MobileContainerRoles, RowleMobile } from "./components";
import { ShowMoreButton } from '../EmployeesMobile/components';

export default function RolesMobile({ role }){

    const [ show, setShow ] = useState(false);

    return(
        <MobileContainerRoles show={show}>
            <RowleMobile>
                <Column>
                    <span className='top'>Cargo</span>
                    <span>{role.name}</span>
                 </Column>
                <Column>
                    {
                        show ?? 
                        <>
                            <span className='top'>Departamento</span>
                            <span>{role.departament}</span>
                        </>
                    }
                </Column>
                <ShowMoreButton onClick={()=>{setShow(!show)}} >
                    { show ? <FiChevronUp /> : <FiChevronDown />}
                </ShowMoreButton>
            </RowleMobile>
            {
                    show ?
                    <>
                        <RowleMobile>
                            <Column>
                                <span className='top' >Colaboradores</span>
                                <span>{role.agents_quantity}</span>
                            </Column>
                        </RowleMobile>
                        <RowleMobile>
                            <ActionsButton>
                                <FiFile />
                                <span>
                                    Ações
                                </span>
                            </ActionsButton>
                        </RowleMobile>
                    </> :
                    null
                }
        </MobileContainerRoles>
    );
}