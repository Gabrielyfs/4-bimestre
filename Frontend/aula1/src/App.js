import './App.css';
import DescriptionTitle from './components/DescriptionTitle/DescriptionTitle';
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

      <DescriptionTitle
      titulo={"Aula de BackEnd"}
      descricao={"Uma aula de BackEnd"}
      />
    </div>
  );
}

export default App;