const teddy=document.getElementById("teddy");
const text=document.getElementById("tapText");
const next=document.getElementById("nextBtn");

let count=0;

const messages=[
"Ye tumhare liye hug hai 🫂",
"Ek aur chahiye? 😌",
"Theek hai last wala extra tight hug 🧸💗",
"Ab seriously miss kar raha hu 😭❤️"
];

teddy.addEventListener("click",()=>{

if(count<messages.length){
text.innerText=messages[count];
count++;
}

// Teddy bounce effect
teddy.style.transform="translate(-50%,-50%) scale(1.2)";
setTimeout(()=>{
teddy.style.transform="translate(-50%,-50%) scale(1)";
},200);

if(count===messages.length){
next.classList.remove("hidden");
}

});
