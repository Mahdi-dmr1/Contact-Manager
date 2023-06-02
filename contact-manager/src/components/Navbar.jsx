import SearchContact from "./contact/searchContact";
import { useLocation } from "react-router";
import {PURPLE,BACKGROUND} from '../helpers/colors';

const Navbar = () => {

  const location = useLocation();

    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
        style={{backgroundColor: BACKGROUND}}>
      <div className="container">
        <div className="row w-100">
          <div className="col">
            <div className="navbar-brand">
               
               وب اپلیکیشن مدیریت{"  "}
               <span style={{ color: PURPLE }}>مخاطبین</span>
               {" "} <i className="fa fa-user" style={{color: PURPLE}} /> 
            </div>
          </div>
          {location.pathname === "/contacts" ? (
            <div className="col">
              <SearchContact/>
            </div>
          ) : null}
        </div>
      </div>

      
    </nav>
    );
};

export default Navbar;