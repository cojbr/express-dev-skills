const Skills = require('../models/skill');

const index = (request, response) => {
    response.render('skillsview/index', {
        title: 'My Super Sweet Dev Skills',
        skills: Skills.getAllSkills()
    });
};

const show = (request, response) => {
    showSkill = Skills.getSkill(req.params.id);
    response.render('skills/show', {
        title: Skills.skill,
        skillNum: req.params.id,
        skill: skill
    });
}

const newSkill = (request, response) => {
    response.render('skills/new', { title: 'List a new skill!' } );
    console.log('You should see the new skill screen now')
}

const createSkill = (request, response) => {
    let newSkill = { skill: req.body.skill, proficient: false, yearsOfPractice: 0 }
    Skills.addToSkillObject(newSkill);
    response.redirect('/skills');
    console.log('List item added, redirecting to home page');
}

const deleteSkill = (request, response) => {
    Skills.deleteSkillFromObject(req.params.id);
    response.redirect('/skills');
    console.log('list item removed, redirecting to home page');
}

const updateSkill = (request, response) => {
    let newSkill =  { skill: req.body.skill, proficient: req.body.proficient, yearsOfPractice: req.body.yearsOfPractice }
    Skills.updateSkillWithinObject(req.params.id, newskill)
    response.redirect('skills');
    console.log('skill has been updated, redirecting to home page');
}

const editSkill = (request, response) => {
    response.render('todos/edit', {
        title: 'Update your Skills',
        id: req.params.id,
        skill: Skills.getSkill(req.params.id)
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

