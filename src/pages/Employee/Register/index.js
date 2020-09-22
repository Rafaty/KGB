import React, {useState} from 'react';
import { Button, Container, Col,Card, Form, FormGroup, Row } from 'react-bootstrap';
import api from '../../../services/api';

const Register = () => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');


    const handleRegister = async (e) => {

        e.preventDefault();
        const data = {
            nome: name,
            cpf: cpf
        }
        try {
            await api.post('funcionario', data);
            alert('SUCESSO')
        } catch  {
            alert('ERRO')
        }

    }

    return (
        <div className="container d-flex 
        justify-content-center align-self-center">
            
            <Container className='mt-5'>
                <Row className='justify-content-md-center'>
                    <Col md={6} xs={12}>
                        <h1>
                            Cadastro
                        </h1>
                        <h3>
                            Gerenciamento de Funcionários
                        </h3>
                    
                    </Col>
                    <Col md={6} xs={12}>
                    <Card>
                        <Card.Header>
                            <h4>
                                Novo Funcionario
                            </h4>
                        </Card.Header>
                            <Card.Body>
                        <Form onSubmit={handleRegister}>
                            <Form.Group>
                                <Form.Control type="text" value={name} 
                                onChange={(e)=>{setName(e.target.value)}} 
                                    placeholder="Nome do Funcionário" />
                                
                            </Form.Group>

                            <Form.Group>
                                <Form.Control type="text" value={cpf} 
                                onChange={(e)=>{setCpf(e.target.value)}}
                                placeholder="CPF" />
                            </Form.Group>
                            
                            <Button className='w-100' variant="primary" type="submit">
                                Cadastrar
                            </Button>
                        </Form>
                        </Card.Body>
                    </Card>
                    </Col>

                </Row>


                
            </Container>
        </div>

    )
}
export default Register;