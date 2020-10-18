import React, {useState} from "react";
import { Button } from "reactstrap";
import Alert from 'react-bootstrap/Alert';
import {mapToCssModules} from "reactstrap/lib/utils";
import classNames from "classnames";

const SuccessAlertDismissible = (props) => {
  const {
    heading,
      message,
      button,
    ...attributes
  } = props;

  const [show, setShow] = useState(true);

  return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>{heading}</Alert.Heading>
          <p>{message}</p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              {button}
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </>
  );
}

const Card = (props) => {
  const {
    className,
    cssModule,
    color,
    body,
    inverse,
    outline,
    tag: Tag,
    innerRef,
    ...attributes
  } = props;
  const classes = mapToCssModules(classNames(
      className,
      'card',
      inverse ? 'text-white' : false,
      body ? 'card-body' : false,
      color ? `${outline ? 'border' : 'bg'}-${color}` : false
  ), cssModule);

  return (
      <Tag {...attributes} className={classes} ref={innerRef} />
  );
};


export default SuccessAlertDismissible;
// render(<AlertDismissible />);