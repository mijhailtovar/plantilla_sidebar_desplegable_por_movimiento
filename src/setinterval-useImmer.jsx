import { useState } from "react";
import { useImmer } from "use-immer";

export default function Timer(){
    const [value, updateValue] = useImmer(0);
    //let value = 0;

    function printNumber(from, to){
        updateValue((draft) => {
            draft = value++;
        });
        from ++;
        alert("aqui");
        if(value == to){
            clearInterval(timer);
            alert("para");
        }
    }

    let timer = setInterval(printNumber, 1000, 10, 20);

    return(
        <div>{value}</div>
    );
}