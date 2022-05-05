import React, { useContext } from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import Menu from '../src/components/Menu';
import { UserContext } from '../src/Context';

export default function FormLogin() {
  const { user } = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <Menu />
      <Container className="mt-10" sm={10}>
        <Row className="mt-10">
          <Col sm={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                  {user.bio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Text>
                  {user.bio}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
