import { use, useState } from 'react'
import { ChangText } from '../changText/changText'
import style from './List.module.css'

function List({ data,changer }){

    let [bool,setBool] = useState(false)
    let [changId,setChangId] = useState(null)

    let checket = (e,id) => {
        let val = e.target.checked
        changer((prev) => {
           return prev.map(el => {
                if(el.id == id){
                    return {...el,isDone : val}
                }   
                    return el
            })
        })
        
    }

    let remove = (id) => {
        changer((prev) => {
          return prev.filter(el => el.id !== id)  
        })
    }
    
    let editText = (id) => {
        setBool(true)
        setChangId(id)
    }

    return(

        <div>
            <div>
                {data.map(el => {
                return(
                    <div className={style.element} key={el.id}>
                        <input onClick={(e) => checket(e,el.id)} type="checkbox" />
                        <p onClick={() => editText(el.id)}>{el.title}</p>
                        <div className={style.trash}>
                            <i onClick={() => remove(el.id)} className={`${el.isDone ? style.on : style.off} bi bi-trash ${style.defult}`}></i>
                        </div>
                    </div>
                )})}
            </div>
            <ChangText bool={bool} setBool={setBool} changer={changer} id={changId}/>
        </div>
    )
    
}

export { List }