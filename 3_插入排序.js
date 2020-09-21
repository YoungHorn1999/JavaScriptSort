function insertionSort(array) {
    var length = array.length
    for(let i=0; i<length; i++) {
        var temp = array[i]
        var j = i
        while(array[j-1] > temp && j>0){
            array[j] = array[j-1]
            j--
        }
        array[j] = temp
    }
    return array
}
