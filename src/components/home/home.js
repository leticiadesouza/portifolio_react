// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o componenet UserProfile
import UserProfile from '../user_profile/user_profile'
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';
import '../../index.css';

const Home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={8} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Lattes</b></p>
            <p>"link pro lattes"</p>
            <br/>
            <p><b>Linkedin</b></p>
            <p>"link pro linkedin"</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
   

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Ser linda"
                    company="linda.com"
                    description="descrição sobre o projeto"
                    avatar={company_avatar}
        />
        {/* <Experience title="Volunteer Developer and Monitor"
                    company="Pyladies"
                    description="descrição sobre as pyladies"
                    avatar={company_avatar2}                    
        />  */}
    </Col>
  </Row>
);

export default Home;