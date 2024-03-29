     const generateManager = manager => {
        return `
        <div class="card employee-card col-3 bg-dark">
        <div class="card-header text-light">
            <h2 class="card-title">${manager.getName()}</h2>
            <h3 class="card-title">${manager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID:${manager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
    `}


const generateEngineer = engineer => {
    return `
    <div class="card employee-card col-3 bg-dark">
    <div class="card-header text-light">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
        </ul>
    </div>
    </div>
    `;
};

const generateIntern = intern => {
    return `
    <div class="card employee-card col-3 bg-dark">
    <div class="card-header text-light">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID:${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    </div>
    `;
};

const employeeCards = teamArray => {
    let employeeHtml = "";
    for(i = 0; i < teamArray.length; i++) {
        if(teamArray[i].getRole() === "Manager") {
            employeeHtml += generateManager(teamArray[i])
        }
        if(teamArray[i].getRole() === "Engineer") {
            employeeHtml += generateEngineer(teamArray[i])
        }
        if(teamArray[i].getRole() === "Intern") {
            employeeHtml += generateIntern(teamArray[i])
        }
    }
    return employeeHtml;
}

const template = data  => {
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Team Profile Generator!</title>
</head>
<body>
    <header class="row">
        <div class="col-12 jumbotron mb-3 bg-dark">
            <h1 class="text-center text-light">My Team!</h1>
        </div>
    </header>
    <main class="container">
    <div class="row justify-content-around" id="cardrow">
    ${employeeCards(data)}
    </div>
    </main>
</body>

</html>`
}

module.exports = template;

