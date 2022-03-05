import { useState } from "react";
import { Icon, StatusCell } from "../EmployeesTable/TableBody";
import { ActionsButton, Container, ContainerColumn, ContainerRow, ShowMoreButton } from "./components";
import { ModalAction } from "../ModalAction/ModalActions";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { IconContext } from "react-icons";


export function ColaboradorBox( { colaborador } ){

    const [ showMore, setShow ] = useState(false);
    const [ modal, setModal ] = useState(false);

    return(
        <Container show={showMore}>
            <ContainerColumn>
                <ContainerRow>  Nome completo  </ContainerRow>
                <ContainerRow>
                    <ContainerRow>
                         <Icon className="icon"  url={colaborador.image}/>
                        <span className="name">
                            {  colaborador.name } 
                        </span>
                    </ContainerRow>
                    <ShowMoreButton show={showMore} onClick={()=>{setShow(!showMore)}} >
                        <IconContext.Provider value={{size: '20px'}}>
                            { showMore ? <FiChevronUp /> : <FiChevronDown />}
                        </IconContext.Provider>
                    </ShowMoreButton>
                </ContainerRow>
            </ContainerColumn>
            {
                showMore && 
                <>
                    <ContainerRow>
                        <ContainerColumn>
                            <p>Departamento</p>
                            {colaborador.department}
                        </ContainerColumn>
                        <ContainerColumn>
                            <p>Cargo</p>
                            { colaborador.role }
                        </ContainerColumn>
                    </ContainerRow>
                    <ContainerRow>
                        <ContainerColumn>
                            <p>
                                Unidade
                            </p>
                            123456789
                        </ContainerColumn>
                        <ContainerColumn>
                            <p>
                                Unidade
                            </p>
                            { colaborador.branch }
                        </ContainerColumn>
                    </ContainerRow>
                    <ContainerRow>
                        <ContainerColumn>
                            <p>
                                status
                            </p>
                            <StatusCell status={colaborador.status == 'active'}> {colaborador.status} </StatusCell>
                        </ContainerColumn>
                    </ContainerRow>
                    <ContainerRow>
                        <ActionsButton onClick={() => setModal(true)}>
                            Ações
                        </ActionsButton>
                    </ContainerRow>
                    <ModalAction on={modal} closeModal={setModal} type={'colaborador'} id={colaborador.agent_id} />
                </>
            }

        </Container>
    );
}