import Cabecalho from "@/componets/Cabecalho";
import CustomImputLabel from "@/componets/CustomImputLabel";
import CustomTextArea from "@/componets/CustomTextAreaLabel";
import Rodape from "@/componets/Rodape";
import axios from "axios";
import { useEffect, useState } from "react";

export default function cadastro() {
  const [dadosAnimais, setDadosAnimais] = useState({});

  //Função que efetua POST para API
  function handleSalvar() {
    axios.post("https://localhost:7017/api/Animais/Inserir", dadosAnimais)
      .then((res) => console.log(res))
  }

  function handleChange(e) {
    console.log(e.target.value)
    console.log(e.target.id)

    dadosAnimais[e.target.id] = e.target.value

    setDadosAnimais(dadosAnimais)

    console.log(dadosAnimais)
  }

  return (
    <div className="cardTemp h-100">
      <Cabecalho></Cabecalho>
      <div className="container-fluid mt-4 cardTemp h-100">
        <div className="row">
          <CustomImputLabel
            texto="Url da Imagem"
            id="Imagem"
            col="8"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Nome científico"
            id="sciNome"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Nome coloquial"
            id="nome"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Reino"
            id="reino"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Filo"
            id="filo"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Classe"
            id="aClass"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Órdem"
            id="ordem"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Família"
            id="fam"
            col="4"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Gênero"
            id="gen"
            col="6"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomImputLabel
            texto="Espécie"
            id="espec"
            col="6"
            onChange={handleChange}
          ></CustomImputLabel>
          <CustomTextArea
            texto="Descrição"
            id="descricao"
            col="12"
            onChange={handleChange}
          ></CustomTextArea>
        </div>
        <div className="row cardTemp mt-4">
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleSalvar}>
              Salvar
            </button>
          </div>
        </div>
      </div>
      <Rodape></Rodape>
    </div>
  );
}
