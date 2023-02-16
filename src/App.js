import { useState } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [initialState, setInitialState] = useState([{
    id: 0, 
    title : '', 
    body :'', 
    isDone : false
  }  
]);

  const [todos, setTodos] = useState([{
    id: 1, 
    title: "리액트 강의보기",
    body: "챕터 1부터 챕터 12까지 학습",
    isDone: false
  },
  {
    id: 2, 
    title: "점심 먹기",
    body: "점심 뭐먹지..?",
    isDone: false
  }
]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addList = () => {
    const newTodo = {
      id: todos.length + 1,
      title,
      body,
      isdone : false
    }
    
    setTodos([newTodo, ...todos])

    setTitle('');
    setBody('');
  }
  
  const delList = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  

  return (
    <div className='layout'>
      <div className="title">
        <h2>나의 Todo List 📚</h2>
      </div>
      
      <div className='todo'>
      <div className='input-group'>
          제목 <input type="text" name='title' className='add-input'
          value={title} onChange={(e) => {setTitle(e.target.value)}}>
            </input>
          내용 <input type="text" name='body' className='add-input'
          value={body} onChange={(e) => {setBody(e.target.value)}}>
            </input>
        </div>
        <button className='add-button'
        onClick={addList}>추가하기</button>
      </div>

      <div>
        <h3>진행중...🖋</h3>
        {
          todos.map((item)=>{          
          return (<div key={item.id} className='todo-item'>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
              <button onClick={()=>delList(item.id)}>삭제하기</button>
              <button>완료!</button>
            </div>)
            })
        }   
      </div>

      <div>
        <h3>완료...🎉</h3>
        
      </div>

    </div>
  );
}

export default App;
