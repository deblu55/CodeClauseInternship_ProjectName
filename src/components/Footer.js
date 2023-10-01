import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer1">
          <div className="container1">
            <span  style={{color:"white",gap:"10",marginRight:"10px"}}>Made with <i className="fa fa-heart heart"/> by</span><a href="https://www.linkedin.com/in/debo55/">Debleena Roy</a>
          </div>
        </footer>
      </div>
    );
  }
}
