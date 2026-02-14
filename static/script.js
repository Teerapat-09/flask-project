function showSection(id){
document.querySelectorAll(".content").forEach(sec=>{
sec.classList.remove("active");
});

setTimeout(()=>{
document.getElementById(id).classList.add("active");
},150);
}

// floating hearts
function createHeart(){
const heart=document.createElement("div");
heart.className="heart";
heart.innerText="❤";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(10+Math.random()*20)+"px";
heart.style.animationDuration=(4+Math.random()*6)+"s";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),9000);
}

setInterval(createHeart,500);