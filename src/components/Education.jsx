import React from 'react';

const Education = () => {
    const semesters = [
        { number: '1st Semester', percentage: '83%', detail: 'Excellent Performance' },
        { number: '2nd Semester', percentage: '85%', detail: 'Strong Fundamentals' },
        { number: '3rd Semester', percentage: '79%', detail: 'Consistent Achiever' },
        { number: '4th Semester', percentage: '88%', detail: 'Top Performer' },
        { number: '5th Semester', percentage: '78%', detail: 'Academic Excellence' },
    ];

    return (
        <section id="education">
            <h2 className="section-title">Education</h2>
            <div className="education-container">
                <h3 className="education-title">Diploma in Computer Science</h3>
                <div className="semester-grid">
                    {semesters.map((sem, index) => (
                        <div key={index} className="semester-item">
                            <div className="semester-number">{sem.number}</div>
                            <div className="percentage">{sem.percentage}</div>
                            <div className="education-detail">{sem.detail}</div>
                        </div>
                    ))}
                </div>
                <p style={{ textAlign: 'center', marginTop: '30px', color: '#666', fontSize: '16px' }}>
                    Currently pursuing Diploma in Computer Science with consistent academic performance
                </p>
            </div>
        </section>
    );
};

export default Education;
