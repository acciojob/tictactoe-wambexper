let input1=document.getElementById("player-1");
let input2=document.getElementById("player-2");
let btn=document.getElementById("submit");
let grid=document.getElementById("grid");
let main=document.getElementsByClassName("container");
let row=document.getElementsByClassName("row");
let msg=document.getElementsByClassName("message");
let c=document.getElementsByClassName("cont");
btn.addEventListener("click",()=>{
    if(input1.value===""){
        alert("please enter name")
    }
    else if(input2.value===""){
         alert("please enter name");
    }
    else{
    main[0].className="display";
   
    for(let i=0;i<9;i++){
    let div=document.createElement("td");
    div.className="box";
    div.id=i;
    let num=Math.floor(i/3);
   row[num].appendChild(div);
   
    }
    }
    let count=1;
      msg[0].textContent=`${input1.value},you're up`
    c[0].addEventListener("click",(e)=>{
        if(count%2!==0 && e.target.textContent===""){
        e.target.textContent="X";
         msg[0].textContent=`${input.value},you're up`
        count++;
        }
        else if( e.target.textContent===""){
             e.target.textContent="O";
             count++;
              msg[0].textContent=`${input1.value},you're up`
        }
    })
    
});