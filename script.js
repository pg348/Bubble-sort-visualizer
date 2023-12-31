let arr=[50,40,30,20,10,60,80,5,70]
let parent=document.getElementsByClassName('parent');
let btn=document.getElementsByClassName('btn');

let i=0;

arr.forEach(e=>{
    let innerdiv=document.createElement('div');
    innerdiv.style.height=(e*6+'px');
    innerdiv.style.backgroundColor='#'+ ((1<<24)*Math.random() | 1).toString(16);
    innerdiv.style.width=50+'px';
    innerdiv.setAttribute('id','elem'+i);
    i++;
    innerdiv.classList.add('innerdiv');
    parent[0].appendChild(innerdiv);
})

btn[0].addEventListener("click",()=>myFunction(arr));

const sleep=(time)=>{
    return new Promise(resolve => setTimeout(resolve,time))
    
}

async function myFunction(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            await sleep(500);
            if(arr[j]>arr[j+1]){
                swapNumber(arr,j)
                swapColorHeight(j)
            }
        }
    }
}

function swapNumber(arr,j){
    let temp=arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}

function swapColorHeight(j){
    let a='elem'+j;
    let b='elem'+(j+1);
    let e1=document.getElementById(a);
    let e2=document.getElementById(b);
    let b1=e1.style.backgroundColor;
    let b2=e2.style.backgroundColor;
    let h1=e1.clientHeight;
    let h2 =e2.clientHeight;
    e1.style.backgroundColor=b2;
    e2.style.backgroundColor=b1;
    e1.style.height=h2+"px";
    e2.style.height=h1+"px";
}