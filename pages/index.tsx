import Options from "../components/options";
import { data } from "./data";
import { FiMoreVertical } from "react-icons/fi";
import api from "./api/axios";
import { useEffect, useState } from "react";
import ColaboradoresComponent from "../components/employees";
import { Container } from "../components/pageComponents";
import RoleComponent from "../components/roles";
import { MobileOptionsBox } from "../components/options/items";

export default function colaboradores({error, results, roles, message}){

    const [ option, setOption ] = useState('Colaboradores');
    const [ width, setWidth ] = useState(0);
    const [ modal, setModal ] = useState(false);

    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange);
    },[]);
    
    function handleWindowSizeChange() : void{
        setWidth(window.innerWidth);
    }

    function filterOption(option: string): void{
        setOption(option);
    }

    return(
        <Container>
            {           
                width > 768 ? <Options options={data} selected={option} click={filterOption} /> : 
                <MobileOptionsBox onClick={()=>{
                    setModal(true);
                }}>
                    { option }
                    <span>
                        <FiMoreVertical />
                    </span>
                </MobileOptionsBox>
            }
            {
                option == 'Colaboradores' ? <ColaboradoresComponent 
                modal={modal} 
                results={results} 
                width={width} 
                closeModal={setModal}
                ModalFunction={setOption}
                /> : <RoleComponent modal={modal} closeModal={setModal} ModalFunction={setOption} roles={roles} width={width}/>
                
            }

        </Container>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get('/agents');
        const roles = await api.get('/roles');
        return{
            props:{
                results: response.data,
                roles: roles.data
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