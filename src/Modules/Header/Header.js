import { setSearchItem } from "@/Libraries/redux/Slices/SearchedItems/SearchedItems";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const { push, pathname } = useRouter();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchItem(e.target.searchItem.value));
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-4">
      <div
        className="collapse navbar-collapse d-flex flex-column"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <p
              className={`nav-link ${pathname == "/" ? "text-primary" : ""}`}
              onClick={() => push("/")}
              style={{ cursor: "pointer" }}
            >
              Persons List <span className="sr-only"></span>
            </p>
          </li>
          <li className="nav-item">
            <p
              style={{ cursor: "pointer" }}
              className={`nav-link ${
                pathname == "/AddPerson" ? "text-primary" : ""
              }`}
              onClick={() => push("/AddPerson")}
            >
              Add Persons
            </p>
          </li>
        </ul>
        {pathname == "/" ? (
          <form
            className="form-inline my-2 my-lg-0 d-flex gap-4 px-lg-3 justify-content-lg-start justify-content-center"
            onSubmit={submitHandler}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="searchItem"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
