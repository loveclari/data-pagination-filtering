/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
let itemsPerPage = 9;
let studentList = document.querySelector('.student-list');
studentList.innerHTML = '';
let contentHtml = ''


const showPage = (list, page) => {
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
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

const addPagination = (list) => {
   let numberPagButtons = list.length / itemsPerPage;
   const linkList = document.querySelector('.link-list');
   let link = ''
   linkList.innerHTML = link;
   for (let i = 0; i <= numberPagButtons; i++) {
      link += `
      <li>
         <button type="button">${i}</button>
      </li>`;  
   }
   linkList.insertAdjacentHTML('beforeend', link);
   console.log(link)
}





// Call functions
showPage(data,1);
addPagination(data);
