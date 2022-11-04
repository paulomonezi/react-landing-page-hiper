import React from 'react'
import * as C from './styles'
import { Row, Col } from 'react-bootstrap'
import lojas from '../../images/segments/lojas.png'
import vestuario from '../../images/segments/vestuario.png'

const Segments = () => {
    return (
        <C.Section>
            <Row >
                <Col><C.Card><C.Img src={lojas} /><C.Span>Lojas</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
            </Row>
            <Row>
                <Col><C.Card><C.Img src={lojas} /><C.Span>Lojas</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
                <Col><C.Card><C.Img src={vestuario} /><C.Span>Moda</C.Span></C.Card></Col>
            </Row>
        </C.Section>
    )
}

export default Segments