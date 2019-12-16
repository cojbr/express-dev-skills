const Skills = [
    { skill: 'HTML', proficient: true, yearsOfPractice: 2 },
    { skill: 'CSS', proficient: true, yearsOfPractice: 1 },
    { skill: 'EXPRESS', proficient: false, yearsOfPractice: 0 }
];

const getAllSkills = () => {
    return Skills;
}

const getSkill = (id) => {
    Skills[id];
}

const addToSkillObject = (newSkill) => {
    Skills.push(newSkill);
}

const updateSkillwithinObject = (id, newSkill) => {
    Skills.splice(id, 1, newSkill);
}

const deleteSkillFromObject = (id) => {
    Skills.splice(id, 1);
}



module.exports = {
    getAllSkills,
    getSkill,
    updateSkillwithinObject,
    addToSkillObject,
    deleteSkillFromObject,
}; 