
 

function show()	{
	name = document.getElementsByName("name")[0].value;
	email = document.getElementsByName("email")[0].value;
	message= document.getElementsByName("message")[0].value;
	console.log(name.innerHTML);
	alert(	"Thanks! \r" +
			name + "\r" +
		  	email + "\r" +
		  	message);
}