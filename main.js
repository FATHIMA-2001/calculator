// display in calculator screen

function displaycontent(content){
    result.value += content
}

// clear screen

function clearscreen(){
    result.value = ""
}

// backspace

function removedata(){
    result.value =result.value.slice(0,-1)
}

// perfome operations

function performoperations(){
    result.value = eval(result.value)
}