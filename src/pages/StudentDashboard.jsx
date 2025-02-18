import React, { useState } from 'react';
import "../styles/student.css";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const [activeSection, setActiveSection] = useState("performance");

  const studentData = {
    levelsCompleted: 8,
    totalAttempts: 15,
    daysPresent: 120,
    daysAbsent: 5,
    totalDays: 125,
    marks: {
      EngineeringMath: 85,
      Chemistry: 97,
      English: 65,
      Physics: 80,
      Computing: 78,
    },
    courses: ["Engineering Math", "Chemistry", "English", "Physics", "Computing"],
  };

  const chartData = {
    labels: Object.keys(studentData.marks),
    datasets: [
      {
        label: 'Marks Obtained',
        data: Object.values(studentData.marks),
        backgroundColor: '#38c5ef',
        borderColor: '#1a1dde',
        borderWidth: 2,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Dashboard</h3>
        <ul>
          <li onClick={() => setActiveSection("performance")} style={{ cursor: 'pointer' }}>Performance</li>
          <li onClick={() => setActiveSection("courses")} style={{ cursor: 'pointer' }}>Courses</li>
          <li onClick={() => setActiveSection("marks")} style={{ cursor: 'pointer' }}>Result</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <h2>Student Dashboard</h2>

        {/* Performance Section */}
        {activeSection === "performance" && (
          <div className="dashboard-box">
            <h3>Successful Resolution</h3>
            <p>Levels Completed: {studentData.levelsCompleted}</p>
            <p>Total Attempts: {studentData.totalAttempts}</p>
            <p>Days Present: {studentData.daysPresent}</p>
            <p>Days Absent: {studentData.daysAbsent}</p>
            <p>Total Days: {studentData.totalDays}</p>
          </div>
        )}

        {/* Courses Section */}
        {activeSection === "courses" && (
          <div className="dashboard-box">
            <h3>Courses Studying</h3>
            <ul>
              {studentData.courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Marks Section */}
        {activeSection === "marks" && (
          <div className="dashboard-box">
            <h3>Marks</h3>
            <ul>
              {Object.entries(studentData.marks).map(([subject, marks]) => (
                <li key={subject}>
                  <strong>{subject}:</strong> {marks} marks
                </li>
              ))}
            </ul>
            <div className="chart-container">
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
