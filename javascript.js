// ==========signup===========



<script>
          function myForm() {
			var uName, pWord, eMail, cPword, text;
			eMail = document.getElementById("Email").value;
			uName = document.getElementById("Uname").value;
			pWord = document.getElementById("Pword").value;
			cPword = document.getElementById("Cpword").value; 
			if (uName == '' && eMail == '' && pWord == '' && cPword == '') {
              alert("Kindly Input Your Login Details")
            } else if (eMail.length == 0) {
				alert('Email is required!')
			} else if (uName.length == 0) {
				alert('Username is required!')
			} else if (pWord.length < 8) {
				if (pWord.length == 0) {
				alert('Password is required!')
				} else{
					alert('Password must contain 8 characters!')
				}
			} else if (cPword.length == 0) {
				alert('Please confirm your password!')
			} else if (pWord !== cPword) {
            	alert('Password do not match!')
            } else{
            	text = "<p>Registration successful user " + uName + "!</p>";
            	  document.getElementById("response").innerHTML = text;
            }
          }
		</script>



 /// ==========login===========
 



			<script>
          function myForm() {
			var uName = document.getElementById("Uname").value;
			var pWord = document.getElementById("Pword").value; 
            var text;
            if (uName == '' && pWord == ''){
            	alert("Kindly Input Your Login Details")
            }else if (pWord.length < 8) {
				if (pWord.length == 0) {
				alert('Password is required to Login!')
				} else{
					alert('Password must contain 8 characters!')
				}
	        }else{
            	text = "<p>Welcome User " + uName + "!</p>";
            	document.getElementById("response").innerHTML = text;
            }    
          }
		</script>