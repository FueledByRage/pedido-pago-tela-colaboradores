import { useState } from "react";
import { Icon, StatusCell } from "../EmployeesTable/TableBody";
import { ActionsButton, Container, ContainerColumn, ContainerRow, ShowMoreButton } from "./components";
import { ModalCategory } from "./ModalCategories";
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';


export function ColaboradorBox( { colaborador } ){

    const [ showMore, setShow ] = useState(false);

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
                    <ShowMoreButton onClick={()=>{setShow(!showMore)}} >
                        { showMore ? <FiChevronUp /> : <FiChevronDown />}
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
                        <ActionsButton>
                            Ações
                        </ActionsButton>
                    </ContainerRow>
                </>
            }

        </Container>
    );
}