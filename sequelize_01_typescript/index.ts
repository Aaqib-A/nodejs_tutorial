import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
import db from './models';
import { users } from './seeders/users';
import { projects } from './seeders/projects';
import { projectassignments } from './seeders/projectassignments';
/*
const createUsers = () => {
    users.map(user => {
        db.User.create(user);
    })
}
*/
//createUsers();
/*
const createProjects = () => {
    projects.map(project => {
        db.Project.create(project);
    })
}
createProjects()
*/
/*
const createProjectassignments = () => {
    projectassignments.map(projectassignment => {
        db.ProjectAssignment.create(projectassignment);
    })
}
createProjectassignments();
*/
/*
db.ProjectAssignment.create({
    ProjectId: 1,
    UserId: '8282b55b-2c0d-4063-b152-f286084556ed'
});
*/
app.get('/', (req, res) => {
    db.User.findAll({
        include: {
            model: db.Project
        }
    })
        .then((result: object) => res.json(result) )
        .catch((err: object) => console.log(err))
})
/*
db.User.findAll({
    include: {
        model: db.Project
    }
})
    .then((result: object) => console.log(JSON.stringify(result)))
    .catch((err: object) => console.log(err))

    */
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`);
    })
})