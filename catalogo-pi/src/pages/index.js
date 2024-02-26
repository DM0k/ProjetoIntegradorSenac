import CardAnimal from "@/componets/CardAnimal";
import axios from "axios";


export default function Home() {

  const [listaAnimais, setListaAnimais] = useState([]);

  axios.get('https://')

  return (
    <div className="container-fluid fundo">
      <div className="row">
        <div className="col-3">
          {
          listaAnimais.map((dados, index) => <CardAnimal 
          Imagem={dados.imagem}  
          sciName={dados.sciName} 
          nome={dados.nome}
          reino={dados.reino}
          filo={dados.filo}
          aClass={dados.aClass}
          ordem={dados.ordem}
          fam={dados.fam}
          gen={dados.gen}
          espec={dados.espec}
          descricao={dados.descricao} ></CardAnimal>
          )
          }
        </div>
        
      </div>
    </div>
  );
}
