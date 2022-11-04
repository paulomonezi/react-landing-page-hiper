import React from 'react'
import * as C from './styles'
import Logo from '../../images/logo/logo.png'
import { Row, Col } from 'react-bootstrap'

const Header = () => {
    return (
        <C.Header>
            <Row>
                <Col>
                </Col><Col>
                    <C.Nav>
                        <C.Ul>
                            <C.Li>
                                <C.A href='#'>Home</C.A>
                            </C.Li>
                            <C.Li>
                                <C.A href='#'>Quem somos</C.A>
                            </C.Li>
                            <C.Li>
                                <C.A href='#'>Fale conosco</C.A>
                            </C.Li>
                        </C.Ul>
                    </C.Nav>
                </Col>
            </Row>
            <Row>
                <Col>
                    <C.DivFlexEnd>
                        <C.Img src={Logo}></C.Img>
                    </C.DivFlexEnd>
                </Col>
                <Col></Col>
                <Col></Col>
            </Row>

        </C.Header>
    )
}

export default Header