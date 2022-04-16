var red=document.getElementById('btn1')
var blue=document.getElementById('btn2')
var black=document.getElementById('btn3')
var pink=document.getElementById('btn4')
var purple=document.getElementById('btn5')
var time=document.getElementById('btn6')
var heartBeat=document.getElementById('btn7')
var image=document.getElementById('image')
var para=document.getElementById('time-para')
var heartBeatDisplay=document.getElementById('watch-inner-container')

set()

red.addEventListener('click', function()
{
    image.src='/red.png'
})

blue.addEventListener('click',function()
{
    image.src='/blue.png'

})

black.addEventListener('click', function()
{
    image.src='/black.png'
})

pink.addEventListener('click',function()
{
    image.src='/pink.png'
})

purple.addEventListener('click',function()
{
    image.src='/purple.png'
})

time.addEventListener('click',function() 
{
    set()
})

heartBeat.addEventListener('click',function()
{
    var template=`<img id="heartBeat" src="/heart.jpg" alt="heart">
    <h1 id="heartBeat-heading">
        78
    </h1>`
    heartBeatDisplay.innerHTML=template
})

function set()
{
    var interval=setInterval(function()
    {
        var currentTime=Date()
        console.log(currentTime)
        var onlyTime=currentTime.slice(15,24)
        var template=`<p id="time-para">${onlyTime}</p>`
        heartBeatDisplay.innerHTML=template
        heartBeat.addEventListener('click',function() {
            clearInterval(interval)
        })
    },1000)
}