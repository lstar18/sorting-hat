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
document.getElementById('firstYearsName').value = "";
};
const studentPrinter = (names) => {
let domString = '';
for(let i = 0; i < names.length; i++){
    
 domString += '<div id="cardSpacing" class="col-md-6 col-lg-4 card-separation">'
 if (names[i].house === 'Gryffindor') {
     domString += '<div class="card text-white bg-secondary mb-3">';}
else if (names[i].house === 'Hufflepuff') {
    domString += '<div class="card text-white bg-success mb-3">';}
else if (names[i].house === 'Ravenclaw') {
    domString += '<div class="card text-white bg-warning mb-3">';}
else if (names[i].house === 'Slytherin') {
    domString += '<div class="card text-white bg-info mb-3">';}  
 domString += '  <div class="card-body">';
 domString += `    <h5 class="card-title">${names[i].name}</h5>`;
 domString += `    <p class="card-text">${names[i].house}</p>`;
 domString += `<button type="button" id="${names[i].id}" class="expelButton btn btn-light">Expel</button>`
 domString += '  </div>';
 domString += '</div>';
 domString += '</div>';
 }
 
 printToDom('allStudents', domString);
 activateExpel();
 
  };

  const expelStudent = (e) => {
    console.log(e);
    console.log(e.target.id);
    for (let i = 0; i < arrayOfStudents.length; i++){
        if (e.target.id === arrayOfStudents[i].id){
        arrayOfStudents.splice(i, 1);
        };
    };
    studentPrinter(arrayOfStudents);
    console.log(arrayOfStudents);
};
const activateExpel = () => {
    let getButton = document.getElementsByClassName("expelButton");
    for (let i = 0; i < getButton.length; i++){
        getButton[i].addEventListener('click', expelStudent)
    };
};

studentPrinter(students)


