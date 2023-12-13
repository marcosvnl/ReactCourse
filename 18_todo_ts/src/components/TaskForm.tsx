import React, { ChangeEvent } from 'react'
import styles from './TaskForm.module.css'
import { ITask } from '../interfaces/ITask'

type Props = {
  btnText: string
}

const TaskForm = (props: Props) => {

  const [id, setId] = React.useState<number>(0)
  const [title, setTitle] = React.useState<string>('')
  const [difficult, setDifficult] = React.useState<number>(0)

  const addTaskHandler = () => {

  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'title') {
      setTitle(event.target.value)
    }
    else {
      setDifficult(Number.parseInt(event.target.value))
    }

    console.log(title)
    console.log(difficult)
  }

  return (
    <form onSubmit={ addTaskHandler } className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name='title' placeholder='Título da tarefa' value={ title } onChange={ handleChange }/>
      </div>
      <div className={styles.input_container}>
        <label htmlFor="diffyculty">Dificuldade:</label>
        <input type="text" name='diffyculty' placeholder='Dificuldade' value={ difficult } onChange={ handleChange }/>
      </div>
      <input type="submit" value={props.btnText}/>
    </form>
  )
}

export default TaskForm