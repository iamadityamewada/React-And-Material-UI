import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faUsers, 
  faClipboardList,
  faCheckCircle,
  faArrowRight,
  faSearch
} from '@fortawesome/free-solid-svg-icons';
import './app.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState(0);

  const prompts = [
    { id: 1, text: "Loans forum elder at anw, consexious adjusting qlt...", date: "2025-01-27 14:17:16" },
    { id: 2, text: "Loans forum elder at anw, consexious adjusting qlt...", date: "2025-01-31 15:07:10" },
    // Add more prompts as needed
  ];

  const documents = [
    { 
      title: "LSPD Troubleshooting Guides", 
      status: "Published", 
      location: "https://sharepoint.com/sites/SitePages/Home.aspx", 
      refreshed: "2025-01-27 14:17:16" 
    },
    { 
      title: "LSPD Troubleshooting Guides - Operations and Upskilling", 
      status: "Unpublished", 
      location: "ECMS-1", 
      refreshed: "2025-01-31 12:07:10" 
    },
  ];

  return (
    <div className="content-management-container">
      <h1>Content Management</h1>
      
      <div className="nav-section">
        <div className={`nav-item ${activeTab === 0 ? 'active' : ''}`} onClick={() => setActiveTab(0)}>
          <FontAwesomeIcon icon={faClipboardList} /> Document Management
        </div>
        <div className={`nav-item ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
          <FontAwesomeIcon icon={faFileAlt} /> User Management
        </div>
      </div>

      <div className="main-content-grid">
        <div>
          {/* Homepage LSPD Content Update */}
          <div className="content-section">
            <h2 className="section-title">Homepage LSPD Content Update</h2>
            <table className="cta-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>CTA Text</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>LSPD Touchservicing Guide</td>
                  <td>Click here to open</td>
                </tr>
              </tbody>
            </table>
            <div className="description">
              Track guidelines may be helpful in questioning touchservicing and general learning capability.
            </div>
            <div className="cta-links">
              <div>Highurlout advice.com</div>
              <div>www.7b3b8b9c1-b2b-5d6e-722-f0ddeca52359c-cggu</div>
              <div>YuLineware</div>
            </div>
          </div>

          {/* AdiScale Maintenance Page */}
          <div className="content-section">
            <h2 className="section-title">AdiScale Maintenance Page</h2>
            <table className="cta-table">
              <thead>
                <tr>
                  <th>Start date</th>
                  <th>Start time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>We’re closer for schedule/partnerance. (Be right back)</td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#2e7d32' }} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Homepage Prompt Updates */}
          <div className="content-section">
            <h2 className="section-title">Homepage Prompt Updates</h2>
            <table className="cta-table">
              <thead>
                <tr>
                  <th>St. no</th>
                  <th>Prompt</th>
                  <th>Last Updated</th>
                  <th>Enable/Disable</th>
                </tr>
              </thead>
              <tbody>
                {prompts.map(prompt => (
                  <tr key={prompt.id}>
                    <td>{prompt.id}</td>
                    <td>{prompt.text}</td>
                    <td>{prompt.date}</td>
                    <td><input type="checkbox" checked /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className="content-section">
            <h2 className="section-title">Find a Document</h2>
            <div className="search-container">
              <FontAwesomeIcon icon={faSearch} className="search-icon" />
              <input 
                type="text" 
                className="search-input" 
                placeholder="Search" 
              />
            </div>
            <table className="cta-table">
              <thead>
                <tr>
                  <th>Document Title</th>
                  <th>Status</th>
                  <th>Location</th>
                  <th>Last Refreshed</th>
                </tr>
              </thead>
              <tbody>
                {documents.map((doc, index) => (
                  <tr key={index}>
                    <td>{doc.title}</td>
                    <td>
                      <span className={`status-badge ${doc.status.toLowerCase()}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td>{doc.location}</td>
                    <td>{doc.refreshed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-section">
            <h2 className="section-title">User Management</h2>
            <div className="user-management-section">
              <button className="management-button">
                Add new user to a group
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
              <button className="management-button">
                Manage current users or groups
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className="last-updated">
              <div>Last new user added: 22 Dec 2024</div>
              <div>Last edited: 10 Sept 2024</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;