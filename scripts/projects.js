// Project Page JS

let projects = document.getElementsByName("card");
let filterBtn = document.getElementsByName("filter-btn");

function display1() {
	for(let i = 0; i < projects.length; i++)
	{
		projects[i].style.display = "block";
	}
}

function display2() {
	for(let i = 0; i < projects.length; i++)
	{
		if(i != 3)
		{
			projects[i].style.display = "none";
		}
	}
	
	projects[3].style.display = "block";
}

function display3() {
	for(let i = 0; i < projects.length; i++)
	{
		if(i == 1 || i == 2)
			continue;
		projects[i].style.display = "none";
	}
	
	projects[1].style.display = "block";
	projects[2].style.display = "block";
}

function display4() {
	for(let i = 0; i < projects.length; i++)
	{
		if(i == 4 || i == 5)
			continue;
		projects[i].style.display = "none";
	}
	projects[4].style.display = "block";
	projects[5].style.display = "block";
}

function display5() {
	for(let i = 1; i < projects.length; i++)
	{
		projects[i].style.display = "none";
	}
	projects[0].style.display = "block";
}

filterBtn[0].onclick = function() {display1();};

filterBtn[1].onclick = function() {display2();};

filterBtn[2].onclick = function() {display3();};

filterBtn[3].onclick = function() {display4();};

filterBtn[4].onclick = function() {display5();};