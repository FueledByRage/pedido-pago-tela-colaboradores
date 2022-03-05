import { RolesContainer, StyledCheckbox,RoleDataContainer, RoleDataSection } from "../components/roles/Components";
import { TableRow, TableCell, TableHead } from "../components/roles/RolesTable";
import { FiArrowLeft } from 'react-icons/fi';
import api from './api/axios';
import { useEffect } from "react";

type permission = {
    role: string,
    permissions: Array<string>
}   


export default function Roles({ error, role, message }){

    function hasPermission(role2find: string, permission: string ): boolean{
        let hasPermission = null
        role.grouprules.forEach( (element: permission)  => {
            if(element.role == role2find){
                hasPermission = element.permissions.includes(permission);
            }
        });
        return hasPermission || false;
    }
    return(
        <>
            <p className="title"> <FiArrowLeft />  Cargos e permissões</p>
            <RolesContainer>
                <p className="title">Dados do Cargo</p>
                
                <RoleDataSection>
                    <RoleDataContainer>
                        <label>
                            Departamento
                        </label>
                        {role.department}
                    </RoleDataContainer>
                    <RoleDataContainer>
                        <label>
                            Cargo
                        </label>
                        {role.name}
                    </RoleDataContainer>
                </RoleDataSection>
                <p className="title">Listagem de permissões</p>
                <div>
                        <TableHead>
                            <TableCell>Cargo</TableCell>
                            <TableCell>Ler</TableCell>
                            <TableCell>Editar</TableCell>
                            <TableCell>Excluir</TableCell>
                        </TableHead>
                            <TableRow>
                                <TableCell> Pedidos </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Pedidos', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Pedidos', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Pedidos', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Clientes </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Clientes', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Clientes', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Clientes', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Marketing </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Marketing', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Clientes', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Clientes', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Colaboradores </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Colaboradores', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Colaboradores', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Colaboradores', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Cargos e permissões </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Cargos e permissões', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Cargos e permissões', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox  type='checkbox' marked={true} checked={hasPermission('Cargos e permissões', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Catálogo </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Catálogo', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Catálogo', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Catálogo', 'delete')}/> </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell> Financeiro </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Financeiro', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Financeiro', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Financeiro', 'delete')}/> </TableCell>

                            </TableRow>
                            <TableRow>
                                <TableCell> Websites e lojas fisicas </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Websites e lojas fisicas', 'read')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Websites e lojas fisicas', 'write')}/> </TableCell>
                                <TableCell> <StyledCheckbox type='checkbox' marked={true} checked={hasPermission('Websites e lojas fisicas', 'delete')}/> </TableCell>

                            </TableRow>
                </div>
            </RolesContainer>
        </>
    );
}

export async function getServerSideProps({ query }){
    try {
        const response = await api.get(`/role/${query.roleId}`);
        return{
            props:{
                role: response.data.role
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