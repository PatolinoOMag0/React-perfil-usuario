import Foto from "./Foto.PNG";
function Header() {

  return (
    <div>
        <h2>Matheus Lima</h2>
        <img src={Foto} alt="Foto de Matheus Lima" />
        <p>Profissão: Técnico de Insformática</p>
        <p>Formado na ETEC Maria Cristina Medeiros, 18 anos</p>
    </div>
  );
}

export default Header;