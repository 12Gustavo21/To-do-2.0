import React, { useState } from "react"
import * as S from "./style"
import Cat from '../img/Cute-cat-main.gif'

export default function Index() {

  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  const add = () => {
    if (input !== "") {
      setList([...list, input]);
      setInput("");
    }
  };

  const deleteAll = () => {
    setList([])
    setInput("")
  }

  const deleteItem = (id) => {
    let newList = [...list]
    newList.splice(id, 1)

    setList(newList)
  }

  return (
    <S.Main id='main'>
      <S.Box1>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder='Add a task'
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <S.Buttons>
              <button onClick={() => { add() }}>Add</button>
              <button onClick={() => { deleteAll() }}>Delete all</button>            
            </S.Buttons>
          </form>
        <ul>
          {list.map((item, id) => (
            <S.Task>
              <S.Li>{item}</S.Li>
              <S.Div>
                <input type='checkbox' />
                <button onClick={() => deleteItem(id)}>Delete</button>
              </S.Div>
            </S.Task>
          ))}
        </ul>
      </S.Box1>
      <S.Figure>
        <img src={Cat} alt='cute cat on top of a heart' />
      </S.Figure>

    </S.Main>
  )
}
