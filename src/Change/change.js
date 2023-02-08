import React from "react"
import "./change.css"
import { connect } from 'react-redux'


let Change = (props) => {


    let page1 = () => {

        props.ChangePage(props.TextStore)

    }
    let page2 = () => {

        props.ChangePage1(props.TextStore)

    }
    let page3 = () => {

        props.ChangePage2(props.TextStore)

    }


    return(

        <div>

            <div className="block_main_app">
            <div className="block_main">

                <div className="block_img">

                    <img src={props.textStore.img} alt="" /> 

                </div>
                <div className="block_info">


                    <div className="block_btns">

                        <button onClick={page1}>page 1</button>
                        <button onClick={page2}>page 2</button>
                        <button onClick={page3} >page 3</button>

                    </div>
                    <div className="block_text">

                            <h2>my blog</h2>

                            <p>{props.textStore.text}</p>

                    </div>


                </div>


            </div>
            </div>

        </div>

    )



}
export default connect(

    state=>({
  
      textStore:state.editText
  
    }),
    dispatch=>({

        ChangePage:(Page)=>{

            dispatch({type:"page1",payload:Page})

        },
        ChangePage1:(Page)=>{

            dispatch({type:"page2",payload:Page})

        },
        ChangePage2:(Page)=>{

            dispatch({type:"page3",payload:Page})

        }

    })
    )(Change);