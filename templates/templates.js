function managerCard (manager) {
    return `<div class='card'>
    <div class='card-header'>
    ${manager.getRole()}
    </div>
    <div class='card-body'>
    ${manager.getName()}
    ${manager.getId()}
    ${manager.getEmail()}
    ${manager.getOfficeNumber()}
    </div>
</div>`
}

function engineerCard (engineer) {
    return `<div class='card'>
    <div class='card-header'>
    ${engineer.getRole()}
    </div>
    <div class='card-body'>
    ${engineer.getName()}
    ${engineer.getId()}
    ${engineer.getEmail()}
    ${engineer.getGithub()}
    </div>
</div>`
}

function internCard (intern) {
    return `<div class='card'>
    <div class='card-header'>
    ${intern.getRole()}
    </div>
    <div class='card-body'>
    ${intern.getName()}
    ${intern.getId()}
    ${intern.getEmail()}
    ${intern.getSchool()}
    </div>
</div>`
}

function renderHtml(teamMembers) {
    let employees = '';
    for (let i = 0; i < teamMembers.length; i++ ) {
        if (teamMembers[i].getRole() === 'Manager') {
            employees+= managerCard(teamMembers[i]);
        } else if (teamMembers[i].getRole() === 'Engineer') {
            employees+= engineerCard(teamMembers[i]);
        } else {
            employees+= internCard(teamMembers[i]);
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Page</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </head>
    <body>
        <div class='container'>
            <div class='row'>
    
            </div>
        </div>
        <div class='container'>
            <div class='row'>
                ${employees}
            </div>
        </div>
    </body>
    </html>`
}

module.exports = renderHtml;