import { Link, Outlet} from "react-router-dom";
const About = () => {
    return(
<div>
        <h1>About Page</h1>

        <div className="row">
          {/*Sidebar*/}
          <div className="col-3 border-end border-warning">
            <Link className="d-block" to="/about/team">
              About Team
            </Link>
            <Link className="d-block" to="/about/company">
              About Company
            </Link>
          </div>
          {/*Content*/}
          <div className="col-9">
          <Outlet />
            </div>
            </div>
            </div>
)}
export default About;