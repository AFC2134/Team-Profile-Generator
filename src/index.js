const fs = require('fs');
const indexJS = require('../index')

// fucntion renderManager() {
    
// }

const generateMarkdown = (allEmployees) => {
    console.log(allEmployees)
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
    </head>
    
    <body>
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <span class="navbar-brand mb-0 h1">Team Members</span>
            </div>
        </nav>
    
        <div>
           
        ${generateCards(allEmployees)}
    
    
        </div>
    
    </body>
    
    </html>
    `;
};
const generateCards = (allEmployees) => {
    console.log('generateCards')
    console.log(allEmployees)
    console.log(allEmployees[0].name)
    function displayExtraInfo(teamMember) {
        if(teamMember.constructor.name === 'Manager') {
            return `Office number: ${teamMember.number}`
        } else if(teamMember.constructor.name === 'Engineer') {
            return `Github: <a href= "https://github.com/${teamMember.gitHub}" target="_blank">${teamMember.gitHub}</a>`
        } else if(teamMember.constructor.name === 'Intern'){
            return `School: ${teamMember.school}`
        }
    }
    let htmlCard = ''
    for(let i = 0; i < allEmployees.length; i++) {
      htmlCard += `<div class="card" style="width: 18rem;">
       <div class="card-body">
           <h5 class="card-title">${allEmployees[i].name}</h5>
           <h6 class="card-subtitle mb-2 text-muted">${allEmployees[i].constructor.name}</h6>
           <p class="card-text">
           id: ${allEmployees[i].Id}
           Email: <a href="mailto:${allEmployees[i].email}">${allEmployees[i].email}</a>
           ${displayExtraInfo(allEmployees[i])}
           </p>
       </div>` 
    }
    return htmlCard
}

module.exports = generateMarkdown;