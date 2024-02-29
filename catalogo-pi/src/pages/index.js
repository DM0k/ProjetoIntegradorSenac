import CardAnimal from "@/componets/CardAnimal";
import { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "@/componets/Cabecalho";
import Rodape from "@/componets/Rodape";


export default function Home() {

  const [listaAnimais, setListaAnimais] = useState([]);



  useEffect(() => {
    axios.get('https://localhost:7017/api/Animais/')
      .then(res => setListaAnimais(res.data));
  }, [])

  return (

    <><Cabecalho></Cabecalho>
      <div className="container-fluid fundo">

        <div className="row">
          <div className="col-3">
            {
              listaAnimais.map((dados, index) => <CardAnimal key={index}
                Imagem={dados.imagem}
                sciName={dados.sciNome}
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
        <Rodape></Rodape>
      </div>
      
    </>
  );
}
