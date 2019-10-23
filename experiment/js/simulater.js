function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}








var a, b, c;
        var outputText;
        document.getElementById("frm").addEventListener("submit",function(e){
            validate(e);
        });
        function validate(e) {
            // get the input
            a = document.forms["input_form"]["aterm"].value;
            b = document.forms["input_form"]["bterm"].value;
            c = document.forms["input_form"]["cterm"].value;
            console.log("a :"+a);
            console.log("b :"+b);
            console.log("c :"+c);
            // validate a, b and c
            var x = 0;
            if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)){
            if (false) {
                outputText = "<em>a</em> cannot equal zero!";
            } else if (a!=""&&b!="") {
                
                x = ((Math.pow(b, 2)) + (Math.pow(a,2)));
                document.forms["input_form"]["cterm"].value=Math.sqrt(x);
            } else if (c!=""&&a!="") {
                
                x = ((Math.pow(c, 2)) - (Math.pow(a,2)));

                document.forms["input_form"]["bterm"].value=Math.sqrt(x);
            } else if(c!="" && b!="") {
               
                x = (Math.pow(c, 2)) - (Math.pow(b,2));
                console.log("x="+x);
                document.forms["input_form"]["aterm"].value=Math.sqrt(x);
            }
        }
                // calculate the result using x = (-b +- sqrt(b^2 - 4ac)) / 2a
                outputText = "For the equation answer is (a or b or c )&#x00B2 =   <strong>" + x + "</strong>"// + (a == 1 ? "" : a) + "x\u00B2 + " + (b == 1 ? "" : b) + "x + " + c + " = 0</strong>, x can equal <strong>" + x + "</strong> or <strong>  </strong>";
            
            // output the result (or errors)
            document.getElementById("output_text").innerHTML = outputText;
            e.preventDefault();
        }