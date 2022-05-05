import React, { useContext } from 'react';
import {
  Card, Col, Container, Row,
} from 'react-bootstrap';
import Menu from '../src/components/Menu';
import { UserContext } from '../src/Context';

export default function FormLogin() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <Menu />
      <Container className="mt-10" sm={10}>
        <Row className="mt-10">
          <Col sm={5}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={user.avatar_url} />
              <Card.Body>
                <Card.Title>
                  Usuarios
                  {' '}
                  {user.login}
                </Card.Title>
                <Row>
                  <Card.Text as={Col} sm={6}>
                    {`@${user.twitter_username}`}
                  </Card.Text>
                  <Card.Text as={Col} sm={6}>
                    Repositorios
                    {' '}
                    <br />
                    {user.public_repos}
                  </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={5}>
            <Card style={{ width: '26rem' }}>
              <Card.Body>
                <Card.Title>BIO</Card.Title>
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
