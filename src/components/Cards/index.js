import React from "react";
import api from "../../services/api";
import { Card, Container, Col, Row, Image } from "react-bootstrap";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const CardEmployee = ({ data }) => {
    
  const handleDelete = async () => {
    try {
      await api.delete(`funcionario/${data.id}`);
    } catch {
      alert("ERRO");
    }
  };

  return (
    <div>
      <Card style={{ width: "50rem" }}>
        <Container>
          <Row>
            <Col md={2}>
              <Image
                className="mt-3"
                src="https://agregadorblog.files.wordpress.com/2014/09/5d025-confira2bos2b52bmotivos2bpara2bnamorar2bum2bhomem2bfeio.jpg"
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
              <FiEdit className="mr-2" size={20} color={"#2C7CF2"} />
              <FiTrash2 onClick="" size={20} color={"#FF0202"} />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default CardEmployee;
