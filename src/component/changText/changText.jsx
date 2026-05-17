import { use, useState } from 'react';
import style from './changText.module.css';

function ChangText ({ bool,setBool,changer,id }){

    let [newText,setNewText] = useState('')

    let titleText = (e) => {
            setNewText(e.target.value)
    }

    let textChanger = (e) => {
        e.preventDefault()
        
        if(newText.trim()){
            changer((prev) => {
                return prev.map(el => {
                    if(el.id === id){
                        return {...el,title : newText}
                    }                    
                    return el    
                })
            })
        }
        setNewText('')
        setBool(false)
    }

    return(
        <div className={bool ? style.container : style.hiden}>
            <div className={style.content}>
                <h1>Edit text</h1>
                <form onSubmit={textChanger}>
                    <input onChange={titleText} value={newText} type="text" />
                    <button>Edit</button>
                </form>
            </div>
           
        </div>
    )
}

export { ChangText }