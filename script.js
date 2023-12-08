var persons = [
    {
        name:'Priya',
        place:'Bangalore,India',
        contactNo:98765,
        pincode:684746,
        src:'./treasure.jpg'
    },
    {
        name:'Keerthana',
        place:'Rajaji nagar,Bangalore,India',
        contactNo:12335,
        src:'./wallpaper.jpg'
    },
    {
    name:'Sindhu',
    place:'Malleshwaram,Bangalore,India',
    pincode:560021,
    src:'./wallpaper.jpg'
    }
]


function getRandomColor(){
var red = Math.floor(Math.random () * 256)
var green = Math.floor(Math.random () * 256)
var blue = Math.floor(Math.random () * 256)
var randColor = 'rgb('+red+','+green+','+blue+')'
return randColor
}




function randomNumber(){
    var randomNo = Math.floor(Math.random() * persons.length)
    var randDetails = persons[randomNo]
    console.log(randDetails)
    return randDetails
}



function printName(){
var details = randomNumber()
var nameContainer=  document.getElementById('name-box')
var imageContainer = document.getElementById('img-box')
imageContainer.src = details.src
var nameString = `<p class='name'>${details.name}</p><p class = 'place'>${details.place}</p>`
if (details.pincode){
nameString +=`<p class = 'pincode'>${details.pincode}</p>`
}
if(details.contactNo){
    nameString +=`<p class = 'contactNo'>${details.contactNo}</p>`
}
if(details.src){
    nameString +=`<img src = ${details.src} width = '100' height = '100'/>`
}
else{
    nameString += `</p>`
}
nameContainer.innerHTML = nameString
document.body.style.backgroundColor = getRandomColor()

}


window.setInterval(function(){
    printName()
},5000)


document.getElementById('loadName').addEventListener('click',printName)