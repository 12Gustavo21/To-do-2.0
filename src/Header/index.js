import React from 'react'
import * as S from "./style"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function header() {
  return (
    <S.Header>
      <S.Box1>
        <S.H1>TO DO LIST</S.H1>
      </S.Box1>
      <S.Box2>
        <BsFillArrowDownCircleFill color='white' size='2em' />
        <S.H2>Go down</S.H2>
      </S.Box2>
    </S.Header>
  )
}
