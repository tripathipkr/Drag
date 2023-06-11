
let lists=document.getElementsByClassName("list");
let rightBox=document.getElementById("right");
let LeftBox=document.getElementById("left");
let btn=document.getElementById("resetbtn");
let rl=document.getElementsByClassName("rl")
btn.addEventListener("click",()=>{
    // LeftBox.append("")
    // img1=document.getElementById("img1")
    // img2=document.getElementById("img2")
    // LeftBox.append(img1,img2)
    document.location.reload()
})
for(list of lists){
    let id;
    list.addEventListener("dragstart",(e)=>{
        e.target.className+=' hold'
        let selected=e.target;
        
            rightBox.addEventListener("dragover",(e)=>{
                e.preventDefault();
            })
            
            rightBox.addEventListener("drop",()=>{
                rightBox.append(selected)
                
               
             
            })

        })
       
        
       

        

        
    }
