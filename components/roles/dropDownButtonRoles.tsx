import { DropButton, DropDownContainer, DropMenu, DropOption } from "../DropDownButton/components";
import { FiMoreVertical, FiEye, FiTrash2, FiEdit, FiRepeat } from 'react-icons/fi';
import router from "next/router";
import { useRef, useState } from "react";


export function DropDownButtonRoles( roleId: string ){

    const [ showMenu, setShowMenu ] = useState(false);
    const container = useRef(null);

    function show(ev){
        setShowMenu(true)
        ev.stopPropagation();
        document.addEventListener('click', clickOut);
    }
    function clickOut(ev: Event){
        if(container.current && !container.current.contains(ev.target)) setShowMenu(false);
        document.removeEventListener('click', clickOut);
    }

    return(
        <DropDownContainer ref={container}>
            <DropButton onClick={show} >
                <FiMoreVertical />
            </DropButton>

            {
                showMenu ? <DropMenu> 
                    <DropOption disabled={false} onClick={()=>{
                        router.push({pathname: '/cargo', query:{}})
                    }}> 
                        <FiEye />
                        <span>
                            Ver cargo
                        </span>
                     </DropOption>
                     <DropOption disabled={true}> 
                        <FiEdit /> 
                        <span>
                            Editar
                        </span>
                    </DropOption>
                    <DropOption disabled={true}> 
                        <FiTrash2 /> 
                        <span>
                            Duplicar
                        </span>
                    </DropOption>
                    <DropOption disabled={true}> 
                        <FiRepeat /> 
                        <span>
                            Excluir
                        </span>
                    </DropOption>
                </DropMenu> : null
            }
        </DropDownContainer>
    );
}