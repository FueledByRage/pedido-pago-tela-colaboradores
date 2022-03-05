import { StyledInput, StyledInputContainer } from "../input";
import { StyledTable } from "../EmployeesTable";
import { TableHead } from "../EmployeesTable/TableHeader";
import { useState, useEffect } from "react";
import { TableCell } from "../EmployeesTable/TableBody";
import { SelectRegistersContainer } from "../SelectRegisters";
import { NavigateButtons, NavigateButton } from "../SelectRegisters";
import RolesMobile from "../RolesMobile/RolesMobile";
import { MobileBox } from "../EmployeesMobile/components";
import { FiSearch } from 'react-icons/fi';
import { DropDownButtonRoles } from "./dropDownButtonRoles";
import { ModalCategory } from "../EmployeesMobile/ModalCategories";
import { LoadMoreButton } from "../EmployeesMobile/components";

export default function RoleComponent({ roles, width, modal, closeModal, ModalFunction }){

    type role = {
        name: string,
        departament: string,
        agents_quantity: number
    }

    const [ page, setPage ] = useState(0);
    const [ registers, setRegister ] = useState(10);
    const [ lastPage, setLastPage ] = useState(false);
    const [ lastPageMobile, setLastPageMobile ] = useState(false);
    const [ pageMobile, setPageMobile ] = useState(1);


    useEffect(()=>{
        const isLastPageMobile = (modal['items'].length -1 )< ((pageMobile * 6 ) + 1);
        setLastPage(roles['roles'].slice((page + 1) * 10).length == 0);
        setLastPageMobile(isLastPageMobile);
    },[page]);

    return(
        <>
            <StyledInputContainer>
                <i>
                    <FiSearch />
                </i>
                <StyledInput  placeholder="Pesquise por cargos" />
            </StyledInputContainer>
            {
                width > 768 ?
                <> 
                    <p className="title">Listagem de cargos</p>
                    <StyledTable>
                        <thead>
                            <TableHead>
                                <td>Cargo</td>
                                <td>Departamento</td>
                                <td>Colaboradores</td>
                                <td></td>
                            </TableHead>
                        </thead>
                        <tbody>
                            {
                                roles['roles'].slice((registers * page), ((page + 1 ) * registers)).map((role : role, index: number)=>{
                                    return <tr key={index} >
                                        <TableCell>{role.name}</TableCell>
                                        <TableCell>{role.departament}</TableCell>
                                        <TableCell>{role.agents_quantity}</TableCell>
                                        <TableCell> <DropDownButtonRoles /> </TableCell>
                                    </tr>
                                })
                            }
                        </tbody>
                    </StyledTable>
                    <SelectRegistersContainer>
                    <NavigateButtons> 
                        <NavigateButton off={page == 0} onClick={()=>{setPage(page - 1)}} disabled={page == 0} next={false} >
                            {'<'}
                        </NavigateButton> 
                            {`${Math.floor(roles['roles'].length / registers)} de ${registers}`}
                        <NavigateButton off={lastPage} onClick={()=> setPage(page + 1)} disabled={lastPage} next={true} >
                            {'>'}
                        </NavigateButton>
                    </NavigateButtons>
                </SelectRegistersContainer>
                </> :
                <MobileBox>
                    <p className="title">Lista de colaboradores</p>
                    {
                        roles['roles'].slice(0, 6).map((role : role, index: number)=>{
                            return <RolesMobile key={index} role = {role}></RolesMobile>
                        })
                    }
                    <LoadMoreButton disabled={lastPageMobile} onClick={()=> setPageMobile(pageMobile + 1)} > 
                    <ModalCategory on={modal} closeModal={closeModal} OptionFunction={ModalFunction} />
                </MobileBox>
            }
        </>
    );
}