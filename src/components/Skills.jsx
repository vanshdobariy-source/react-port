import React from 'react';

const Skills = () => {
    const skills = [
        { name: 'Java' },
        { name: 'HTML' },
        { name: 'SQL' },
        { name: 'Python' }
    ];

    return (
        <section id="skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-item">
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
