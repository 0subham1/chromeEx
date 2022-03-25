let myLead=["1","2","3"]
const input =document.getElementById("input-q")
const save =document.getElementById("save-q")
let random =document.getElementById("random-q")
let ul =document.getElementById("u-l")


// function click1(){
//     myLead.push(input.value)
//     for (let i=0 ; i<myLead.length; i++){
//         console.log(myLead[i])
//         ul.innerHTML +="<li>"+ myLead[i]+ "</li> "
//     }
// }


    save.addEventListener("click",function(){
        myLead.push(input.value)
        console.log(myLead)
    })

    let listitem

    for (let i=0 ; i<myLead.length; i++){
        console.log(myLead[i])
        ul.innerHTML +="<li>"+ myLead[i]+ "</li> "
    }








random.addEventListener("click",function(){
    console.log("random clicked")
})





