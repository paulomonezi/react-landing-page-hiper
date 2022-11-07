import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as C from './style'
import Logo from '../../images/footer/hiper_footer.svg'

const Footer = () => {
    return (

        <C.Footer>
            <Row>
                <Col></Col>
                <Col><img src={Logo}></img>
                </Col>
                <Col><C.H3>VALE UP</C.H3>
                    <C.Link>Sobre nós</C.Link>
                    <C.Link>Contato</C.Link>
                </Col>
                <Col><C.H3>FUNCIONALIDADES</C.H3>
                    <C.Link>Estoque</C.Link>
                    <C.Link>Financeiro</C.Link>
                    <C.Link>Fiscal</C.Link>
                    <C.Link>Relatórios</C.Link>
                    <C.Link>Vendas</C.Link>
                    <C.Link>Ver mais</C.Link>
                </Col>
                <Col><C.H3>SEGMENTOS</C.H3>
                    <C.Link>Lojas</C.Link>
                    <C.Link>Moda</C.Link>
                    <C.Link>Padarias</C.Link>
                    <C.Link>Calçados</C.Link>
                    <C.Link>Eletrônicos</C.Link>
                    <C.Link>Livrarias</C.Link>
                    <C.Link>Construção</C.Link>
                    <C.Link>Mercados</C.Link>
                    <C.Link>Serviços</C.Link>
                    <C.Link>Ver mais</C.Link>
                </Col>
                <Col><C.H3>VALE UP NEWSLETTER</C.H3>
                </Col>
                <Col></Col>
            </Row>
            <C.CopyRight><C.Span>© 2022 Vale Up Soluções - Todos os direitos reservados. | <a href=''>Política de privacidade</a> | <a href=''>Aviso de Cookies</a></C.Span></C.CopyRight>
        </C.Footer>

    )
}

export default Footer