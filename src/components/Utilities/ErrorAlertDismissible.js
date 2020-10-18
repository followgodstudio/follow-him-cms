import React, {useState} from "react";
import { Button } from "reactstrap";
import Alert from 'react-bootstrap/Alert';

function ErrorAlertDismissible() {
  const {
    heading,
    message,
    button,
    ...attributes
  } = props;

  const [show, setShow] = useState(true);

  if (show) {
    return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>{heading}</Alert.Heading>
          <p>{message}
          </p>
        </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorAlertDismissible;