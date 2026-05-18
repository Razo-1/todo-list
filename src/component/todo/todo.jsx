import { List } from '../list/List'
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

        if(text.trim()){
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
        
    }
    
    return(
        <div className={style.block}>
            <div className={style.editor}>
            <form onSubmit={dataAdd}>
                <input onChange={creatData} placeholder='Enter Your text...' value={text} type="text"/>
                <button>Add</button>
            </form>
            <div className={style.coment}>
                <List data={data} changer = {setData}/>
            </div>
            </div>
        </div>
    )
}

export { ToDo }