import { useState } from 'react';

import '../styles/counter.scss'
export function Counter(){

    const [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter + 1);
    }

    return(
        <div className="teste"> 
         <p> Minha primeiro fofura </p>

         <div class = "sphere a">A {counter+1} </div>
         <div class = "sphere b">B {counter} </div>
         <div class = "sphere c">C {counter} </div>
         <div class = "sphere d">D {counter} </div>
            <h2> {counter} </h2>
           
            <button type="button" onClick={increment}>
                Increment
            </button>
        </div>
    )
}