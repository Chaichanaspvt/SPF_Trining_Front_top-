import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React ,{useState} from "react";
import Lib ,{Log} from './Module/Lib'
function App() {
  const [Img,SetImg] = useState('https://itp1.itopfile.com/ImageServer/3bd0d5b5c25852dc/0/0/iTopPlus1087486370377.jpg')

  const onInitialClick = () => {
    SetImg('https://itp1.itopfile.com/ImageServer/d271e9d835e66d73/0/0/ST-VTbanner21z-z264503491302.webp')
  }

  return (
    <>
      <Container >
        <Row className="Main">
          <Col xs={12} md={8}>
            <img className='display'
            src={Img}
            ></img>

          </Col>
          <Col  xs={6} md={4}>
            <br/>
            <div>
              <Button className='A' onClick={() =>Log("Test")}> Initialize </Button>
            </div>
            <br/>
            <div>
              <Button className='A' >Open Image</Button>
            </div>
            <br/>
            <div>
              <Button className='A' >Run </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
