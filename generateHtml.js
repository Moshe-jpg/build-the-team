const generateEngineer = (answers) => {
    return `
        <div class="col-6">
            <div class="card d-flex align-items-center">
                <div class="card-body">
                    <h4 class="card-title">Engineer - ${answers.engineerName}</h4>
                    <p class="card-text">Engineer ID - ${answers.engineerId}</p>
                    <a href="mailto:${answers.engineerEmail}" class="card-link">${answers.engineerName}'s Email</a>
                    <a href="github.com/${answers.engineerGithub}" class="card-link">${answers.engineerName}'s Github</a>
                </div>
            </div>
        </div>
        `;
}

const generateIntern = (answers) => {
        return `
        <div class="col-6">
            <div class="card d-flex align-items-center">
                <div class="card-body">
                    <h4 class="card-title">Intern - ${answers.internName}</h4>
                    <p class="card-text">Intern ID - ${answers.internId}</p>
                    <p class="card-text">Interns School - ${answers.internSchool}</p>
                    <a href="mailto:${answers.internEmail}" class="card-link">${answers.internName}'s Email</a>
                </div>
            </div>
        </div>
        `
}


function generateHtml(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Build The Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid text-center">
    <div class="container">
        <h1 class="display-3">Build The Team</h1>
        <p class="lead">This Is The Team You Built In The Console</p>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-6">
            <div class="card d-flex align-items-center">
                <div class="card-body">
                    <h4 class="card-title">Team Manager - ${answers.managerName}</h4>
                    <p class="card-text">Manager ID - ${answers.managerId}</p>
                    <p class="card-text">Office Number - ${answers.officeNum}</p>
                    <a href="mailto:${answers.managerEmail}" class="card-link">${answers.managerName}'s Email</a>
                </div>
            </div>
        </div>
        ${generateEngineer(answers)}
        ${generateIntern(answers)}
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
`;
}

module.exports = generateHtml;
