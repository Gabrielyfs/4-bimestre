import { useState } from "react"

function Digitador() {
    
    // const [valor, setValor]
    const [digitador, setDigitador] = useState(0)

    // useState ( tipo )
    const handleAtualizar = (evento) => {
        setDigitador(evento.target.value)
    }

    
    return(
        <>
            <div>
                <input type="text" onChange={handleAtualizar} placeholder="Digite o digito"/>
            </div>
        </>
    )
}

export default Digitador