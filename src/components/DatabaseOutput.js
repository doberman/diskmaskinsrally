import React, { Component } from "react";

class DatabaseOutput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
  }

  submit = () => {
    // const db = firebase.firestore();
    // db.collection("users")
    //   .get()
    //   .then(function(querySnapshot) {
    //     var dataArray = [];
    //     querySnapshot.forEach(function(doc) {
    //       var dataobj = doc.data();
    //       dataArray.push(dataobj);
    //     });
    //     console.log("Hej DataArray", dataArray);
    //     for (var i = 0; i < dataArray.length; i++) {
    //       const html = "<li>" + dataArray[i].first_name + "</li>";
    //       console.log("Html", html);
    //       document.getElementById("output").innerHTML += html;
    //     }
    //     // const newdataArray = dataArray.map(
    //     //   object => "<li>" + object.first_name + object.last_name + "</li>"
    //     // );
    //   })
    //   .catch(function(error) {
    //     console.log("Error getting documents: ", error);
    //   });
  };
  render() {
    return (
      <div>
        <button onClick={this.submit}>Data output</button>
        <div id="output" />
      </div>
    );
  }
}
export default DatabaseOutput;
