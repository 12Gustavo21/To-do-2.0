import React from 'react'
import * as S from "../styles/header-style"
import { BsFillArrowDownCircleFill } from "react-icons/bs";

export default function header() {
  return (
    <S.Header>
      <div>
        <BsFillArrowDownCircleFill color='white' size='2em' />
      </div>
      <div>
        <S.H1>TO DO LIST</S.H1>
      </div>
    </S.Header>
  )
}
