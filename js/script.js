/*
Global variables
showPage function will create and insert/append the elements needed to display a "page" of nine students
*/
let itemsPerPage = 9;
const studentList = document.querySelector('.student-list');
const linkList = document.querySelector('.link-list');
let activeButton = document.querySelector('button');


const showPage = (list, page) => {
   let contentHtml = ''
   studentList.innerHTML = contentHtml;


   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

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


// Resources:
// adding and removing classes: https://stackoverflow.com/questions/26736587/how-to-add-and-remove-classes-in-javascript-without-jquery





// Call functions
showPage(data, 1);
addPagination(data);
