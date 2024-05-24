import lmLogo from './assets/logow.png'
import pdfFile from './assets/Taller_La gran comision.pdf'
import './App.css'


function App() {
  return (
    <>
      <div>
        <img src={lmLogo} className="logo" alt="la mision logo" />
        <h3 className="subtitle">Jornada evangelistica</h3>
        <h1>La gran comision</h1>
        <a href={pdfFile} download="taller.pdf">
          <button className="boton">Descargar material</button>
        </a>
      </div>
    </>
  );
}

export default App
