let month = document.querySelector(".month")
let day = document.querySelector(".day")
let date = document.querySelector(".date")
let year = document.querySelector(".year")

let currentDate = new Date()

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

month.innerHTML = months[currentDate.getMonth()]
day.innerHTML = days[currentDate.getDay()]
date.innerHTML = currentDate.getDate()
year.innerHTML = currentDate.getFullYear()
