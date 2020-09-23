import React, { useState, useEffect } from 'react';
import { Button, Container, Col, Card, Form, Row, Image } from 'react-bootstrap';
import api from '../../../services/api';
import { useHistory, useRouteMatch, Link } from 'react-router-dom';
import { FiLogOut} from "react-icons/fi";

const Edit = () => {

    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');    
    const history = useHistory();
    const {params} = useRouteMatch();

    useEffect(() => {
        const fetchData = async () =>{
           const response = await api.get(`funcionario/${params.id}`)
           setName(response.data.nome)
           setCpf(response.data.cpf)
           console.log(response.data);
        }
        fetchData();
      
    }, [])

    const handleEdit= async (e) => {

        e.preventDefault();
        const data = {
            nome: name,
            cpf: cpf
        }
        try {
            await api.put(`funcionario/${params.id}`, data);
            alert('SUCESSO')
            history.push('/funcionarios');
            
        } catch {
            alert('ERRO')
        }

    }

    return (
        <div className='page' >

            <Container>

                <Row noGutters={true} className="d-flex justify-content-between mb-4 rounded" style={{backgroundColor:"#DCDCDC"}}>
                    <Image style={{width:"150px"}} src="https://i.ibb.co/VgVg7ST/logo-verde.png"></Image>
                    <Link to='/'><FiLogOut style={{ color: "#212529" }} className="mr-5 mt-5 mb-3" size={35} /></Link>                    
                </Row>

                <Row>
                    <Col md={6} xs={12} style={{textAlign:"center"}}>
                        <h1>Editando</h1>
                        <h3>Gerenciamento de Funcionários</h3>

                    </Col>
                    <Col md={6} xs={12}>
                        <Card>
                            <Card.Header>
                                <h4>Dados do Funcionario</h4>
                            </Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleEdit}>
                                    <Form.Group>
                                        <Form.Control type="text" value={name}
                                            onChange={(e) => { setName(e.target.value) }}
                                            placeholder="Nome do Funcionário" />

                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Control type="text" value={cpf}
                                            onChange={(e) => { setCpf(e.target.value) }}
                                            placeholder="CPF" />
                                    </Form.Group>

                                    <Button className='w-100' variant="primary" type="submit">
                                        Salvar Alterações
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
export default Edit;