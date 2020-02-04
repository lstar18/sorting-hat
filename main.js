const arrayOfStudents = [
    
]


const hideJumbo = () => {
    document.getElementById('hogwartsJumbo').classList.add('invisible');
    document.getElementById('studentForm').classList.remove('invisible');
};
document.getElementById("startSorting").addEventListener('click', hideJumbo);
const generateStudent = () => {
    let student = document.getElementById('firstYearsName').value;
    let arrOfHouses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];
    let randomHouse = arrOfHouses[Math.floor(Math.random() * arrOfHouses.length)];
    arrayOfStudents.push(person = {name: student, house: randomHouse});
    createIdForObject(person);
    console.log(arrayOfStudents);
    studentPrinter(arrayOfStudents);
};
let objId = 0;
const createIdForObject = (obj) => {
   if (obj.id == null) {
       obj.id = 'student' + objId++
   }
   return obj.id;
};
document.getElementById('sortButton').addEventListener('click', generateStudent);

const students = []
const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML = textToPrint
};
const studentPrinter = (names) => {
let domString = '';
for(let i = 0; i < names.length; i++){
 domString += '<div class="col-md-6 col-lg-4 card-separation">'
 domString += '<div class="card">';
 domString += '  <div class="card-body">';
 domString += `    <h5 class="card-title">${names[i].name}</h5>`;
 domString += `    <p class="card-text">${names[i].house}</p>`;
 domString += `<button type="button" id="expel--${names[i].id}" class="btn btn-light">Expel</button>`
 domString += '  </div>';
 domString += '</div>';
 domString += '</div>';
 }
 document.getElementById('sortButton').addEventListener('click', expelStudent);
const expelStudent = () => {
    
}
 printToDom('allStudents', domString);
  };
studentPrinter(students)


