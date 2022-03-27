let myLead = []
const input = document.getElementById("input-q")
const save = document.getElementById("save-q")
let ul2 = document.getElementById("ul-2")
let ul1 = document.getElementById("ul-1")

save.addEventListener("click", function () {
    myLead.push(input.value)
    render()
    input.value = ""
})

// dom manipulation comes with a cost (performance)
function render() {
    let temp = ""
    for (let i = 0; i < myLead.length; i++) {
        temp += `<li>
        <a target='_blank' href='${myLead[i]}'>${myLead[i]}
        </a>
        </li>`
        // template strings (back tick `)
    }
    ul1.innerHTML = temp
}


// function click1(){
//     myLead.push(input.value)
//     for (let i=0 ; i<myLead.length; i++){
//         console.log(myLead[i])
//         ul.innerHTML +="<li>"+ myLead[i]+ "</li> "
//     }
// }

//  ul1.textContent+= myLead[i]
// temp += "<li><a target='_blank' href='" + myLead[i] + "'>"  + myLead[i] + "</a></li>"

