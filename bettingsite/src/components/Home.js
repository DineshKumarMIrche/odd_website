import React from 'react';


function Home() {
  return (
    <>
      <div className="container">
        <div className="col rounded bg-white" style={{ height: "185px" }}>
          <h3>Match No. 17 (A vs B)</h3>
          <p>More details about match</p>
          <ul className="nav nav-pills flex-column" style={{ float: "left" }}>
            <li className="nav-item ">
              <a className="nav-link " href="/">Team 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Team 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Draw</a>
            </li>
          </ul>

          <div className="nav flex-column" style={{ float: "right", marginRight: "10px", marginTop: "8px" }}>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px", backgroundColor: "red" }}>odds1</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px", backgroundColor: "red" }}>odds2</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "0px", backgroundColor: "red" }}>odds3</button>
          </div>

          <div className="nav flex-column" style={{ float: "right", marginRight: "5px", marginTop: "8px" }}>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px" }}>odds1</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px" }}>odds2</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "0px" }}>odds3</button>
          </div>
        </div>
        <hr className="d-sm-none" />
      </div>
      <div className="container">
        <div className="col rounded bg-white" style={{ height: "185px" }}>
          <h3>Match No. 17 (A vs B)</h3>
          <p>More details about match</p>
          <ul className="nav nav-pills flex-column" style={{ float: "left" }}>
            <li className="nav-item ">
              <a className="nav-link " href="/">Team 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Team 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Draw</a>
            </li>
          </ul>

          <div className="nav flex-column" style={{ float: "right", marginRight: "10px", marginTop: "8px" }}>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px", backgroundColor: "red" }}>odds1</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px", backgroundColor: "red" }}>odds2</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "0px", backgroundColor: "red" }}>odds3</button>
          </div>

          <div className="nav flex-column" style={{ float: "right", marginRight: "5px", marginTop: "8px" }}>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px" }}>odds1</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "7px" }}>odds2</button>
            <button type="button" className="btn btn-primary btn-sm" style={{ marginBottom: "0px" }}>odds3</button>
          </div>
        </div>
        <hr className="d-sm-none" />
      </div>
    </>
  );
}


export default Home;










