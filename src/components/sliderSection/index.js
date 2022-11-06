import React from 'react'
import * as C from './styles'
import { Row, Col } from 'react-bootstrap'
import vendas from '../../images/slider_section/vendas.png'


const SliderSection = () => {
    return (
        <C.Section>
            <C.Container>
                <Col></Col>
                <Col>
                    <C.LeftContainer>
                        <C.H3>Gestão mais simples para pequenos negócios</C.H3>
                        <C.P>Gestão mais simples para pequenos negócios
                            Descomplique a rotina administrativa da sua loja com o Hiper. Um sistema completo para realizar vendas, controlar estoque e emitir notas fiscais. Tudo o que o seu negócio precisa para continuar crescendo!</C.P>
                        <C.Link href=''>Ver todas as funcionalidades</C.Link>
                        <C.Button>Experimente grátis</C.Button>
                    </C.LeftContainer>
                </Col>
                <Col xs={6}>
                    <C.LinkSlider>Vendas</C.LinkSlider>
                    <C.LinkSlider>Controle de estoque</C.LinkSlider>
                    <C.LinkSlider>Documentos fiscais</C.LinkSlider>
                    <C.LinkSlider>Gestão Financeira</C.LinkSlider>
                    <C.LinkSlider>Venda Online</C.LinkSlider>
                    <C.Img src={vendas}></C.Img>
                </Col>
                <Col></Col>
            </C.Container>
        </C.Section>
    )
}

export default SliderSection