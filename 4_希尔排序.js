function shellSort(array) {
    var length = array.length
    var gap = Math.floor(length/2)
    while(gap >= 1) {
        for(let i=gap; i<length; i++) {
            var temp = array[i]
            var j = i
            while(array[j-gap] > temp && j>gap-1) {
                array[j] = array[j-gap]
                j -= gap
            }
            array[j] = temp
        }
        gap = Math.floor(gap/2)
    }
    return array
}
