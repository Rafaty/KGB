import {Alert} from "react-bootstrap"
import React from "react";


function AlertDismissibleExample({show,color, onClick,message}) {
   
  
    if (show) {
      return (
        <Alert variant={color} onClose={onClick} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            {message}
          </p>
        </Alert>
      );
    }
    return 
  }

  export default AlertDismissibleExample;