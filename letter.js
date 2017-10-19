
exports.letter = letter;

//This function and file will determine if a letter is shown as an underscore or a letter

function letter(value){
    this.value = value;
    this.show = false;
    if (this.value == " "){
        this.show = true;
    }
}

letter.prototype.printInfo = function(){
    if(this.show){
        return this.value;
    }
    return "_ ";
}

