/* eslint-disable import/first */

/* src/App.js */
import React, { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { withAuthenticator } from '@aws-amplify/ui-react';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

// axios　https通信用モジュール
import axios from 'axios';
import jsonplaceholder from './apis/jsonplaceholder';
import Button from './components/Button';
import Resources from './components/Resources';
//

const initialState = { name: '', description: '' }
const server = 'https://9kwveffawh.execute-api.ap-northeast-1.amazonaws.com/default/iot_autocall_OutboundStart'


const App = () => {
  const [formState, setFormState] = useState(initialState)
  const [todos, setTodos] = useState([])
//
  const [resources,setResources] = useState([]);
  const axios = require('axios');
  const params = {withCredentials: true
  }; 
  const calling =async()=>{
    try{
        console.log("lambda invoking !")
        axios.get(server,params)
        .then((res)=>{
          console.log(res)
        })
        // const posts = await jsonplaceholder.get('/posts');
        // setResources(posts.data);
    }catch(err){
      console.log(err);
    };
  }
  const getalbums =async()=>{
     try{
        const albums = await jsonplaceholder.get('/albums');
        setResources(albums.data);
      }catch(err){
        console.log(err);
      }
  };


  useEffect(() => {
    fetchTodos()
  }, [])

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const todoData = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) { console.log('error fetching todos') }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  return (
    <div>
      <h2 style ={{padding:'auto 30px'}}>発呼するボタン（簡易版）</h2>
      <div className='ui container'style={{marginTop:'30px'}}>
        <Button onClick={calling} color='primary' text='発呼' />
        {/* <Button onClick={getalbums} color='red' text='albums' /> */}
        <Resources resources={resources}/>
      </div>
      <div style={styles.container}>
        <h2>避難者登録用（insertするだけ）</h2>
        <input
          onChange={event => setInput('name', event.target.value)}
          style={styles.input}
          value={formState.name}
          placeholder="Name"
        />
        <input
          onChange={event => setInput('description', event.target.value)}
          style={styles.input}
          value={formState.description}
          placeholder="Description"
        />
        <button style={styles.button} onClick={addTodo}>避難者登録</button>
        {
          todos.map((todo, index) => (
            <div key={todo.id ? todo.id : index} style={styles.todo}>
              <p style={styles.todoName}>{todo.name}</p>
              <p style={styles.todoDescription}>{todo.description}</p>
            </div>
          ))
        }
      </div>

  </div>

  )
}

const styles = {
  container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
  todo: {  marginBottom: 15 },
  input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
  todoName: { fontSize: 20, fontWeight: 'bold' },
  todoDescription: { marginBottom: 0 },
  button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }

}

export default withAuthenticator(App);
