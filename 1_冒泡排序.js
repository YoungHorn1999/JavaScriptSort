function bubbleSort(array) {
    var length = array.length
    for(let i=length-1; i>=0; i--){
        for(let j=0; j<i; j++) {
            if(array[j] > array[j+1]) {
                var temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    return array
}
