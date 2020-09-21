function selectionSort(array) {
    var length = array.length
    for(let i=0; i<length; i++) {
        var min = i
        for(let j=i+1; j<length; j++) {
            if(array[min] > array[j]){
                min = j
            }
        }
        var temp = array[i]
        array[i] = array[min]
        array[min] = temp
    }
    return array
}
