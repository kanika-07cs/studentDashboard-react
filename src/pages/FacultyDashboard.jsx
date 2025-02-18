import React, { useState } from 'react';
import "../styles/faculty.css";

const FacultyDashboard = () => {
  const [selectedSection, setSelectedSection] = useState("information"); // Default section is 'information'

  const facultyData = {
    completedWorkload: 20,
    journals: 5,
    blogs: 10,
    questions: {
      total: 50,
      answered: 45,
      unanswered: 5,
    },
    designation: "Professor", 
    yearsOfExperience: 13, 
    qualifications: [
      { degree: "BE", university: "ABC University" },  
      { degree: "ME", university: "KLM University" },  
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li onClick={() => setSelectedSection("information")} style={{ cursor: 'pointer' }}>Information</li>
          <li onClick={() => setSelectedSection("studentQuery")} style={{ cursor: 'pointer' }}>Student Query</li>
          <li onClick={() => setSelectedSection("status")} style={{ cursor: 'pointer' }}>Status</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
      <h2>Faculty Dashboard</h2>
        {selectedSection === "information" && (
          <div className="dashboard-box">
            <h3>Faculty Information</h3>
            <ul>
              <li><strong>Designation</strong> {facultyData.designation}</li>
              <li><strong>Years of Experience</strong> {facultyData.yearsOfExperience} yrs</li>
              <li><strong>Qualifications</strong>
                <ul>
                  {facultyData.qualifications.map((qual, index) => (
                    <li key={index}>
                      <strong>{qual.degree}:</strong> {qual.university}
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        )}

        {/* Student Query Section */}
        {selectedSection === "studentQuery" && (
          <div className="dashboard-box">
            <h3>Student Queries</h3>
            <ul>
              <li><strong>Total Questions</strong> {facultyData.questions.total}</li>
              <li><strong>Answered Questions</strong> {facultyData.questions.answered}</li>
              <li><strong>Unanswered Questions</strong> {facultyData.questions.unanswered}</li>
            </ul>
            <h3>Unanswered Questions:</h3>
            <ul>
              <li>What is an operating system and what are a few common examples? </li>
              <li>What is a virus and how can you protect your computer from malware?</li>
              <li>What is the difference between hardware and software? </li>
              <li>What is a basic understanding of email and how to manage your inbox? </li>
              <li>What is an algorithm and how is it used in coding? </li>
            </ul>
          </div>
        )}

        {/* Status Section */}
        {selectedSection === "status" && (
          <div className="dashboard-box">
            <h3>Workload, Blogs & Journals</h3>
            <ul>
              <li><strong>Workload</strong> {facultyData.completedWorkload} hrs/week</li>
              <li><strong>Journals</strong> {facultyData.journals}</li>
              <li><strong>Blogs</strong> {facultyData.blogs}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyDashboard;
