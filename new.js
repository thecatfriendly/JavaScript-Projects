let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")

let name = localStorage.getItem("myName")
console.log(name)

let leadsfromlocastorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsfromlocastorage) {
    myleads = leadsfromlocastorage
    renderLeads()
}


function renderLeads() {
    let list_items = ""
    for (let i = 0; i < myleads.length; i ++) {
    list_items += `<li>
                        <a
                            href = 'url' target = '${myleads[i]}'> ${myleads[i]}
                        </a>
                    </li>`
    }
    ulEl.innerHTML = list_items
}
inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myleads))
    console.log(localStorage.getItem("myLeads"))
    console.log(myleads) 
    renderLeads()
    
})

clearBtn.addEventListener("dblclick", function() {
    localStorage.clear();
    location.reload();
})
