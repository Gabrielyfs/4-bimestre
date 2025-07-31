function DescriptionTitle({titulo, descricao}) {

    // função do ler noticia
    const lerNoticia = () => {
        alert("Notiica Visualizada")
    }

    return (
        <div>
            <h1>{titulo}</h1>
            <p>{descricao}</p>

            <button onClick={lerNoticia}>Ler Noticia!</button>
        </div>
    )
}

export default DescriptionTitle