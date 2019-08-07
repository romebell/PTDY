
// Problem

let csv = "id,name,gender,birth,death,parent1,parent2" + "\n" +
"1,Marilyn Parrish,female,1906-12-05,1966-12-05,," +  "\n" +
"2,Rebecca Hobbs,female,1927-01-30,,1,5" +  "\n" +  
"3,Vienna Hartman,female,1953-08-07,2003-04-21,2," +  "\n" +
"4,Ashton Jackson,male,1923-07-12,1988-03-01,1,5" +  "\n" +
"5,Darrel Thorton,male,1892-02-11,1955-03-29,," +  "\n" +
"6,Clark Parrish,male,1951-06-05,2008-06-17,2,";

let today = '2018-12-20';
console.log('-----------------------------');
console.log(ingestFamilyTree(csv, today));
console.log('-----------------------------');

function ingestFamilyTree(csvRows, today) {
  const array = csvToObj(csvRows);
  let ages = [];
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];
    const birth = obj['birth'];
    const death = obj['death'];
    obj['age'] = ageInDays(birth, death, today);
    ages.push(obj.birth);
    obj['descendants'] = 0;
  }

  ages = ages.sort();
  for (let i = 0; i < ages.length; i++) {
    let age = ages[i];
    for (let j = 0; j < array.length; j++) {
      let person = array[j];
      if (age === person.birth) {
        result.push(person);
      }
    }
  }

  result = calculateDescendants(result);
  result = finalDescendants(result);
  return arrayToCSV(result);
}

function calculateDescendants(array) {
  for (let i = 0; i < array.length; i++) {
    let person = array[i];

    for (let j = 0; j < array.length; j++) {
      let otherPerson = array[j];
      if (person.id === otherPerson.parent1 || person.id === otherPerson.parent2) {
        person.descendants += 1;
      }
    }
  }
  return array;
}

function finalDescendants(array) {
  for (let i = 0; i < array.length; i++) {
    let person = array[i];

    for (let j = 0; j < array.length; j++) {
      let otherPerson = array[j];
      if (person.id === otherPerson.parent1 || person.id === otherPerson.parent2) {
        person.descendants += Number(otherPerson.descendants);
      }
    }
  }
  return array;
}


function csvToObj(csvRows) {
  const lines = csvRows.split("\n");
  const result = [];
  const headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    const obj = {};
    const currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentLine[j];
    }
    result.push(obj);
  }

  return result;
}

function arrayToCSV (array) {
  let result = "id,name,gender,birth,death,parent1,parent2,age,descendants" + "\n";

  for (let i = 0; i < array.length; i++) {
    let obj = array[i];
    let id = obj['id'] + ',';
    let name = obj['name'] + ',';
    let gender = obj['gender'] + ',';
    let birth = obj['birth'] + ',';
    let death = obj['death'] + ',';
    let parent1 = obj['parent1'] + ',';
    let parent2 = obj['parent2'] + ',';
    let age = obj['age'] + ',';
    let descendants = String(obj['descendants']);
    let answer = id +  name + gender + birth + death + parent1 + parent2 + age + descendants;
    
    result += answer;
    if (i === array.length - 1) {
      continue;
    } else {
      result += '\n'
    }
  }

  return result;
}


function ageInDays(birth, death, today) {
  const msPerDay = 1000 * 60 * 60 * 24;
  today = new Date(today);
  
  if (birth === "") {
    return String(-1);
  } else if (death === '') {
    birth = new Date(birth);
    return String((today - birth) / msPerDay);
  } else {
    birth = new Date(birth);
    death = new Date(death);
    return String((death - birth) / msPerDay);
  }
}