const generateEngineer = (answers) => {
    return `
        <div class="col-6 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title font-italic">Engineer - ${answers.engineerName}</h4>
                    <p class="card-text">🆔 - ${answers.engineerId}</p>
                    <a href="mailto:${answers.engineerEmail}" class="card-link"><i class="bi bi-envelope"></i> ${answers.engineerName}'s Email</a><br>
                    <a href="github.com/${answers.engineerGithub}" class="card-link"><i class="bi bi-github"></i> ${answers.engineerName}'s Github</a>
                </div>
            </div>
        </div>
        `;
}

const generateIntern = (answers) => {
        return `
        <div class="col-6 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title font-italic">Intern - ${answers.internName}</h4>
                    <p class="card-text">🆔 - ${answers.internId}</p>
                    <p class="card-text">Interns School - <i class="bi bi-building"></i> ${answers.internSchool}</p>
                    <a href="mailto:${answers.internEmail}" class="card-link"><i class="bi bi-envelope"></i> ${answers.internName}'s Email</a>
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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.8.3/font/bootstrap-icons.min.css" integrity="sha512-YzwGgFdO1NQw1CZkPoGyRkEnUTxPSbGWXvGiXrWk8IeSqdyci0dEDYdLLjMxq1zCoU0QBa4kHAFiRhUL3z2bow==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="style.css">
    <title>Build The Team</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid text-center sticky-top">
    <div class="container">
        <h1 class="display-3">Build The Team</h1>
        <p class="lead">This Is The Team You Built In The Console</p>
    </div>
</div>

<div class="container-fluid">
    <div class="row pt-2">
        <div class="col-6 p-2">
            <div class="card card-engineer">
                <div class="card-body">
                    <h4 class="card-title font-italic">Team Manager - ${answers.managerName}</h4>
                    <p class="card-text">🆔 ${answers.managerId}</p>
                    <p class="card-text">Office Number - ${answers.officeNum}</p>
                    <a href="mailto:${answers.managerEmail}" class="card-link"><i class="bi bi-envelope"></i> ${answers.managerName}'s Email</a>
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
