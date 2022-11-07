import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import * as C from './styles'
import Testimony1 from '../../images/testimonials/testimony-1.png'
import Testimony2 from '../../images/testimonials/testimony-2.png'
import Testimony3 from '../../images/testimonials/testimony-3.png'
import Testimony4 from '../../images/testimonials/testimony-4.png'
import FiveStarts from '../../images/testimonials/fivestars.png'

const Testimonials = () => {
    return (

        <C.Section>

            <C.TestimonialsRow>
                <C.H3>O que dizem os Lojistas que usam o Hiper</C.H3>
                <C.Img src={FiveStarts}></C.Img>
                <C.TestimonialsDepoiments>
                    <Col></Col>
                    <Col><C.ImageWrapper><C.Img src={Testimony1}></C.Img></C.ImageWrapper>
                        <C.Strong>Loja Experiência Musical</C.Strong>
                        <C.Span>Além do controle de vendas e do fechamento de caixa agilizado, acompanhamos as mensalidades dos cursos e criamos ordens de serviço para os reparos nos instrumentos. O processo de adaptação foi tranquilo e o resultado final foi qualidade de vida.</C.Span>
                        <C.ImageWrapper><C.Img src={FiveStarts}></C.Img></C.ImageWrapper>
                        <C.Span>Moacir Visconti</C.Span>
                    </Col>
                    <Col><C.ImageWrapper><C.Img src={Testimony2}></C.Img></C.ImageWrapper>
                        <C.Strong>ACS Automotive Care Solutions</C.Strong>
                        <C.Span>O Hiper é uma ferramenta muito fácil de trabalhar, é intuitivo e simples de entender. O app Hiper Vendas tem toda informação para manter a minha empresa funcionando e eu só preciso cadastrar os produtos no Hiper Gestão.</C.Span>
                        <C.ImageWrapper><C.Img src={FiveStarts}></C.Img></C.ImageWrapper>
                        <C.Span>Angelo Elias Trierweiler Junior</C.Span>
                    </Col>
                    <Col><C.ImageWrapper><C.Img src={Testimony3}></C.Img></C.ImageWrapper>
                        <C.Strong>Nudh Makeup</C.Strong>
                        <C.Span>Eu conheci a Hiper pela internet, comecei a pesquisar vários sistemas e o que mais se enquadram com o meu negócio. E eu vi que a Hiper tinha muito a agregar comigo, onde foi a minha escolha.</C.Span>
                        <C.ImageWrapper><C.Img src={FiveStarts}></C.Img></C.ImageWrapper>
                        <C.Span>Helô Bertolini</C.Span>
                    </Col>
                    <Col><C.ImageWrapper><C.Img src={Testimony4}></C.Img></C.ImageWrapper>
                        <C.Strong>Agropet Carminatti</C.Strong>
                        <C.Span>O sistema Hiper mudou muita coisa, a gente conseguiu organizar as contas a pagar, o estoque, os clientes, as mercadorias, também as compras e vendas. Então facilitou para a gente ter um sistema.</C.Span>
                        <C.ImageWrapper><C.Img src={FiveStarts}></C.Img></C.ImageWrapper>
                        <C.Span>Tiago Carminatti</C.Span>
                    </Col>
                    <Col></Col>
                </C.TestimonialsDepoiments>

            </C.TestimonialsRow>


        </C.Section>

    )
}

export default Testimonials