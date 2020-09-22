import React, { useState, useEffect } from "react";
import api from "../../services/api";
import { Form, Container, Row, Button, Col } from "react-bootstrap";
import CardEmployee from "../../components/Cards";
import { FiLogOut, FiUserPlus } from "react-icons/fi";

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
        <Row className="d-flex justify-content-end mb-5">
          <Button className="mt-5">
            Cadastro <FiUserPlus className="ml-3" size={20} />
          </Button>
          <FiLogOut className="ml-5 mt-5" size={30} />
        </Row>

        <Form>
          <Form.Group>
            <Form.Control
              value={searchTerm}
              onChange={handleChange}
              type="text"
              placeholder="Pesquisar"
            />
          </Form.Group>
        </Form>
        <Col className="d-flex align-items-center flex-column">
          {searchResults.map((employee) => (
            <div className="mb-3" key={employee.id}>
              <CardEmployee data={employee} />
            </div>
          ))}
        </Col>
      </Container>
    </div>
  );
};

export default Employees;
