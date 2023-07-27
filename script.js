const item1=document.getElementById("one")
const item2=document.getElementById("two")
const item3=document.getElementById("three")
const item4=document.getElementById("four")
const refresh = document.querySelector(".refresh")


refresh.addEventListener("click",()=>{
    location.reload();
})



new Promise((resolve,reject)=>{
    setTimeout(()=>{
        item1.style.visibility = "visible"
        resolve()
    },1000)
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            item2.style.visibility = "visible"
            resolve()
        },1000)
    })
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            item3.style.visibility = "visible"
            resolve()
        },1000)
    })
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            item4.style.visibility = "visible"
            refresh.style.visibility = "visible"
            resolve()
        },1000)
    })
})

