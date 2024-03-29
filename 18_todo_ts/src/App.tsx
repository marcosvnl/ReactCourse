import React from 'react';

import styles from './App.module.css'

import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList';

import { ITask } from './interfaces/ITask';

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer?</h2>
          <TaskForm btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
