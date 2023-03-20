let name= prompt("enter name").toUpperCase()
let a=["Initializing Username "+name,
        "Hacking Instagram is in process...",
        "Instagram Hacked",
        "Hacking Facebook is in process...",
        "Facebook Hacked",
        "Hacking Mobile Phone +91********** is in process...",
        "Mobile Phone Hacked",
      "YOU ALL NOW IN OUR CONTROL"]

const sleep = async(seconds)=>{
  return new Promise((resolve,reject)=>{
      setTimeout(()=>{
   resolve(true)
  },seconds*1000)
})
  }

const showhack=async(message)=>{
  await sleep(2)
  // console.log(message)/
  hacked.innerHTML=hacked.innerHTML+message +"<br>"
}
  (async ()=>{
    for (let i=0;i<a.length;i++)
     await showhack(a[i])
  })()
  