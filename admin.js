import supabase from "./supabase.js"

async function load(){

const {data} = await supabase
.from("reservations")
.select("*")

data.forEach(r=>{

let tr=document.createElement("tr")

tr.innerHTML=`
<td>${r.checkin}</td>
<td>${r.checkout}</td>
<td>${r.guests}</td>
`

table.append(tr)

})

}

load()
