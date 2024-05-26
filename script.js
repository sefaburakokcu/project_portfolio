document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-bar');
    const projectsContainer = document.getElementById('projects');
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load theme from local storage
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(currentTheme);
    themeToggle.textContent = currentTheme === 'dark-mode' ? '🌙' : '☀️';

    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            displayProjects(projects);

            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredProjects = projects.filter(project =>
                    project.name.toLowerCase().includes(searchTerm) ||
                    project.description.toLowerCase().includes(searchTerm) ||
                    project.tags.some(tag => tag.toLowerCase().includes(searchTerm))
                );
                displayProjects(filteredProjects);
            });
        });

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
        
        const newTheme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', newTheme);

        themeToggle.textContent = newTheme === 'dark-mode' ? '🌙' : '☀️';
    });

    function displayProjects(projects) {
        projectsContainer.innerHTML = '';
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.innerHTML = `
                <img src="${project.image}" alt="${project.name}">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <p class="date">Date: ${project.date}</p>
                <div class="tags">
                    ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                </div>
                <div class="links">
                    <a href="${project.demo}" target="_blank">Demo</a>
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
});

