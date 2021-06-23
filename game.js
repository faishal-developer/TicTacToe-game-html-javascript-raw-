let firstPler=true
let container=document.getElementsByClassName('container')[0]

function createSpan(className,text){
	let span=document.createElement('span')
	span.className= className || ''
	span.innerText=text
	return span
}

function eventHandler(event,className,spanText){
	event.target.setAttribute('class',`box ${className}`)
	event.target.innerHTML=''
	event.target.append(createSpan('',spanText))
	logicHandler(event)
}

function gameHandler(container){
	container.addEventListener('dblclick',function(e){
		if(e.target.className==='box'){
			if(firstPler){
				eventHandler(e,'box1','X')
				firstPler=false
			}else{
				eventHandler(e,'box2','0')
				firstPler=true
			}
		}
	})
}


let redPlayer=[],bluePlayer=[],l
let winner=[['box11','box12','box13'],['box21','box22','box23'],['box31','box32','box33'],['box11','box21','box31'],['box12','box22','box32'],['box13','box23','box33'],['box11','box22','box33'],['box11','box12','box13'],['box31','box22','box13']]


function logicHandler(event){
	if(firstPler===true){
		redPlayer.push(event.target.id)
		if(l !== 3){
			winnerDecler(redPlayer)
		}
	}else{
		bluePlayer.push(event.target.id)
		if(l !== 3){
			winnerDecler(bluePlayer)
		}
	}
}

function winnerDecler(arr){
	for(var i=0;i<winner.length;i++){
		l=0
		for(var j=0;j<3;j++){
			if(arr.includes(winner[i][j])){
				l+=1
			}
		}
	if(l===3 && (arr===redPlayer)){
		alert('Red Player is winned')
		return l
	}else if(l===3){
		alert('blue player is winned')
		return l
	}
	}
}

gameHandler(container)




























