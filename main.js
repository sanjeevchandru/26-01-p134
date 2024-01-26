document.write("100.to check if there is at least one element in two given sorted arrays of integers."+"<br>");
function test100(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        if(arr2.indexOf(arr1[i])!=-1){
            return true;
        }   
    }
    return false;
}
document.write("The array's are :[1,2,4],[2,3,5], ans :"+test100([1,2,4],[2,3,5])+"<br><br>");