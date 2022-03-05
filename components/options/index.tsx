import { Button } from "./button";
import { Items } from "./items";


export default function Options({ options, selected, click }){
    return(
        <Items>
            {
                options.map(( option: string, index: number)=>{
                    return(
                        <Button
                            key={index}
                            selected={selected == option}
                            onClick={()=> click(option)}
                        >
                            {option}
                        </Button>
                    )
                })
            }
        </Items>
    );
}