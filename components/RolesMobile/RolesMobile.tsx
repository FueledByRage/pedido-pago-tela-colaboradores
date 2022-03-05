import { useState } from 'react';
import { FiChevronDown, FiChevronUp, FiFile } from 'react-icons/fi';
import { ActionsButton } from '../EmployeesMobile/components';
import { Column, MobileContainerRoles, RowleMobile } from "./components";
import { ShowMoreButton } from '../EmployeesMobile/components';
import { IconContext } from 'react-icons';
import { ModalAction } from '../ModalAction/ModalActions';

export default function RolesMobile({ role }){

    const [ show, setShow ] = useState(false);
    const [ modal, setModal ] = useState(false);

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
                <ShowMoreButton show={show} onClick={()=>{setShow(!show)}} >
                    <IconContext.Provider value={{size: '20px'}}>
                        { show ? <FiChevronUp /> : <FiChevronDown />}
                    </IconContext.Provider>
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
                            <ActionsButton onClick={() =>setModal(true)}>
                                <FiFile />
                                <span>
                                    Ações
                                </span>
                            </ActionsButton>
                        </RowleMobile>
                    </> :
                    null
                }

            <ModalAction on={modal} closeModal={setModal} type={'cargo'} id={'1'} />


        </MobileContainerRoles>
    );
}