import { Categorie, Categories, ContainerColumn, ContainerRow, Modal } from "./components";
import { FiX } from 'react-icons/fi';

export function ModalCategory({ on, closeModal, OptionFunction }){
    if(!on) return(
        <></>
    );


    return(
        <Modal onClick={()=>closeModal(false)} >
            <Categories>
                <ContainerRow>
                    <span className="title">Categorias</span>
                    <FiX />
                </ContainerRow>

                    <Categorie onClick={() => OptionFunction('Colaboradores')}>
                        Colaboradores
                    </Categorie>
                    <Categorie onClick={ () => OptionFunction('Cargos')} >
                        Cargos
                    </Categorie>
            </Categories>
        </Modal>
    );
}