// function to genrate random color

let randomColor=()=>{
let color1 =Math.floor(Math.random()*256)
let color2 =Math.floor(Math.random()*256)
let color3 =Math.floor(Math.random()*256)
return`rgb(${color1},${color2},${color3})`;
}
// function to apply random color to the div 

let applyColor=()=>{
let randomGenrate=randomColor()
let container=document.querySelector(".cont")
container.style.backgroundColor=randomGenrate
console.log(`style applied ${randomGenrate} on element ${container}`);

}

setInterval(applyColor,1000)

