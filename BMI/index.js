function BMI() {

    let Weight = document.getElementById('kg').value;
    console.log(Weight);
    let Height = document.getElementById('cm').value;
    console.log(Height);

    let ans = (Weight / ((Height * Height) / 10000)).toFixed(2);
    console.log(ans);
    document.getElementById('ans').innerHTML = ans;


    let result;
    if (Height == " " || Weight == "" || isNaN(Height) || isNaN(Weight)) {

        document.getElementById('result').innerHTML = " ⚠️INVALID INPUT⚠️"
        document.getElementById('ans').innerHTML = ""
    }
    else {
        if (ans <= 18.5) {
            result = "You are Under-Weight 🙄!"
            console.log(result);
            document.getElementById('result').style.color = "yellow";
            document.getElementById('ans').style.color = "yellow";
            document.getElementById('result').innerHTML = result;
        }
        else if (ans > 18.5 && ans <= 24.9) {
            console.log(ans);
            result = "You are Normal-Weight 🤩!"
            document.getElementById('result').style.color = "#00FF00";
            document.getElementById('ans').style.color = "#00FF00";
            console.log(result);
            document.getElementById('result').innerHTML = result;
        }
        else if (ans < 29.9 && ans > 25.0) {
            result = "You are Over-Weight 😯!"
            console.log(result);
            document.getElementById('result').style.color = "red";
            document.getElementById('ans').style.color = "red";
            document.getElementById('result').innerHTML = result;
        }
        else if (ans > 130.0) {
            result = "You are Obese 😞!"
            document.getElementById('result').style.color = "red";
            document.getElementById('ans').style.color = "red";
            console.log(result);
            document.getElementById('result').innerHTML = result;
        }
    }
}

var input = document.getElementById("cm");
var input1 = document.getElementById("kg");
const btn = document.getElementById("reset");
var rs = document.getElementById('result');
let Answer = document.getElementById('ans')
btn.addEventListener('click', () => {
    input.value = "";
    input1.value = "";
    rs.innerHTML = "";
    Answer.innerHTML = " "
})
