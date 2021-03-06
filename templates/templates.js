function managerCard(manager) {
  return `<div class="col">
  <div class='card bg-info mb-3 text-center border border-3 border-warning' style="padding: 1rem; margin: 2rem">
    <div class='card-header fw-bold'>
      <h1>${manager.getRole()}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-binoculars" viewBox="0 0 16 16">
        <path d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882V2.5zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5h-1zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V4zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5V3zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V14z"/>
      </svg>
    </div>
    <div class='card-body p-3 mb-2 text-white bg-secondary border-3 border-warning' >
      <h3 class="card-title">${manager.getName()}</h3>
      <p class="card-text">ID: ${manager.getId()}</p>
      <p><a href="mailto:${manager.getEmail()}" class="card-text">${manager.getEmail()}</a></p>
      <p class="card-text">Office Number: ${manager.getOfficeNumber()}</p>
    </div>
  </div>
</div>`;
}

function engineerCard(engineer) {
  return `<div class="col">
  <div class='card bg-info mb-3 text-center border border-3 border-warning' style="padding: 1rem; margin: 2rem">
    <div class='card-header fw-bold'>
      <h1>${engineer.getRole()}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z"/>
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z"/>
      </svg>
    </div>
    <div class='card-body p-3 mb-2 text-white bg-secondary border-3 border-warning'>
      <h3 class="card-title">${engineer.getName()}</h3>
      <p class="card-text">ID: ${engineer.getId()}</p>
      <p><a href="mailto:${engineer.getEmail()}" class="card-text">${engineer.getEmail()}</a></p>
      <p><a href="https://github.com/${engineer.getGithub()}" class="card-text">${engineer.getGithub()}</a></p>
    </div>
    </div>
</div>`;
}

function internCard(intern) {
  return `<div class="col">
  <div class='card bg-info mb-3 text-center border border-3 border-warning' style="padding: 1rem; margin: 2rem">
    <div class='card-header fw-bold'>
      <h1>${intern.getRole()}</h1>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
      </svg>
    </div>
    <div class='card-body p-3 mb-2 text-white bg-secondary border-3 border-warning'>
      <h3 class="card-title">${intern.getName()}</h3>
      <p class="card-text">ID: ${intern.getId()}</p>
      <p><a href="mailto:${intern.getEmail()}" class="card-text">${intern.getEmail()}</a></p>
      <p class="card-text">School:${intern.getSchool()}</p>
    </div>
    </div>
</div>`;
}

function renderHtml(teamMembers) {
  let employees = ``;
  for (let i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].getRole() === "Manager") {
      employees += managerCard(teamMembers[i]);
    } else if (teamMembers[i].getRole() === "Engineer") {
      employees += engineerCard(teamMembers[i]);
    } else {
      employees += internCard(teamMembers[i]);
    }
  }

  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Page</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class='container-fluid'>
            <div class='row'>
                <div class="col-12 jumbotron mb-3 text-center bg-secondary text-white">
                    <h1>My Team</h1>
                </div>
            </div>
        <div class='container'>    
            <div class='row'>
                ${employees}
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = renderHtml;
