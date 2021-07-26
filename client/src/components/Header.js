import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

const Header = (props) => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return <div className="pt-4"></div>;
      case false:
        return (
          <li>
            <a href="/auth/google" className="btn btn-outline-light ">
              Login With Google
            </a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li>
              <Payments></Payments>
            </li>
            <li style={{ margin: "5px 20px 0 10px ", color: "white" }}>
              <h5>Credits: {props.auth.credits}</h5>
            </li>
            <li>
              <a href="/api/logout" className="btn btn-outline-light">
                Logout
              </a>
            </li>
          </React.Fragment>
        );
    }
  };
  return (
    <div>
      <nav className="navbar navbar-light bg-secondary  ">
        <div className="container-fluid container">
          <Link to={props.auth ? "/surveys" : "/"} className="navbar-brand ">
            <h1 className="text-white">Emaily</h1>
          </Link>
          <ul className=" list-unstyled pt-2 nav item ">{renderContent()}</ul>
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};

export default connect(mapStateToProps)(Header);
