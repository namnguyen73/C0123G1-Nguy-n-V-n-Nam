C =[]
function myFunction(A,B){
    for(i=0;i < A.length; i++){
        for(j=0; j <B.length; j++){
            if(A[i]==B[j]){
                C.push(A[i])
            }
        }
    }
    
}
A=[2,3,4]
B=[2,4,7]
myFunction(A,B)
console.log(C)