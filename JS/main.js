const allList=[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue' 
	}
];

const outputCardEl=document.querySelector(".output-card");
const filtroEl=document.querySelector("[name='filtro']");

listGenerator("all",allList);
changeColor(allList);
console.log(generateTypeList(allList));

const typeList=generateTypeList(allList);
typeList.forEach((item)=>{
	filtroEl.innerHTML+=`<option value="${item}">${item}</option>
	`
})







filtroEl.addEventListener("change",function(){
	listGenerator(this.value,allList);
})

function listGenerator(filtro,allList){
	let currentList=[];
	
	allList.forEach((item)=>{
		
		if(item.type===filtro ){
			currentList.push(item);
			
		}
	else if(filtro==="all"){
		currentList=allList;
	}})

		outputCardEl.innerHTML="";
		currentList.forEach((item)=>{
			outputCardEl.innerHTML+=`<div class="col">
			<div class="card my-card">
				<div style="color:${item.color}"><i class="fa-solid ${item.prefix+item.name}"></i></div>
				<div class="card-text">${item.name.toUpperCase()}</div>
			</div>
		</div>`

		
})
}


function colorGenerator(){
	return "#"+genExadeciaml();
}
function genExadeciaml(){
	let exadecimalNum="";
	const valori=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	for(let i=0;i<6;i++){
		exadecimalNum=exadecimalNum+valori[(randomNum(0,((valori.length)-1)))]

		
	}
	
	return exadecimalNum;

}
function randomNum(min, max) {
		return Math.floor(Math.random() * (max - min + 1) ) + min;
	  }

console.log(colorGenerator());

function changeColor(allList){
	allList.forEach((item)=>{
		item.color=colorGenerator();
	})
}

function generateTypeList(allList){
	const typeList=["all"];
	allList.forEach((item)=>{
		if(!typeList.includes(item.type)){
			typeList.push(item.type)
		}

		
	}
	)
	return typeList;
}