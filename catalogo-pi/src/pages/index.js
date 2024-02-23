import CardAnimal from "@/componets/CardAnimal";


export default function Home() {
  return (
    <div className="container-fluid fundo">
      <div className="row">
        <div className="col-3">
          <CardAnimal Imagem="/assets/blue-whale.jpg"></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal Imagem="/assets/mantis_shwrimp.png"></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal Imagem="/assets/anemona.png"></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal Imagem="/assets/moreia_verde.png"></CardAnimal>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <CardAnimal Imagem="/assets/nautilus.png"></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
        <div className="col-3">
          <CardAnimal></CardAnimal>
        </div>
      </div>
    </div>
  );
}
