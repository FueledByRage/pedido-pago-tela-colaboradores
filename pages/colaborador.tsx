import { CardInfo, Column, ContainerInputs, 
    IconInfo, IconUser, Row,
    SelectInput, Cards, InputBox, 
    InfoSection, EmployeeBox } from "../components/Employee/colaborador";
import { FiUser, FiCalendar, FiPhoneCall, FiCreditCard } from 'react-icons/fi';
import api  from './api/axios'
import { useEffect } from "react";



export default function Colaborador({ erro, employee, message }){
    
    function returnDate(date: string) : string{
        const splited = date.split('T');
        const newDate = new Date(splited[0]).toISOString().split('T');
        return newDate[0];
    }

    return(
        <EmployeeBox>
            <InfoSection>
                <IconUser>
                    <FiUser />
                </IconUser>
                <Column>
                    <span className="name">{employee.name}</span>
                    <span className="email">{employee.email}</span>
                </Column>
            </InfoSection>
            <p className="title">Informações pessoais</p>
            <Cards>
                <CardInfo>
                    <IconInfo >
                        <FiCreditCard />
                    </IconInfo>
                    <Column>
                        <span className="top">{employee.document.type}</span>
                        <span className="bottom">{employee.document.number}</span>
                    </Column>
                </CardInfo>
                <CardInfo>
                    <IconInfo >
                        <FiPhoneCall />
                    </IconInfo>
                    <Column>
                        <span className="top">Telefone</span>
                        <span className="bottom">{`${employee.phone.ddi} ${employee.phone.ddd} ${employee.phone.number}`}</span>
                    </Column>
                </CardInfo>
                <CardInfo>
                    <IconInfo >
                        <FiCalendar />
                    </IconInfo>
                    <Column>
                        <span className="top">Nascimento</span>
                        <span className="bottom">{returnDate(employee.birth_date)}</span>
                    </Column>
                </CardInfo>
            </Cards>
            <ContainerInputs>
                <p>Dados organizacionais</p>
                <Row>
                    <InputBox>
                        <SelectInput > <option value="">{employee.deparment}</option> </SelectInput>
                        <label className="departamentos">Departamentos</label>
                    </InputBox>
                    <InputBox>
                        <SelectInput > <option value="">{employee.role}</option> </SelectInput>
                        <label className="cargo">Cargo</label>
                    </InputBox>
                </Row>
                <Row>
                    <InputBox>
                        <SelectInput > <option value=""> {employee.branch} </option> </SelectInput>
                        <label className="unidade">Unidade</label>
                    </InputBox>
                    <InputBox>
                        <SelectInput > <option value=""> Ativo </option> </SelectInput>
                        <label className="status">{employee.status || false}</label>
                    </InputBox>
                </Row>
            </ContainerInputs>
        </EmployeeBox>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/agent/${query.employeeId}`);
        return{
            props:{
                employee: response.data.agent,
            }
        }
    } catch (error) {
        return{
            props: {
                error: error.status || 404, message : error.message
            }
        }
    }
}