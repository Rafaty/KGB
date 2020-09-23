import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Form, Container, Row, Button, Col, Card, Image } from "react-bootstrap";
import CardEmployee from "../../components/Cards";
import { FiLogOut, FiUserPlus } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get("funcionario");
      setEmployees(response.data);
      setSearchResults(response.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const results = employees.filter((employee) =>
      employee.nome.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <div className="page">
      <Container>

        <Row noGutters={true} className="d-flex justify-content-between mb-2 rounded justify-content-xs-around" style={{ backgroundColor: "#DCDCDC" }}>
          <Image style={{ width: "130px" }} className='' src="images/logo-verde-1.jpg"></Image>
          <Row className="mr-3">
            <Link to='funcionarios-cadastrar'>
              <Button className="mt-5 mr-3 btn-sm btn-dark"> Cadastro <FiUserPlus className="" size={20} />
              </Button>
            </Link>
            <Link to='/'><FiLogOut style={{ color: "#212529"}} className="mt-5" size={30} /></Link>
          </Row>
        </Row>

        <Card>
          <Card.Header style={{ backgroundColor: "#1E1F1F", color: "white", fontStyle: "italic", fontSize: "20px" }} className="shadow p-3 mb-5 rounded">Listagem de Funcionários</Card.Header>
          <Card.Body className="shadow p-3 mb-5 bg-white rounded">
            <Col className="d-flex align-items-center flex-column">
              <Form style={{ width: "76%" }}>
                <Form.Group >
                  <Form.Control className="shadow p-3 mb-5 bg-white rounded"
                    value={searchTerm}
                    onChange={handleChange}
                    type="text"
                    placeholder="Pesquisar"
                  />
                </Form.Group>
              </Form>
              <div style={{ width: "76%" }}> 
              {searchResults.map((employee) => (
                <div className="mb-3" key={employee.id}>
                  <CardEmployee data={employee} />
                </div>
              ))}
              </div>
            </Col>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Employees;
