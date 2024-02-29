import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();

  const formId = 11;

  return (
    <div className="container my-5 py-2">
      <div className="row justify-content-center">
        <div className="col-md-6 mx-auto">
          <h2 className="display-4 fw-bold text-center mb-4">
            Enter Your <span className="text-primary">Data</span>
          </h2>
          <form
            className="p-4 mb-5 border rounded shadow bg-light"
            onSubmit={(e) =>
              handleFormSubmit(e, { name, email, phone }, formId)
            }
          >
            <div className="form-group mb-4">
              <label htmlFor="nameInput">Name: </label>
              <input
                type="text"
                className="form-control border border-bottom"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group mb-4 py-2">
              <label htmlFor="emailInput">Email: </label>
              <input
                type="email"
                className="form-control border border-bottom"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="floatingNumber">Phone Number: </label>
              <input
                type="number"
                className="form-control border border-bottom"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <button
              className="btn btn-primary btn-block w-100"
              type="submit"
              style={{ hover: { backgroundColor: "#0d6efd" } }}
            >
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;