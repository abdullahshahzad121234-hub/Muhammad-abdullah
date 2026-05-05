// projects.js – your project data (editable CMS-style)
const projectsData = [
    {
        id: "tremco",
        title: "Tremco Construction",
        shortDesc: "Webflow + Lenis integration. Fast, smooth, and built for a construction client.",
        technologies: ["Webflow", "Lenis", "Figma"],
        imagePlaceholder: "Preview",
        caseStudy: {
            client: "Tremco Construction",
            role: "Webflow Developer",
            year: "2024",
            overview: "Tremco needed a fast, modern website to showcase their industrial projects. They wanted smooth scrolling and a premium feel without slowing down load times.",
            problem: "The site had heavy imagery and complex layouts. Typical Webflow animations caused lag, especially on mobile.",
            solution: "I built the site in Webflow, added Lenis for buttery‑smooth scroll, and optimized images. I also used GSAP for a few subtle animations that don't affect performance.",
            results: "Client reported a 35% drop in bounce rate and faster perceived load times. The smooth scroll became one of their key selling points.",
            technologiesUsed: ["Webflow", "Lenis", "GSAP", "Figma"]
        }
    },
    {
        id: "alia",
        title: "AliaUSA",
        shortDesc: "Full‑fledged organization website — designed in Figma, built in Webflow.",
        technologies: ["Figma", "Webflow"],
        imagePlaceholder: "Preview",
        caseStudy: {
            client: "AliaUSA",
            role: "Webflow Developer & Designer",
            year: "2024",
            overview: "AliaUSA needed a complete brand website that reflects their professional services. They wanted a clean, trustworthy design that's easy to update.",
            problem: "The site required complex multi‑level navigation and dynamic content sections. The client had no coding experience, so everything had to be manageable via Webflow CMS.",
            solution: "I designed the UI in Figma, then built a modular Webflow CMS with reusable components. I added interactive elements and form submissions, all easy to edit.",
            results: "The client now manages all content independently. The site loads in under 1.5 seconds and has a modern, trustworthy look.",
            technologiesUsed: ["Figma", "Webflow", "JavaScript"]
        }
    },
    {
        id: "bull",
        title: "Bull on Wall Street",
        shortDesc: "High‑impact landing page with focus on conversion and bold visuals.",
        technologies: ["Webflow", "GSAP"],
        imagePlaceholder: "Preview",
        caseStudy: {
            client: "Bull on Wall Street",
            role: "Frontend Developer",
            year: "2024",
            overview: "A high‑impact landing page for a financial event. The design needed to convey energy and trust.",
            problem: "Very short timeline and heavy animation requirements that had to work across all devices.",
            solution: "Used Webflow for structure and GSAP for scroll‑triggered animations. Simplified effects on mobile to maintain performance.",
            results: "Conversion rate increased by 22% in the first month. The client loved the smooth animations and the page's speed.",
            technologiesUsed: ["Webflow", "GSAP", "CSS3"]
        }
    },
    {
        id: "golf",
        title: "Forecaster Golf",
        shortDesc: "Clean, responsive site for golf analytics — smooth and data‑driven.",
        technologies: ["Figma", "Webflow"],
        imagePlaceholder: "Preview",
        caseStudy: {
            client: "Forecaster Golf",
            role: "Webflow Developer",
            year: "2024",
            overview: "A data‑driven website for golf analytics. Needed a clean UI and fast performance even with interactive charts.",
            problem: "Large datasets and interactive charts could easily slow down the site.",
            solution: "Built in Webflow with custom chart code. Used Lenis for smooth scrolling and lazy loading for assets.",
            results: "The site handles heavy data visualizations without lag. Golf professionals gave positive feedback on the clean design and speed.",
            technologiesUsed: ["Webflow", "Lenis", "Chart.js", "Figma"]
        }
    }
];

// Function to render projects and case studies
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    const caseStudiesContainer = document.getElementById('caseStudiesContainer');
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = '';
    caseStudiesContainer.innerHTML = '';
    
    projectsData.forEach(project => {
        // Create project card
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-project', project.id);
        card.innerHTML = `
            <div class="project-img"><i class="fas fa-image"></i> ${project.imagePlaceholder}</div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.shortDesc}</p>
                <div class="project-tech">${project.technologies.map(tech => `<span>${tech}</span>`).join('')}</div>
                <a href="#" class="project-link" data-project="${project.id}">View case study →</a>
            </div>
        `;
        projectsGrid.appendChild(card);
        
        // Create case study (hidden initially)
        const caseStudyDiv = document.createElement('div');
        caseStudyDiv.id = `case-${project.id}`;
        caseStudyDiv.className = 'case-study';
        caseStudyDiv.innerHTML = `
            <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: space-between;">
                <a href="#" class="back-to-projects"><i class="fas fa-arrow-left"></i> Back to projects</a>
                <a href="#home" class="back-to-home"><i class="fas fa-home"></i> Home</a>
            </div>
            <h1>${project.title}</h1>
            <div class="project-meta">Client: ${project.caseStudy.client} | Role: ${project.caseStudy.role} | Year: ${project.caseStudy.year}</div>
            <h2>Overview</h2>
            <p>${project.caseStudy.overview}</p>
            <h2>Problem</h2>
            <p>${project.caseStudy.problem}</p>
            <h2>Solution</h2>
            <p>${project.caseStudy.solution}</p>
            <h2>Results</h2>
            <p>${project.caseStudy.results}</p>
            <h3>Technologies used</h3>
            <div class="tech-list">${project.caseStudy.technologiesUsed.map(tech => `<span>${tech}</span>`).join('')}</div>
            <div class="other-projects">
                <h3>Explore Other Projects</h3>
                <div class="other-projects-grid" id="otherGrid-${project.id}"></div>
            </div>
        `;
        caseStudiesContainer.appendChild(caseStudyDiv);
    });
    
    // Populate "other projects" for each case study
    projectsData.forEach(project => {
        const otherGrid = document.getElementById(`otherGrid-${project.id}`);
        if (otherGrid) {
            projectsData.forEach(other => {
                if (other.id !== project.id) {
                    const otherCard = document.createElement('div');
                    otherCard.className = 'other-project-card';
                    otherCard.setAttribute('data-project', other.id);
                    otherCard.innerHTML = `<h4>${other.title}</h4><p>${other.shortDesc.substring(0, 50)}...</p>`;
                    otherGrid.appendChild(otherCard);
                }
            });
        }
    });
    
    // Attach event listeners after rendering
    attachProjectEvents();
}

function attachProjectEvents() {
    // Project cards and links
    document.querySelectorAll('.project-card, .project-link').forEach(el => {
        el.addEventListener('click', (e) => {
            if (el.classList.contains('project-link')) e.preventDefault();
            if (e.target.closest('.project-link')) return;
            const project = el.closest('.project-card')?.getAttribute('data-project') || el.getAttribute('data-project');
            if (project) showCaseStudy(project);
        });
    });
    
    // Other project cards
    document.querySelectorAll('.other-project-card').forEach(card => {
        card.addEventListener('click', () => {
            const project = card.getAttribute('data-project');
            if (project) showCaseStudy(project);
        });
    });
    
    // Back buttons
    document.querySelectorAll('.back-to-projects').forEach(btn => {
        btn.addEventListener('click', (e) => { e.preventDefault(); showProjectsGrid(); });
    });
}

const projectsGrid = document.getElementById('projectsGrid');
const caseStudies = document.querySelectorAll('.case-study');

function showCaseStudy(projectId) {
    if (projectsGrid) projectsGrid.style.display = 'none';
    caseStudies.forEach(cs => cs.classList.remove('active'));
    const targetCase = document.getElementById(`case-${projectId}`);
    if (targetCase) { targetCase.classList.add('active'); targetCase.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

function showProjectsGrid() {
    if (projectsGrid) projectsGrid.style.display = 'grid';
    caseStudies.forEach(cs => cs.classList.remove('active'));
    window.scrollTo({ top: document.getElementById('projects').offsetTop - 80, behavior: 'smooth' });
}

// Initialize rendering when DOM is ready
document.addEventListener('DOMContentLoaded', renderProjects);
