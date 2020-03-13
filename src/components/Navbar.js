import React from "react";
import { NavLink } from "react-router-dom";
import payload from "../Utils/playload";
import SearchIcon from '@material-ui/icons/Search';
import Logo from "../img/Airbnb-Logo.png";


//fucntion component
function Navbar() {
  const isAuthenticated = localStorage.getItem("clone") !== null;

  return (
    <nav 
    className="navbar navbar-expand-lg navbar-light bg-white">

<NavLink className="navbar-brand" to="/">
          <img src={Logo} alt=""  style={{ width: 30 }}/>
       </NavLink>
       

<form>
            <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span>
    <SearchIcon/>
    </span>
     
    </div>
    <input type="text" className="form-control" placeholder="Search"/>
  </div>
  </form>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">

    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">

            {isAuthenticated ? (
              <>

<li className="nav-item">
                  <NavLink className="nav-link" to="/house/new">
                    Agregar anuncio
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/profile">
                    Hola {payload().first_name}
                  </NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link" to="/logout">
                    Cerrar sesión
                  </NavLink>
                </li>
              </>
            ) : (
              <>



<li className="nav-item">
                  <NavLink className="nav-link" to="">
                   Ayuda
                  </NavLink>
                </li>
               
                <li className="nav-item">
                  <NavLink className="nav-link" to="/signup">
                    Regístrate
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link" to="/login">
                   Iniciar sesión
                  </NavLink>
                </li>
              </>
            )}

          </ul>
       
      </div>

</nav>
  );
}

export default Navbar;