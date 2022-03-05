import { Categorie, Categories, ContainerRow, Modal } from "../EmployeesMobile/components";
import { FiEye, FiTrash2, FiX } from 'react-icons/fi';
import router from 'next/router';

export function ModalAction({ on, closeModal, type, id }){
    if(!on) return(
        <></>
    );

    return(
        <Modal onClick={()=>closeModal(false)} >
            
            <Categories>
                <ContainerRow>
                    <span className="title">Actions</span>
                    <FiX />
                </ContainerRow>

                    <Categorie onClick={() => {
                        type == 'colaborador' ? 
                        router.push(`/colaborador/?employeeId=${id}`) :
                        router.push(`/cargo/?roleId=${id}`)
                    }}>
                        <FiEye />
                        <span>
                            {
                                `Ver ${type}`
                            }
                        </span>
                    </Categorie>
                    <Categorie onClick={ () =>{}} >
                        <FiTrash2 />
                        <span>
                            Excluir
                        </span>
                    </Categorie>
            </Categories>
        </Modal>
    );
}