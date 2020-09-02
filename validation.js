// Java Script

var elementi = document.getElementsByTagName("input");

	for(var i =0; i<elementi.length;i++)
	{
		if(elementi[i].type!="submit"){
			elementi[i].onblur = validateInput;
	}
	}
	document.getElementById("qualifications").onblue=validateInput;


function validateInput(e)
{
	
	var element = e.target;  // kao sto je this u javi ovdje koristimo target npr this e 
	if(element == null)
		element=e;
	var valid = true;
	if(element.value=="")
		valid == false;
	else 
	{
		switch (element.id){
			case "username":
				if(element.value.length < 3)
						valid=false;
					break;
			case "password": 
				var regexLetter = /[a-zA-Z]/;
				var regexNumber = /[0-9]/;
				valid = regexLetter.test(element.value) && regexNumber.test(element.value); // Regularni izraz (skraćeno kao regex ili regexp; također se naziva i racionalni izraz) je niz znakova koji definiraju obrazac pretraživanja. 
				                                                                            //Obično se takvi obrasci koriste algoritmima za pretraživanje stringova za "pronađite" ili "pronađite i zamijenite" na nizovima ili za provjeru unosa
				break;
				case "password_confirm": 
				if(element.value!= document.getElementById("password").value)
					valid=false;
				break;
				
					
		}
	}
	
	if(!valid) 
		element.classList.add("error");
		
	else 
		element.classList.remove("error");
	return valid;
}

function clear()
{
	for(var i =0; i<elementi.length;i++)
	{
		if(elementi[i].type!="submit")
		{
			elementi[i].value = "";
			elementi[i].classList.remove("error");
		}
	}
}


function validateForm()
{
	var valid = true; 
	for(var i = 0; i<elementi.length;i++)
	{
		
			if(!validateInput(elemenit[i]))
				valid = false;
		}
		if(!validateInput(document.getElementById("qualifications")))
			valid=false;
		
	return valid;
}