document.addEventListener("DOMContentLoaded",()=>{

const intro=document.getElementById("introScreen");
const app=document.querySelector(".app-container");
const music=document.getElementById("bgMusic");

document.getElementById("enterBtn").onclick=()=>{
    intro.style.opacity="0";
    setTimeout(()=>{
        intro.style.display="none";
        app.classList.remove("hidden");
        music.volume=0;
        music.play();
        let fade=setInterval(()=>{
            if(music.volume<0.5){
                music.volume+=0.05;
            }else clearInterval(fade);
        },200);
    },800);
};

document.getElementById("darkToggle").onclick=()=>{
    document.body.classList.toggle("dark");
};

// TYPEWRITER
const text="To the most caring, loving, intelligent and beautiful woman I know 💖";
let i=0;
function typeWriter(){
    if(i<text.length){
        document.getElementById("typewriter").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typeWriter,40);
    }
}
typeWriter();

// SLIDER
let slides=document.querySelectorAll(".slide");
let index=0;

function showSlide(i){
    slides.forEach(s=>s.classList.remove("active"));
    slides[i].classList.add("active");
}

document.getElementById("next").onclick=()=>{
    index=(index+1)%slides.length;
    showSlide(index);
};

document.getElementById("prev").onclick=()=>{
    index=(index-1+slides.length)%slides.length;
    showSlide(index);
};

setInterval(()=>{
    index=(index+1)%slides.length;
    showSlide(index);
},5000);

// LOVE COUNTER
let love=localStorage.getItem("love")||0;
document.getElementById("loveCount").innerText=love;

document.querySelector(".love-counter").onclick=()=>{
    love++;
    document.getElementById("loveCount").innerText=love;
    localStorage.setItem("love",love);
};

// RANDOM MESSAGES
const msgs=[
"You make work feel lighter ✨",
"Your smile changes everything 💖",
"You are rare and unforgettable 🌹",
"Ann, you are appreciated more than you know 💫"
];

document.getElementById("newMessage").onclick=()=>{
    let rand=Math.floor(Math.random()*msgs.length);
    document.getElementById("dynamicMessage").innerText=msgs[rand];
};

// CONFETTI
document.getElementById("confettiBtn").onclick=()=>{
    for(let i=0;i<150;i++){
        let conf=document.createElement("div");
        conf.style.position="fixed";
        conf.style.width="8px";
        conf.style.height="8px";
        conf.style.background=`hsl(${Math.random()*360},100%,50%)`;
        conf.style.left=Math.random()*100+"vw";
        conf.style.top="-10px";
        conf.style.opacity="1";
        conf.style.transition="4s linear";
        document.body.appendChild(conf);
        setTimeout(()=>{
            conf.style.top="100vh";
            conf.style.opacity="0";
        },10);
        setTimeout(()=>conf.remove(),4000);
    }
};

// SECRET MODAL
const modal=document.createElement("div");
modal.id="secretModal";
modal.innerHTML=`
<div class="modalContent">
<h2>For You 💖</h2>
<p>You are not just the best colleague...  
You are someone truly special to me.</p>
<button id="closeModal">Close</button>
</div>
`;
document.body.appendChild(modal);

document.getElementById("secretBtn").onclick=()=>{
    modal.classList.add("active");
};

document.addEventListener("click",e=>{
    if(e.target.id==="closeModal"||e.target.id==="secretModal"){
        modal.classList.remove("active");
    }
});

});
