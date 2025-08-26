import { useState } from "react";

// exemplo de useState
function Contador() {

    const [contador, setContador] = useState(0)

    // arrow function
    const incrementar = () => {
        setContador(contador + 1)
    }

    return (
        <div>

            {/* javascript -- `Contador ${contador}` */}
            <h1>Contador: {contador} </h1>
            {/* onclink={() => incrementar()} */}
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;