import React from "react";
import api from "../../services/api";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import {Link, useHistory} from 'react-router-dom';

const CardEmployee = ({ data }) => {
    
  const history = useHistory();

  const handleDelete = async () => {
    try {
      await api.delete(`funcionario/${data.id}`);
      alert("SUCESSO");
      history.push('/');
      history.push('/funcionarios');

    } catch (error) {
      alert("ERRO");
      
    }
  };

  return (
    <div>
      <Card className="shadow p-3 bg-white rounded" style={{ width: "100%" }}>
        <Container>
          <Row>
            <Col md={2}>
              <Image
                className="mt-3"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Dl-88Q4B96lp3d6iBS9GZpJmtapLCiMZYg&usqp=CAU"
                width={75}
                height={75}
                roundedCircle
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title style={{ fontSize: 25 }}>{data.nome}</Card.Title>
                <Card.Text style={{ fontSize: 16 }}>{data.cpf}</Card.Text>
              </Card.Body>
            </Col>
            <Col className="d-flex align-items-end mb-4" md={2}>
              <Link to={`funcionarios-editar/${data.id}`}><FiEdit className="mr-2" size={20} color={"#2C7CF2"} /></Link>
              <FiTrash2 style={{cursor: "pointer"}}onClick={handleDelete} size={20} color={"#FF0202"} />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default CardEmployee;
