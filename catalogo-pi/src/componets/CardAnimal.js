import Image from "next/image";
import { useState } from "react";

export default function CardAnimal(props) {
    return (
        <div className="card">
            <div className="card-body cardTemp">
                <Image src={props.Imagem} width={"400"} height={"357"}></Image>
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some example text. Some example text.</p>
                <a href="#" className="card-link">Card link</a><br></br>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}