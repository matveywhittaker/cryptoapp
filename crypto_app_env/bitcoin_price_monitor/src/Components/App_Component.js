import React, { Component } from 'react';


class App_Component extends Component {


 //Place holder for other compoenets
  render() {

    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    //Must be in one element
    return (

      <div>
        <Welcome name = {"Matt"} />

      </div>






    );

  }


}





export default App_Component;
