
function change(userInput){
    inputString = userInput;
    



}

function clicker(){
    empty()
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString.charAt(i);
    }
updateView()
}

function empty(){
reversedString = "";

}