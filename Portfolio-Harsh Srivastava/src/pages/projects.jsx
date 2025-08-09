import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Projects.css';
// Change this import to point to your generic project image
import genericProjectImage from '../assets/projects.jpg'; 

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'Harsh-Sriv';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const headers = { 'Authorization': `token ${GITHUB_TOKEN}` };
        
        const repoListResponse = await axios.get(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated`,
          { headers }
        );
        const nonForkedRepos = repoListResponse.data.filter(repo => !repo.fork);

        const projectsWithImages = await Promise.all(
          nonForkedRepos.map(async (repo) => {
            // Set the default image to your generic one
            let imageUrl = genericProjectImage; 
            try {
              const readmeResponse = await axios.get(repo.url + '/readme', { headers });
              const readmeContent = atob(readmeResponse.data.content);
              
              const imageMatch = readmeContent.match(/!\[.*\]\((.*?)\)/);
              if (imageMatch && imageMatch[1]) {
                imageUrl = imageMatch[1];
              }
            } catch (readmeError) {
              console.log(`No README for ${repo.name}, using generic image.`);
            }
            return { ...repo, imageUrl };
          })
        );
        
        setRepos(projectsWithImages);

      } catch (err) {
        setError('Failed to fetch projects. Check your token or try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [GITHUB_USERNAME, GITHUB_TOKEN]);

  if (loading) return <div className="loading">Loading Projects...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!loading && repos.length === 0) return <div className="loading">No public projects found.</div>;

  return (
    <div className="projects-page">
      <h1>My GitHub Projects</h1>
      <div className="projects-grid">
        {repos.map(repo => (
          <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-card">
            <div className="project-image-container">
              <img src={repo.imageUrl} alt={`${repo.name} preview`} />
            </div>
            <div className="project-content">
              <h3>{repo.name}</h3>
              <p>{repo.description || 'No description provided.'}</p>
              {repo.language && <span className="project-language">{repo.language}</span>}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;