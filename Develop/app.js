const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

let team = [];

function userInput() {
    return inquirer.prompt([


        {
            type: "input",
            message: "Employee Name",
            name: "name"

        },
        {
            type: "input",
            message: "Employee Email",
            name: "email"

        },
        {
            type: "input",
            message: "Employee ID",
            name: "id"

        },
        {
            type: "list",
            Message: "Select one of the following roles.",
            name: "role",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
            type: "input",
            name: "school",
            message: "What school did you attend?",
            when: function (response) {
                return (response.title === "Intern")
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
            when: function (response) {
                return (response.title === "Manager")
            }
        },

        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            when: function (response) {
                return (response.title === "Engineer")
            }
        },

        {
            type: "list",
            name: "newMember",
            message: "Would you like to add another team member?",
            choices: ["Yes", "No"],
        },

    ])

        .then(function (response) {
            switch (response.title) {
                case "Manager":
                    let manager = new Manager(response.name, response.id, response.email, response.officeNumber)
                    team.push(manager)
                    break
                case "Engineer":
                    let engineer = new Engineer(response.name, response.id, response.email, response.github)
                    team.push(engineer)
                    break
                case "Intern":
                    let intern = new Intern(response.name, response.id, response.email, response.school)
                    team.push(intern)
            }
            console.log(team)
            continueAdding(response)
            let teamHTML = render(team)
            fs.writeFileSync(outputPath, teamHTML)
        })
}

function continueAdding(response) {
    if (response.newMember) {
        userInput()

    } else {
        console.log("You have added all your team members");
    }
}

// Calling the function //
userInput()


    //     let userAns = `    
    //         <div class="song">
    //             <p>
    //                 <h2>${responseponse.name}</h2>
    //                 <p class="artist">${music.artist}</p>
    //                 <p class="album">${music.album}</p>
    //             </p>
    //         </div>
    //         `



    //     fs.writeFile("main.html", "", (err) => {
    //         if (err) throw err;
    //     })

    // })


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
