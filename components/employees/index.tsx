import { useEffect, useState } from "react";
import {  FiChevronLeft, FiChevronRight, FiSearch, FiRefreshCcw } from 'react-icons/fi';
import { StyledInput, StyledInputContainer } from "../input";
import { StyledTable } from "../EmployeesTable";
import { TableHead } from "../EmployeesTable/TableHeader";
import { TableCell, StatusCell, Icon } from "../EmployeesTable/TableBody";
import { NavigateButton, NavigateButtons, SelectRegistersContainer } from "../SelectRegisters";
import { ColaboradorBox } from "../EmployeesMobile/EmployesBox";
import { LoadMoreButton, MobileBox } from "../EmployeesMobile/components";
import { ModalCategory } from "../EmployeesMobile/ModalCategories";
import { DropDownButton } from "./droppdown";
import { IconContext } from "react-icons";
import { ModalAction } from "../ModalAction/ModalActions";

export default function ColaboradoresComponent({ results, width, modal, closeModal, ModalFunction }){

    type result ={
        agent_id: number,
        name: string,
        image: string,
        department: string,
        branch: string,
        role: string,
        status: string
    }

    const [ page, setPage ] = useState(0);
    const [ registers, setRegister ] = useState(10);
    const [ lastPageMobile, setLastPageMobile ] = useState(false);
    const [ lastPage, setLastPage ] = useState(false);
    const [ pageMobile, setPageMobile ] = useState(1);
    const [ currentData, setCurrent ] = useState([]);


    useEffect(()=>{
        setCurrent(results['items'].slice((registers * page), ((page + 1 ) * registers)));
        const isLastPage = results['items'].slice((registers * (page + 1))).length == 0; 
        const isLastPageMobile = (results['items'].length -1 )< ((pageMobile * 6 ) + 1);
        if(isLastPage != lastPage) setLastPage(isLastPage);
        if(isLastPageMobile != lastPageMobile)setLastPageMobile(isLastPageMobile);
    }, [pageMobile, page, registers]);


    return(
        <>
        <StyledInputContainer>
            <i>
                <FiSearch />
            </i>
            <StyledInput placeholder="Pesquise por nome" />
        </StyledInputContainer>

        {
            width > 768 ?
            <>
            <p className="title"> Listagem de colaboradores </p>
            <StyledTable>
                        <thead>
                            <TableHead>
                                <td>Nome completo</td>
                                <td>Departamento</td>
                                <td>Cargo</td>
                                <td>Unidade</td>
                                <td>Status</td>
                                <td></td>
                            </TableHead>
                        </thead>
                        <tbody>
                            {
                                currentData.map((result: result, index: number) => {
                                    return <tr key={index}>
                                        <TableCell>
                                            <div className="icon-div">
                                                <Icon url={result.image} />
                                                <span>
                                                    {result.name}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell> {result.department} </TableCell>
                                        <TableCell> {result.role} </TableCell>
                                        <TableCell> {result.branch} </TableCell>
                                        <TableCell> <StatusCell status={result.status == 'active'}> {result.status} </StatusCell></TableCell>
                                        <TableCell> <DropDownButton employeeId={result.agent_id}/> </TableCell>
                                    </tr>;
                            })}
                        </tbody>
                    </StyledTable>
                    <SelectRegistersContainer>
                            <SelectRegistersContainer>
                                {` Mostrando ${registers} de ${results['items'].length} registros `}
                                <select onChange={(e) => setRegister(parseInt(e.target.value))} defaultValue={10}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                    <option value='6'>6</option>
                                    <option value='7'>7</option>
                                    <option value='8'>8</option>
                                    <option value='9'>9</option>
                                    <option value='10'>10</option>
                                </select>
                            </SelectRegistersContainer>
                            <NavigateButtons>

                                <NavigateButton off={page == 0} onClick={() => { setPage(page - 1); } } disabled={page == 0} next={false}>
                                    <IconContext.Provider value={{size: '20px'}}>
                                        <FiChevronLeft />
                                    </IconContext.Provider>
                                </NavigateButton>

                                {
                                `${(page +1)} de ${Math.ceil(results['items'].length / registers)}`
                                }

                                <NavigateButton off={lastPage} onClick={() => setPage(page + 1)} disabled={lastPage} next={true}>
                                    <IconContext.Provider value={{size: '20px'}}>
                                        <FiChevronRight />
                                    </IconContext.Provider>
                                </NavigateButton>
                            </NavigateButtons>
                            
                        </SelectRegistersContainer></> 
                        :
            <MobileBox>
                <p className="title-table">Lista de colaboradores</p>
                {
                    results['items'].slice(0,(6 * pageMobile)).map((colaborador: result, index: number)=>{
                        return(
                            <ColaboradorBox key={index} colaborador={colaborador} />
                        );
                    })
                }
                <LoadMoreButton disabled={lastPageMobile} onClick={()=> setPageMobile(pageMobile + 1)} > 
                <FiRefreshCcw />
                <span>
                    Carregar Mais
                </span>
                </LoadMoreButton>
                <ModalCategory OptionFunction={ModalFunction} on={modal} closeModal={closeModal}/>
            </MobileBox> 
    }
    </>
    );
}

