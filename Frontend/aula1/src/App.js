import './App.css';
import Contador from './components/contador/contador';
import DescriptionTitle from './components/DescriptionTitle/DescriptionTitle';
import Digitador from './components/Digitador/Digitador';
import Formulario from './components/Formulario/Formulario';
import Listagem from './components/listagem/listagem';
import TextTitle from './components/TextTitle/TextTitle';


function App() {
  return (
    <div className="App">
      Olá Mundo

      <TextTitle/>
      
      <DescriptionTitle
      titulo={"Aula de FrontEnd"}
      descricao={"Uma aula de frontend"}
      />

      <Contador />
      <Formulario/>

      <Digitador/>

      <Listagem/>
    </div>
  );
}

export default App;