
let count_you=0;
let count_comp=0;
const arr=[];
// paper0 rock1 scissor2
let paper =document.querySelector("#pic1");
let rock =document.querySelector("#pic2");
let scissor =document.querySelector("#pic3");
let Result2 =document.querySelector("#Result2");
let Result_You =document.querySelector("#Result_You");
let Result_comp =document.querySelector("#Result_comp");


paper.addEventListener("click",()=>{
    arr[0]=0;
    paper.style.height= "200px";
    
});
rock.addEventListener("click",()=>{
    arr[0]=1;
});
scissor.addEventListener("click",()=>{
    arr[0]=2;
});

Result2.addEventListener("click",()=>{
    let random=Math.floor(Math.random()*3);
    if(arr[0]==0){
        if(random==0){
            Result2.innerText="It was a draw. Try again";
            Result2.style.backgroundColor="#FFFACD";
        }
        else if(random==1){
            Result2.innerText="You won. Wanna try again";
            Result2.style.backgroundColor="#008000";
            count_you+=1;
            Result_You.innerText=count_you;
        }
        else{
            Result2.innerText="You lost. Give it a try again Champ";
            Result2.style.backgroundColor="#ff0000";
            count_comp+=1;
            Result_comp.innerText=count_comp;
        }
    }
    else if(arr[0]==1){
        if(random==1){
            Result2.innerText="It was a draw. Try again";
            Result2.style.backgroundColor="#FFFACD";
        }
        else if(random==2){
            Result2.innerText="You won. Wanna try again";
            Result2.style.backgroundColor="#008000";
            count_you+=1;
            Result_You.innerText=count_you;
        }
        else{
            Result2.innerText="You lost. Give it a try again Champ";
            Result2.style.backgroundColor="#ff0000";
            count_comp+=1;
            Result_comp.innerText=count_comp;
        }
    }
    else{
        if(arr[0]==2){
            if(random==2){
                Result2.innerText="It was a draw. Try again";
                Result2.style.backgroundColor="#FFFACD";
            }
            else if(random==0){
                Result2.innerText="You won. Wanna try again";
                Result2.style.backgroundColor="#008000";
                count_you+=1;
                Result_You.innerText=count_you;
            }
            else{
                Result2.innerText="You lost. Give it a try again Champ";
                Result2.style.backgroundColor="#ff0000";
                count_comp+=1;
                Result_comp.innerText=count_comp;
            }
        }
    }
});








