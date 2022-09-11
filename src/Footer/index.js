import React from 'react'
import * as S from './style'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import Cat from "../img/Cute-cat-footer.gif"

export default function index() {
  return (
    <S.Footer>
      <S.Box1>
        <a href='#top'> <BsFillArrowUpCircleFill size='2em' color='white' /> </a> 
        <a href='#top'> <h1>SEE YOU LATER</h1> </a> 
      </S.Box1>
      <S.Figure>
        <img src={Cat} alt="Cute cat eating pizza" />
      </S.Figure>
    </S.Footer>
  )
}
