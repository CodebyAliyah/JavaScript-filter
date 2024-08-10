
// ***** filter ***** //

const myNumbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// let newNums = myNumbers.filter( (item) => {
//   return item > 5 ;
// } )

// console.log(newNums) 


const newNums = []
myNumbers.forEach( (item) => {
  if (item >5) {
    newNums.push(item)
  }
} )

console.log(newNums)



const userBooks = [
  {
    Title : "Book 1", Genre : "Science" , Publish : 1992 , Edition : 2002 ,
  } ,
  {
    Title : "Book 2", Genre : "English" , Publish : 1994 , Edition : 2006 ,
  } ,
  {
    Title : "Book 3", Genre : "Math" , Publish : 1993 , Edition : 1998 ,
  } ,
  {
    Title : "Book 4", Genre : "Chemistry" , Publish : 1990 , Edition : 2002 ,
  } ,
  {
    Title : "Book 5", Genre : "Staitices" , Publish : 2009 , Edition : 2015 ,
  } ,
  {
    Title : "Book 6", Genre : "Computer" , Publish : 2002 , Edition : 2019 ,
  } ,
]


// let bookNums = userBooks.filter ( (item) => {
//   return item.Publish >= 2000
// } )

let bookNums = userBooks.filter( (item) => {
  return item.Genre === "Science" ;
} )

console.log (bookNums)


























