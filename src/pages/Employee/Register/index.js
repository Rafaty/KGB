import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Card,
  Form,
  Row,
  Image,
} from "react-bootstrap";
import api from "../../../services/api";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { Alert } from "react-bootstrap";

import EmployeeSchema from "../../../services/Validation/EmployeeValidation";

const Register = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      nome: name,
      cpf: cpf,
    };
    try {
      var isValid = await EmployeeSchema.isValid(data);

      await api.post("funcionario", data);

      setShow(true);
      setSuccess(true);
      setCpf("");
      setName("");
    } catch {
      setShow(true);
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="page">
        <Container>
          <Row
            noGutters={true}
            className="d-flex justify-content-between mb-4 rounded"
            style={{ backgroundColor: "#DCDCDC" }}
          >
            <Image
              style={{ width: "150px" }}
              src="images/logo-verde.png"
            ></Image>
            <Link to="/funcionarios">
              <FiLogOut
                style={{ color: "#212529" }}
                className="mr-5 mt-5 mb-3"
                size={35}
              />
            </Link>
          </Row>

          {show ? (
            <Alert
              variant={success ? "success" : "danger"}
              onClose={() => setShow(false)}
              dismissible
            >
              <Alert.Heading>
                {success ? "Cadastro efetuado com sucesso!" : "Ocorreu um erro"}
              </Alert.Heading>
            </Alert>
          ) : (
            <></>
          )}

          <Card>
            <Row
              noGutters={true}
              className="d-flex justify-content-between mt-5 mb-5 mr-5 rounded"
            >
              <Col
                className="mt-5"
                md={6}
                xs={12}
                style={{ textAlign: "center" }}
              >
                <h1>Cadastro</h1>
                <h3>Gerenciamento de Funcionários</h3>
              </Col>
              <Col md={6} xs={12}>
                <Card className="shadow p-3 mb-5 bg-white rounded">
                  <Card.Header>
                    <h4>Novo Funcionario</h4>
                  </Card.Header>
                  <Card.Body className="shadow p-3 mb-5 bg-white rounded">
                    <Form onSubmit={handleRegister}>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                          placeholder="Nome do Funcionário"
                        />
                      </Form.Group>

                      <Form.Group>
                        <Form.Control
                          type="text"
                          value={cpf}
                          onChange={(e) => {
                            setCpf(e.target.value);
                          }}
                          placeholder="CPF"
                        />
                      </Form.Group>
                      <Button className="w-100" variant="dark" type="submit">
                        Cadastrar
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Card>
        </Container>
      </div>
    </>
  );
};
export default Register;
