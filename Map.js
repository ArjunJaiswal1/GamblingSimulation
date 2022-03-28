var a= [1,2,3,4,5];
var b = a.map(function(element) 
{
    
    return element * 5;
    
})
    
var c= a.map(function mySum(element) 
{ 
    return element * 10; 
    
 })
    
   var d = a.map(element => element *2); 
    
console.log('b is now evaluated to ',b);
console.log('c is now evaluated to ',c);
console.log('d is now evaluated to ',d);

// using filter

const filterNumbers = a.filter(function(CurrentElement){
    return CurrentElement>2 && CurrentElement <5;
},0);
console.log(filterNumbers);