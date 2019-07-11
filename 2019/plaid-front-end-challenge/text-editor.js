
// Operation Types
const INSERT = 'INSERT' // appends text
const DELETE = 'DELETE' // removes one character from the end
const UNDO = 'UNDO' // reverses the last operation
const REDO = 'REDO' // applies the previously undone operation


class TextEditor {
  input (operation) {
    // operation { type: string, text: string }
    // type - will match one of the Operation Types
    // text - is used for the INSERT operation
  }

  print () {
    // should return a string
  }
    
}




 // DON'T EDIT THIS SOLUTION FUNCTION
const solution = operations => {
  const parseOperations = operations => JSON.parse(operations.replace('"', '"'));

  const textEditor = new TextEditor();

  parseOperations(operations).forEach(operation => textEditor.input(operation));
  return textEditor.print();
};


function print() {
  return 'hello world';
}


// Operation Types
const INSERT = 'INSERT' // appends text
const DELETE = 'DELETE' // removes one character from the end
const UNDO = 'UNDO' // reverses the last operation
const REDO = 'REDO' // applies the previously undone operation

// const operations = [
//     { type: INSERT, text: 'a'},
//     { type: INSERT, text: 'b'},
//     { type: INSERT, text: 'c'} 
// ]



class TextEditor {
     const result = [];

  
  function input (operation) {
      switch(operation.type) {
          case 'INSERT':
              result.push(operation.text);
          case 'DELETE':
              if (result.length === 0) {
                  continue;
              }
              result.pop();
          case 'UNDO':
              // code
          case 'REDO':
              
      }
      if (operation.type === 'INSERT') {
          words += operation.text;
      }

      
    // operation { type: string, text: string }
    // type - will match one of the Operation Types
    // text - is used for the INSERT operation
    
  }

  function print () {
    // should return a string
//     console.log(word);
//       console.log(operation.text);
      return words;
  }
    
}




 // DON'T EDIT THIS SOLUTION FUNCTION
const solution = operations => {
  const parseOperations = operations => JSON.parse(operations.replace('"', '"'));

  const textEditor = new TextEditor();

  parseOperations(operations).forEach(operation => textEditor.input(operation));
  return textEditor.print();
};
