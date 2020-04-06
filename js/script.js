var typingArea = document.querySelector('#typing');
	var testContent = document.querySelector('#testContent').innerText;
	var timerValue = document.querySelector('#timer');
	var timer = [0,0,0,0];
	var interval;
	var timerRunningStatus = false;

	typingArea.addEventListener("keypress", typingFunc);
	typingArea.addEventListener("keyup", spellingCheck);

	function typingFunc(){	
		if(typingArea.value.length == 0 && !timerRunningStatus){
			timerRunningStatus = true;
			interval = setInterval(runTimer, 10)
		}
		
	}

	function spellingCheck(){
		var typeContent = typingArea.value;
		let matchedText = testContent.substring(0, typeContent.length);
		if(typeContent == testContent){
			typingArea.style.borderColor = "green";
			clearInterval(interval);
		}else{
			if( typeContent == matchedText){
			typingArea.style.borderColor = "teal";
		}else{
			typingArea.style.borderColor = "red";
		}
		}
		
	}

	function leadingZero(time){
		if(time <= 9){
			time = "0" + time;
		}
		return time;
	}


	function runTimer(){
		timerValue.innerHTML = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
		timer[3]++;
		timer[0] = Math.floor((timer[3]/100/60));
		timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
		timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0]*6000));
	}

	function resetAll(){
		typingArea.value = "";
		typingArea.style.borderColor = "#888";
		clearInterval(interval);
		interval = null;
		timer = [0,0,0,0];
		timerRunningStatus = false;
		timerValue.innerText = "00:00:00";
	}