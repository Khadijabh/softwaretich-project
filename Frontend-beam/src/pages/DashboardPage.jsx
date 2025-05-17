import React, { useState } from 'react';
import './DashbordPage.css';
import {
    FiHome,
    FiUsers,
    FiSettings,
    FiPieChart,
    FiBell,
    FiMail,
    FiMenu,
    FiSearch
} from 'react-icons/fi';

const DashboardPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    // Données de démonstration
    const statsData = [
        { title: "Total Users", value: "2,453", change: "+12%", icon: <FiUsers /> },
        { title: "Total Revenue", value: "$4,253", change: "+8%", icon: <FiPieChart /> },
        { title: "Pending Orders", value: "102", change: "-2%", icon: <FiMail /> },
        { title: "Active Projects", value: "24", change: "+18%", icon: <FiSettings /> }
    ];

    const recentUsers = [
        { id: 1, name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Active", role: "User" },
        { id: 3, name: "Robert Johnson", email: "robert@example.com", status: "Inactive", role: "User" },
        { id: 4, name: "Emily Davis", email: "emily@example.com", status: "Active", role: "Editor" }
    ];

    return (
        <div className="dashboard-container">
            {/* Sidebar */}
            <div className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2>SOFTWERTICH</h2>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        <li
                            className={activeTab === 'dashboard' ? 'active' : ''}
                            onClick={() => setActiveTab('dashboard')}
                        >
                            <FiHome /> {sidebarOpen && "Dashboard"}
                        </li>
                        <li
                            className={activeTab === 'users' ? 'active' : ''}
                            onClick={() => setActiveTab('users')}
                        >
                            <FiUsers /> {sidebarOpen && "Users"}
                        </li>
                        <li
                            className={activeTab === 'analytics' ? 'active' : ''}
                            onClick={() => setActiveTab('analytics')}
                        >
                            <FiPieChart /> {sidebarOpen && "Analytics"}
                        </li>
                        <li
                            className={activeTab === 'settings' ? 'active' : ''}
                            onClick={() => setActiveTab('settings')}
                        >
                            <FiSettings /> {sidebarOpen && "Settings"}
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* Top Navigation */}
                <header className="top-nav">
                    <div className="nav-left">
                        <button
                            className="menu-toggle"
                            onClick={() => setSidebarOpen(!sidebarOpen)}
                        >
                            <FiMenu />
                        </button>
                        <div className="search-bar">
                            <FiSearch />
                            <input type="text" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="nav-right">
                        <button className="notification-btn">
                            <FiBell />
                            <span className="badge">3</span>
                        </button>
                        <div className="user-profile">
                            <img
                                src="https://randomuser.me/api/portraits/men/1.jpg"
                                alt="User"
                            />
                            <span>Admin</span>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="dashboard-content">
                    <h1>Dashboard Overview</h1>

                    {/* Stats Cards */}
                    <div className="stats-grid">
                        {statsData.map((stat, index) => (
                            <div className="stat-card" key={index}>
                                <div className="stat-icon">{stat.icon}</div>
                                <div className="stat-info">
                                    <h3>{stat.title}</h3>
                                    <p className="stat-value">{stat.value}</p>
                                    <p className={`stat-change ${stat.change.startsWith('+') ? 'positive' : 'negative'}`}>
                                        {stat.change}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Users Table */}
                    <div className="recent-users">
                        <h2>Recent Users</h2>
                        <table>
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Role</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {recentUsers.map(user => (
                                <tr key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                      <span className={`status-badge ${user.status.toLowerCase()}`}>
                        {user.status}
                      </span>
                                    </td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="action-btn">Edit</button>
                                        <button className="action-btn delete">Delete</button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;