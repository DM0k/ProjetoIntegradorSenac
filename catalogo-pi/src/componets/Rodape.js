import Link from "next/link";

export default function Rodape(props) {
    return(
        <footer className="py-3 my-4 ">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><Link href="/" className="nav-link px-2 text-muted">Home</Link></li>
      <li className="nav-item"><Link href="/cadastro" className="nav-link px-2 text-muted">Cadastro</Link></li>
    </ul>
    <p className="text-center text-muted">Autoria - DM, 2024</p>
  </footer>
    )
}