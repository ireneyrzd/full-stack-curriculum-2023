function findLongestString(arr) {
    if (arr.length === 0) {
      return null;
    }
  
    let longestString = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i].length > longestString.length) {
        longestString = arr[i];
      }
    }
  
    return longestString;
}
  
const stringArray = ["apple", "banana", "cherry", "date"];
const longest = findLongestString(stringArray);
console.log("Longest string:", longest);  

const calculateRectangleArea = (width, height) => width * height;

const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
console.log("Rectangle area:", area);


var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {n
        title: 'Mockingjay',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

function displayReadingStatus(books) {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const status = book.readingStatus ? "already read" : "not yet read";
    console.log(`Book: ${book.title} by ${book.author}, Status: ${status}`);
  }
}

displayReadingStatus(library);
