let someText = document.getElementsByName("readMore");
let text = document.getElementsByName("paragraph");

let portfolioTexts = [];

for(let i = 0; i < text.length; i++)
{
	portfolioTexts[i] = text[i].textContent;
}

let i = 0;

function changeText(allTexts) {
	if(i < allTexts.length)
	{
		text[0].innerHTML = allTexts[i + 1];
		i += 1;
	}
	
	if(i == 0)
	{
		someText[1].style.visibility = "hidden";
	}
	else {
		someText[1].style.visibility = "visible";
	}
	
	if(i + 1 == allTexts.length)
	{
		someText[0].style.visibility = "hidden";
	}
	else {
		someText[0].style.visibility = "visible";
	}
}

function prevText(allTexts){
	if(i > 0)
	{
		text[0].innerHTML = allTexts[i - 1];
		i -= 1;
	}
	
	if(i == 0)
	{
		someText[1].style.visibility = "hidden";
	}
	else {
		someText[1].style.visibility = "visible";
	}
	
	if(i + 1 == allTexts.length)
	{
		someText[0].style.visibility = "hidden";
	}
	else {
		someText[0].style.visibility = "visible";
	}
}

someText[1].style.visibility = "hidden";
someText[0].onclick = function(){changeText(portfolioTexts)};
someText[1].onclick = function(){prevText(portfolioTexts)};
