import React from 'react'
import * as C from './styles'
import lojas from '../../images/segments/lojas.png'
import moda from '../../images/segments/moda.png'
import padarias from '../../images/segments/padarias.png'
import calcados from '../../images/segments/calcados.png'
import eletronicos from '../../images/segments/eletronicos.png'
import construcao from '../../images/segments/construcao.png'
import acougue from '../../images/segments/acougue.png'
import livrarias from '../../images/segments/livrarias.png'
import mercados from '../../images/segments/mercados.png'
import servicos from '../../images/segments/servicos.png'

const Segments = () => {
    return (
        <C.Section>
            <C.RowSegment>
                <C.ColSegment><C.Card><C.Img src={lojas} /><C.Span>Lojas</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={moda} /><C.Span>Moda</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={padarias} /><C.Span>Padarias</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={calcados} /><C.Span>Calçados</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={eletronicos} /><C.Span>Eletrônicos</C.Span></C.Card></C.ColSegment>
            </C.RowSegment>
            <C.RowSegment>
                <C.ColSegment><C.Card><C.Img src={construcao} /><C.Span>Construção</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={acougue} /><C.Span>Açougue</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={livrarias} /><C.Span>Livrarias</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={mercados} /><C.Span>Mercados</C.Span></C.Card></C.ColSegment>
                <C.ColSegment><C.Card><C.Img src={servicos} /><C.Span>Serviços</C.Span></C.Card></C.ColSegment>
            </C.RowSegment>
            <div><C.P><C.Link href=''>Ver todos os segmentos</C.Link></C.P></div>
        </C.Section>
    )
}

export default Segments