const Skills = require('../model/skill');

const index = (request, response) => {
    response.render('/index', {
        title: 'My Super Sweet Dev Skills',
        skill: Skills.getAllSkills()
    });
};

const show = (request, response) => {
    showSkill = Skills.getSkill(request.params.id);
    response.render('skills/show', {
        title: Skills.skill,
        skillNum: request.params.id,
        skill: Skills.skill
    });
}

const newSkill = (request, response) => {
    response.render('skills/new', { title: 'List a new skill!' } );
    console.log('You should see the new skill screen now')
}

const createSkill = (request, response) => {
    let newSkill = { skill: request.body.skill, proficient: false, yearsOfPractice: 0 }
    Skills.addToSkillObject(newSkill);
    response.redirect('/skills');
    console.log('List item added, redirecting to home page');
}

const deleteSkill = (request, response) => {
    Skills.deleteSkillFromObject(request.params.id);
    response.redirect('/skills');
    console.log('list item removed, redirecting to home page');
}

const updateSkill = (request, response) => {
    let newSkill =  { skill: request.body.skill, proficient: request.body.proficient, yearsOfPractice: request.body.yearsOfPractice }
    Skills.updateSkillWithinObject(request.params.id, newskill)
    response.redirect('skills');
    console.log('skill has been updated, redirecting to home page');
}

const editSkill = (request, response) => {
    response.render('todos/edit', {
        title: 'Update your Skills',
        id: request.params.id,
        skill: Skills.getSkill(request.params.id)
    });
}

module.exports = {
    index,
    show,
    newSkill,
    createSkill,
    deleteSkill,
    updateSkill,
    editSkill,
};

