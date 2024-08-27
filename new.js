let myleads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

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
    console.log(myleads) 
    renderLeads()
    inputEl.value = ""
})
