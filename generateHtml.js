
const generateTeam = (team) => {

    // Generate the engineer
    const generateEngineer = (engineer) => {
        return `
        <div class="col-6 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title font-italic">Engineer - ${engineer.getName()}</h4>
                    <p class="card-text">🆔 - ${engineer.getId()}</p>
                    <a href="mailto:${engineer.getEmail()}" class="card-link"><i class="bi bi-envelope"></i> ${engineer.getName()}'s Email</a><br>
                    <a href="https://www.github.com/${engineer.getGithub()}"  class="card-link"><i class="bi bi-github"></i> ${engineer.getName()}'s Github</a>
                </div>
            </div>
        </div>
        `;
    }

    // Generate the intern
    const generateIntern = (intern) => {
        return `
        <div class="col-6 p-2">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title font-italic">Intern - ${intern.getName()}</h4>
                    <p class="card-text">🆔 - ${intern.getId()}</p>
                    <p class="card-text">Interns School - <i class="bi bi-building"></i> ${intern.getSchool()}</p>
                    <a href="mailto:${intern.getEmail()}" class="card-link"><i class="bi bi-envelope"></i> ${intern.getName()}'s Email</a>
                </div>
            </div>
        </div>
        `
    }
    const html = [];
    html.push(team.filter(employee => employee.getRole() === 'Engineer')
    .map(engineer => generateEngineer(engineer)).join(''))

    html.push(team.filter(employee => employee.getRole() === 'Intern')
    .map(intern => generateIntern(intern)).join(''))
    return html.join('');
}

// generate the entire webpage
module.exports = team => {
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
                    <h4 class="card-title font-italic">Team Manager - ${team[0].getName()}</h4>
                    <p class="card-text">🆔 ${team[0].getId()}</p>
                    <p class="card-text">Office Number - ${team[0].getOfficeNum()}</p>
                    <a href="mailto:${team[0].getEmail()}" class="card-link"><i class="bi bi-envelope"></i> ${team[0].getName()}'s Email</a>
                </div>
            </div>
        </div>
        ${generateTeam(team)}
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
</body>
</html>
`;
}

