let initialState ={

    text:"How much sun! How much light! How much greenery around! What is this? This summer Finally hurries to our house.",
    img:"./img/img.jpg"

}

export default function editText(state = initialState,action) {
  if(action.type === "page1"){

    return {
        text:"What will you give me, summer? Lots of sunshine! In the sky, rainbow-dygy! And daisies in the meadow!",
        img:"./img/img1.jpg"
    }

  }
  else if(action.type === "page2" ){

    return {
      text:"Summer smells like strawberries Warm rain, strawberries. Smells like summer cucumbers And fragrant flowers",
      img:"./img/img2.jpg"
  }

  }
  else if(action.type === "page3" ){

    return {
      text:"hello my sisterSummer laughs again In an open window And the sun and the light Full, full, full!",
      img:"./img/img3.jpg"
  }

  }
  return state
}