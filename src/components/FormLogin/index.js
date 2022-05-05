import React, { useContext } from 'react';
import {
  Form, Row, Button,
} from 'react-bootstrap';
import { UserContext } from '../../Context';

export default function FormLogin() {
  const user = useContext(UserContext);

  return (
    <Form>
      <Row className="justify-content-center">
        <Row sm={12} className="my-1">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control id="inlineFormInputName" placeholder="Jane Doe" />
        </Row>
        <Row xs="auto">
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              const name = document.querySelector('#inlineFormInputName');
              user.login(name.value);
            }}
          >
            Submit

          </Button>
        </Row>
      </Row>
    </Form>
  );
}
