import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import "../styles/admin.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const AdminDashboard = () => {
  const [newEvent, setNewEvent] = useState(""); 
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  const [dashboardData, setDashboardData] = useState({
    students: {
      online: 60,
      offline: 40,
    },
    faculty: {
      online: 78,
      offline: 24,
    },
  });

  const studentChartData = {
    labels: ['Online', 'Offline'],
    datasets: [
      {
        label: 'Students',
        data: [dashboardData.students.online, dashboardData.students.offline],
        backgroundColor: ['#4caf50', '#f44336'],
        borderColor: ['#388e3c', '#d32f2f'],
        borderWidth: 1,
      },
    ],
  };

  const facultyChartData = {
    labels: ['Online', 'Offline'],
    datasets: [
      {
        label: 'Faculty',
        data: [dashboardData.faculty.online, dashboardData.faculty.offline],
        backgroundColor: ['#3f51b5', '#ff9800'],
        borderColor: ['#303f9f', '#f57c00'],
        borderWidth: 1,
      },
    ],
  };

  const activities = [
    "Admin approved a new user",
    "User JohnDoe updated profile",
    "New blog post published",
    "Server maintenance scheduled",
    "Updated user permissions",
    "Added new feature to the platform",
  ];

  const announcements = [
    "🔔 System upgrade on Feb 20",
    "📢 New feature coming soon!",
    "⚠️ Security alert: Update passwords",
    "🚨 Planned downtime for server maintenance",
    "🛠️ Bug fix release next week",
  ];

  const [activeSection, setActiveSection] = useState("overview");

  const handleChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleSaveEvent = () => {
    alert(`Event saved: ${newEvent}`);
  };

  return (
    <div className="dashboard-container">

      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li onClick={() => setActiveSection("overview")} style={{ cursor: 'pointer' }}>Overview</li>
          <li onClick={() => setActiveSection("activities")} style={{ cursor: 'pointer' }}>Activities</li>
          <li onClick={() => setActiveSection("announcements")} style={{ cursor: 'pointer' }}>Announcements</li>
        </ul>
      </div>

      <div className="main-content">
        <h2>Admin Dashboard</h2>

        {activeSection === "overview" && (
        <div className="dashboard-box">
          <h3>Event</h3>
          <textarea
            value={newEvent}
            onChange={handleChange}
            placeholder="Write event here"
          ></textarea>
          <button onClick={handleSaveEvent}>Save Event</button>
        </div>
        )}

        {activeSection === "overview" && (
          <div className="overview">
            <div className="chart-wrapper">
              <div className="chart-box">
                <h3>Students - Online vs Offline</h3>
                <Pie
                  data={studentChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Students Status',
                      },
                    },
                  }}
                />
              </div>

              <div className="chart-box">
                <h3>Faculty - Online vs Offline</h3>
                <Pie
                  data={facultyChartData}
                  options={{
                    responsive: true,
                    plugins: {
                      title: {
                        display: true,
                        text: 'Faculty Status',
                      },
                    },
                  }}
                />
              </div>
            </div>
          </div>
        )}

        {activeSection === "activities" && (
          <div className="dashboard-box">
            <h2>Recent Activities</h2>
            <ul>
              {activities.map((activity, index) => (
                <li key={index} className="mb-2">✅ {activity}</li>
              ))}
            </ul>
          </div>
        )}

        {activeSection === "announcements" && (
          <div className="dashboard-box">
            <h2>Announcements</h2>
            <ul>
              {announcements.map((note, index) => (
                <li key={index} className="mb-2">{note}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
