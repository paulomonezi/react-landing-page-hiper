import React from 'react'
import * as C from './styles'
import { Row, Col } from 'react-bootstrap'

const Main = () => {
    return (
        <C.Section>
            <Row>
                <Col></Col>
                <Col xs={3}><C.H1>Segmentos que a Hiper atende </C.H1></Col>
                <Col xs={1}><C.Separator></C.Separator></Col>
                <Col xs={4}><C.Span>O Hiper foi desenvolvido para auxiliar o micro e pequeno varejista a gerir melhor o seu negócio. De mercados à lojas de roupas, o sistema é indicado para mais de 30 segmentos.</C.Span></Col>
                <Col></Col>
            </Row>
        </C.Section>
    )
}

export default Main