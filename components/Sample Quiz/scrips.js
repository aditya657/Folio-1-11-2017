function submitAnswers()
{
	var total=5;
	var score=0;

	var q1= document.forms["quizform"]["q1"].value;
	var q2= document.forms["quizform"]["q2"].value;
	var q3= document.forms["quizform"]["q3"].value;
	var q4= document.forms["quizform"]["q4"].value;
	var q5= document.forms["quizform"]["q5"].value;



	for(var i=1;i<=total;i++)
	{
		if (eval('q'+i)==null || eval('q'+i)=="")
		{
			alert("Please answer the question" + i);
			return false;
		
		}
	}


	var ans = ['b', 'b', 'b', 'b', 'b'];

	for(var i=1;i<=total;i++)
	{
		if (eval('q'+i)===ans[i-1])
		{
			score++;
		}
	}

	var result = "<h3>Your score is "+ score +" of " + total +" </h3>";
	document.getElementById('result').innerHTML = result;
	return false;

	 // if (q1==null || q1==' ')
	 // {
	 // 	alert('Please answer the Question 1');
	 // 	return false;		
	 // }

	// if (q2 == null || q2 == " ")
	// {
	// 	alert("Please answer the Question 2");
	// 	return false;
	// }
	// }
	// if (q3 == null || q3 == " ")
	// {
	// 	alert("Please answer the Question 3");
	// 	return false;
	// }
	// }
	// if (q4 == null || q4 == " ")
	// {
	// 	alert("Please answer the Question 4");
	// 	return false;
	// }
	// }
	// if (q5 == null || q5 == " ")
	// {
	// 	alert("Please answer the Question 5");
	// 	return false;
	// }
	
}

