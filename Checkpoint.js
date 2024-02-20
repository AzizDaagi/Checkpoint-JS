// String Manipulation Functions:
// Reverse a String:
function reverse(str){
    var newStr = "";
    for ( i = str.length - 1 ; i >= 0 ; i--){
        newStr+= str[i]
    }
    return newStr
}
// Count Characters:
function charcount(str){
    return str.length
}
// Capitalize Words:
function capWord(str) {
    var words = str.split(" ")
    var capWords = []

    for ( word of words) {
        capWords.push(word.charAt(0).toUpperCase() + word.slice(1));
    }

    return capWords.join(" ")
}
// Array Functions:
// Find Maximum and Minimum:
function minMax(arr){
    var min = arr[0]
    var max = arr[0]
    for( i=1 ; i<arr.length ; i++){
    if( min>arr[i] ){
        min = arr[i]
    }
    if( max<arr[i] ){
        max=arr[i]
    }
    }
    console.log ([ min , max ])
}
// Sum of Array:
function sumArr(arr){
    var sum = 0
    for( i=0 ; i<arr.length ; i++){
        sum += arr[i]
    }
    return sum
}
// Filter Array: (Filter the pair number)
function filterArr(arr){
    var newArr = []
    for( i=0 ; i<arr.length ; i++){
        if(arr[i] % 2 == 0){
            newArr.push(arr[i])
        }
    }
    return newArr
}
// Mathematical Functions:
// Factorial:
function factorial(n){
    var sum = 1
    for( i=1 ; i<=n ; i++){
        sum*=i
    }
    return sum
}
// Prime Number Check:
function prime(n){
    if( n <= 1 ){
        return false
    }
    for( i=2 ; i<n ; i++ ){
        if(n%i == 0){
            return false
        }else{
            return true
        }
    }
}
// Fibonacci Sequence:
function fibonacci(n){
    var suite = []
    var a = 0
    var b = 1
    for( i=0 ; a < n ; i++){
        suite.push(a)
        var sum = a + b
        a = b
        b = sum
    }
    return suite
}
// Soue2el Lyajoura
function fit(h1,w1,d,h2,w2){
    var holeArea = h2*w2
    if( (h1*w1) == holeArea || (h1*d) == holeArea|| (w1*d) == holeArea ){
        return true
    }else{
        return false
    }
}