function changeColor(){

    var hexNumbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexcode = '';

    for(let i =0;i < 6;i++){
        var random_index = Math.floor(Math.random()* hexNumbers.length);
    

        hexcode += hexNumbers[random_index]
    }

    document.getElementById("hex-code").innerHTML = hexcode;

    document.getElementsByTagName("body")[0].style.background = "#" + hexcode;
}