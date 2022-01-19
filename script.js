<script>
    var myInput = document.getElementById("psw");

    myInput.onkeyup = function () {
        var k = 0;
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
            k++;
        }
        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
            k++;
        }
        var numbers = /[0-9]/g;
        if (myInput.value.match(numbers)) {
            k++;
        }
        switch (k) {
            case 0:
                document.getElementById("message").style.color = "green";
                document.getElementById("message").innerHTML = "green";
                break;
            case 1:
                document.getElementById("message").style.color = "yellow";
                document.getElementById("message").innerHTML = "yellow";
                break;

            case 2:
                document.getElementById("message").style.color = "orange";
                document.getElementById("message").innerHTML = "orange";
                break;

            case 3:
                document.getElementById("message").style.color = "red";
                document.getElementById("message").innerHTML = "red";
                break;
        }

    };
    </script>