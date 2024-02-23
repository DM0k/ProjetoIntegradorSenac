import Image from "next/image";
import { useState } from "react";

export default function CardAnimal(props) {
    return (
        <div className="card">
            <div className="card-body">
                <Image src={"/assets/blue-whale.jpg"} width={"286"} height={"388"}></Image>
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some example text. Some example text.</p>
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    )
}