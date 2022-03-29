let myLead = []
const input = document.getElementById("input-q")
const save = document.getElementById("save-q")
const save2 = document.getElementById("save2-q")
let delete1 = document.getElementById("delete-q")
let ul1 = document.getElementById("ul-1")
let lsData = JSON.parse(localStorage.getItem("Leads"))


if (lsData) {
    myLead = lsData
    render(myLead)
}

save2.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("Leads", JSON.stringify(myLead))
        render(myLead)
    }) // console.log(tab[0].url) //dot notation   
})


function render(lead1) {
    let temp = ""
    for (let i = 0; i < lead1.length; i++) {
        temp +=
            `<li>
        <a target='_blank' href='${lead1[i]}'>
        ${lead1[i]}
        </a>
        </li>`
        // template strings (back tick `)
    }
    ul1.innerHTML = temp
}


delete1.addEventListener("dblclick", function () {
    localStorage.clear()
    myLead = []
    render(myLead)
})

save.addEventListener("click", function () {
    myLead.push(input.value)
    input.value = ""
    localStorage.setItem("Leads", JSON.stringify(myLead))
    render(myLead)
    console.log(localStorage.getItem("Leads"))
})

// dom manipulation comes with a cost (performance)

// function click1(){
//     myLead.push(input.value)
//     for (let i=0 ; i<myLead.length; i++){
//         console.log(myLead[i])
//         ul.innerHTML +="<li>"+ myLead[i]+ "</li> "
//     }
// }

//  ul1.textContent+= myLead[i]
// temp += "<li><a target='_blank' href='" + myLead[i] + "'>"  + myLead[i] + "</a></li>"

