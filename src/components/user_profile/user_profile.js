// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// importando a foto do usuário (note que depois podemos usa-la facilmente chamando apenas avatar ao invés do caminho completo)
import avatar from '../../images/avatar.png';

const UserProfile = () => (
  <Card style={{backgroundColor:'#E0DFD5'}}>
      <Row>
        <Col s={8} m={8} offset="s2 m2">
          <img src={avatar} className="circle responsive-img" />
        </Col>
      </Row>
      <Row className="center-align">
        <h5 >Elisa Gatinha Fazzolino</h5>
        <p className="grey darken-2 white-text">Cientista Ambiental</p>
        <p className="grey darken-2 white-text">(Quase) </p>
      </Row>
  </Card>
);

export default UserProfile;