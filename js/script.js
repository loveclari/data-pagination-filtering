/*
Global variables
showPage function will create and insert/append the elements needed to display a "page" of nine students
*/
let itemsPerPage = 9;
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
let activeButton = document.querySelector('button');
const header = document.querySelector(".header");


const showPage = (list, page) => {

   // attaching data to html

   let contentHtml = ''
   studentList.innerHTML = contentHtml;

   // setting up the page number variables

   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   // looping through the list based on number of pages, creating html dynamically, attaching to the html

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex ) {
         contentHtml += `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src= ${list[i].picture.large} alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `;        
      }      
   }
   studentList.insertAdjacentHTML('beforeend', contentHtml);    
}

/*
addPagination function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {

   //getting number of pages:

   let numberPagButtons = Math.ceil(list.length / itemsPerPage);

   //appenfing to HTML

   let link = ''
   linkList.innerHTML = link;


   //looping through number of pages and attaching elements

   for (let i = 1; i <= numberPagButtons; i++) {
      link += `
      <li>
         <button type="button">${[i]}</button>
      </li>`;  
   }

   //appending to html

   linkList.insertAdjacentHTML('beforeend', link);

   let activeButton = linkList.querySelector('button');
   activeButton.className = 'active';

   //adding an eventlistener on the click searching for a specific target element

   linkList.addEventListener ('click', (e) => {

      const pageNumber = e.target.textContent;
      let button = document.querySelector('.active');

      if(e.target.tagName === 'BUTTON') {

         button = button.classList.remove('active');
         e.target.classList.add('active');

         showPage(list, pageNumber);
      }

   });
}

//Adding the searchbar dynamically


const showSearch = () => {

   let html = document.createElement('div'); 

   html.innerHTML = `
      <label for="search" class="student-search">
         <span>Search by name</span>
         <input id="search" placeholder="Search by name...">
         <button type="button" id="submit"><img src="img/icn-search.svg" alt="Search icon"></button>
      </label>`;  
   header.appendChild(html);

}

const performSearch = (searchInput, list) => {

   // creates a new array with searched names

   let searchedStudentList =[];

   // looping through the data
   
   for(let i=0; i < list.length; i++) {

      const namesSearched = `${list[i].name.first.toLowerCase()} ${list[i].name.last.toLowerCase()}`;
      
      if(namesSearched.includes(searchInput.value.toLowerCase())){
         searchedStudentList.push(list[i]);
      }     
   }

   // adding the pages and pagination numbers congruent with data

   showPage(searchedStudentList, 1);
   addPagination(searchedStudentList);

}

 // Call functions
showPage(data, 1);
addPagination(data);
showSearch()


// event variables initializers

const search = document.querySelector('#search');
const submit = document.querySelector('#submit'); 

// event listeners for search and returning specific data

submit.addEventListener('click', (event) => {
   event.preventDefault();
   performSearch(search, data);
  
 });
 
 /* submit listener */
 search.addEventListener('keyup', () => {
   performSearch(search, data);
 
 });


// Resources:
// adding and removing classes: https://stackoverflow.com/questions/26736587/how-to-add-and-remove-classes-in-javascript-without-jquery
// using includes: https://stackoverflow.com/questions/45065247/javascript-if-statement-using-includes
// https://github.com/loveclari/simple-search
// Help form Rachel Johnson

