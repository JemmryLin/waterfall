window.onload = function(){
	imgLocation("container","box");
}

function jump(){
	console.log("新增的jump函数");
}

function imgLocation(parent,content){
	var cparent = document.getElementById(parent);
	var ccontent = getChildElements(cparent,content);
	var imgWidth = ccontent[0].offsetWidth;
	var num = parseInt(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText = "width:"+imgWidth*num+"px";
	var boxHeightArr = [];
	for(var i=0;i<ccontent.length;i++){
		if(i<num){
			boxHeightArr[i] = ccontent[i].offsetHeight;
		}else{
			var minHeight = Math.min.apply(null,boxHeightArr);
			var minIndex = getMinHeightLocation(boxHeightArr,minHeight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minHeight + "px";
			ccontent[i].style.left = ccontent[minIndex].offsetLeft + "px";
			boxHeightArr[minIndex] = boxHeightArr[minIndex] + ccontent[i].offsetHeight;
		}
	}
}

function getMinHeightLocation(boxHeightArr,minHeight){
	for(var i in boxHeightArr){
		if(boxHeightArr[i] == minHeight){
			return i;
		}
	}
}


function getChildElements(parent,content){
	var contentArr = [];
	var allcontent = parent.getElementsByTagName("*");
	for(var i=0;i<allcontent.length;i++){
		if(allcontent[i].className == "box"){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}

