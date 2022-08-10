//Change link active

let show = document.querySelector(".show");
let links = document.querySelectorAll(".links li");

links.forEach( link =>{
link.addEventListener("click", (e)=>{
	e.target.parentElement.querySelectorAll('.active').forEach(li =>{
		li.classList.remove("active");
	});
	e.target.classList.add("active");
});
});


show.onclick = function (){
	links.forEach( link => {
		link.classList.toggle("show");
		link.style.top = " 2px;";

	});
}