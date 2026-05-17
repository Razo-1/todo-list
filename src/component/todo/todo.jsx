import { useState } from 'react'
import style from './todo.module.css'

function ToDo(){

    let [text,setText] =  useState('')
    let [data,setData] = useState([])

    let creatData = (e) => {
        setText(e.target.value)
    }

    let dataAdd = (e) => {
        e.preventDefault()
        setData((rev) => {
            return [
               ...rev,
                {
                    title : text,
                    id : Date.now(),
                    isDone : false
                }
            ]
        })
        setText('')
    }

    return(
        <>
            <form onSubmit={dataAdd}>
                <input onChange={creatData} value={text} type="text"/>
                <button>Add</button>
            </form>
            <div>
            
            </div>
        </>
    )
}

export { ToDo }