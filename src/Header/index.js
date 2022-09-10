import React from 'react'
import * as S from "./style"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function index() {
  return (
    <S.Header>
      <S.Box1>
        <S.H1>TO DO LIST</S.H1>
      </S.Box1>
      <S.Box2>
        <a href='#main'> <BsFillArrowDownCircleFill color='white' size='2em' /> </a>
        <a href='#main'> <S.H2>Go down</S.H2> </a>
      </S.Box2>
    </S.Header>
  )
}
