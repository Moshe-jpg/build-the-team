const generateEngineer = (results) => {
    return `
    <div class="col-6">
        <div class="card d-flex align-items-center">
            <div class="card-body">
            <h4 class="card-title">Engineer - ${results.engineerName}</h4>
            <p class="card-text">Engineer ID - ${results.engineerId}</p>
            <a href="mailto:${results.engineerEmail}" class="card-link">${results.engineerName}'s Email</a>
            <a href="github.com/${results.engineerGithub}" class="card-link">${results.engineerName}'s Github</a>
        </div>
    </div>
    `;
}

const generateIntern = (results) => {
    return `
    <div class="col-6">
        <div class="card d-flex align-items-center">
            <div class="card-body">
            <h4 class="card-title">Intern - ${results.internName}</h4>
            <p class="card-text">Intern ID - ${results.internId}</p>
            <p class="card-text">Interns School - ${results.internSchool}</p>
            <a href="mailto:${results.internEmail}" class="card-link">${results.internName}'s Email</a>
        </div>
    </div>
    `
}


function generateHtml(answers, results) {
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
<div class="jumbotron jumbotron-fluid text-align-center">
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
        ${generateEngineer(results)}
        ${generateIntern(results)}
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
`;
}

module.exports = generateHtml;
