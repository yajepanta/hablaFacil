import {React, useHistory} from "react";
import "./Nav.css";
import logoSecundary from "../assets/img/logo-secundary.png";

const Nav = (searchField, setSearchField) => {
  let history = useHistory();
  
    function goToVoto() {
      history.push("/voto");
    }
    function goToHome() {
      history.push("/");
    }

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/#">
          <img src={logoSecundary} alt="Habla Fácil" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active" onClick={goToHome()}>
              <p className="nav-link">
                Home <span className="sr-only">(current)</span>
              </p>
            </li>
            <li className="nav-item" onClick={goToVoto()}>
              <p className="nav-link">
                Elecciones 2021
              </p>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/hablaFacil">
                Congreso
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="hablaFacil">
                Medidas sanitarias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">
                Multas
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Buscar"
              value={searchField} onChange={(e)=>setSearchField(e.target.value)}
            />
            {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button> */}
          </form>
        </div>
      </nav>
  );
};

export default Nav;
