import Image from "next/image";
import { useState } from "react";
import CustomCheckBox from "./CustomCheckBox";

export default function CardAnimal(props) {
    return (
        <div className="card">
            <div className="card-body cardTemp">
                <img src={props.Imagem} width={"100%"} height={"100%"}></img>
                <h6 className="sciName">{props.sciName}</h6>
                <h4 className="card-title">{props.nome}</h4> 
                <h6>Reino: {props.reino}</h6>
                <h6>Filo: {props.filo}</h6>
                <h6>Classe: {props.aClass}</h6>
                <h6>Órdem: {props.ordem}</h6>
                <h6>Família: {props.fam}</h6>
                <h6>Gênero: {props.gen}</h6>
                <h6>Espécie: {props.espec}</h6><br></br>
                <p className="card-text">{props.descricao}</p>
            </div>
        </div>
    )
}