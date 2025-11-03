 // script.js
// Skills data for a Java fresher

const text = "Java Developer";
const headingElement = document.getElementById("title");
let currentIndex = 0;

    // Function to display characters one by one
function typeCharacter() {
    if (currentIndex < text.length) {
        headingElement.textContent += text.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeCharacter, 300); // Adjust the delay time for typing speed
    }
    else{
        setTimeout(resetResult, 1000);
    }
}

function resetResult(){
    headingElement.textContent = "";
    currentIndex = 0;
    typeCharacter();
}


    // Start the typing effect
    typeCharacter();

const skills = [
    { name: 'Java', level: 85 },
    { name: 'Spring Boot', level: 75 },
    { name: 'SQL', level: 65 },
    { name: 'HTML/CSS', level: 70 },
    { name: 'Oracle/MySQL', level: 70 },
];

// Projects data
const projects = [
    {
        title: 'Currency Converter',
        description: 'A web app to convert currencies in real time using live exchange rates API',
        tags: ['Html', 'CSS', 'JavaScript'],
        url: "https://github.com/RahmanMansuri/currency-converter"
    },
    {
        title: 'Weather App',
        description: 'A web-based weather application that fetches real-time data using external APIs.',
        tags: ['HTML', 'CSS', 'JavaScript', 'API'],
        url: "https://github.com/RahmanMansuri/weather-app"
    },
    {
        title: 'Online Voting System',
        description: 'A secure online voting application with user authentication and database integration.',
        tags: ['Java', 'Swing', 'JDBC', 'MySQL'],
        url : "https://github.com/RahmanMansuri/online-voting-system"
    },
];

// Mobile menu functionality
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});

// Render skills
// <script>
// Updated skills data organized by categories
const skillsData = {
    frontend: [
        { name: "HTML", icon: "fab fa-html5", color: "text-orange-400" },
        { name: "CSS", icon: "fa-brands fa-css3-alt", color: "text-blue-400" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-400" }
    ],
    backend: [
        { name: "Java", icon: "fab fa-java", color: "text-red-500" },
        { name: "Spring Boot", icon: "fas fa-leaf", color: "text-green-400" },
        { name: "RESTful APIs", icon: "fas fa-exchange-alt", color: "text-blue-400" }
    ],
    database: [
        { name: "MySQL", icon: "fas fa-database", color: "text-blue-500" },
        { name: "Oracle", icon: "fas fa-server", color: "text-red-400" },
        { name: "SQL", icon: "fas fa-search", color: "text-purple-400" }
    ]
};

// Function to create a skill card
function createSkillCard(skill) {
    const skillCard = document.createElement('div');
    skillCard.className = 'skill-card bg-gray-800 p-6 rounded-xl border border-gray-700 text-center floating-animation';
    skillCard.innerHTML = `
        <div class="skill-icon ${skill.color} text-4xl mb-4">
            <i class="${skill.icon}"></i>
        </div>
        <h4 class="text-white font-semibold text-lg">${skill.name}</h4>
    `;
    
    // Add random animation delay for floating effect
    skillCard.style.animationDelay = `${Math.random() * 2}s`;
    
    return skillCard;
}

// Function to render skills
function renderSkills() {
    const frontendContainer = document.getElementById('frontendSkills');
    const backendContainer = document.getElementById('backendSkills');
    const databaseContainer = document.getElementById('databaseSkills');

    // Clear existing skills
    frontendContainer.innerHTML = '';
    backendContainer.innerHTML = '';
    databaseContainer.innerHTML = '';

    // Add frontend skills
    skillsData.frontend.forEach(skill => {
        frontendContainer.appendChild(createSkillCard(skill));
    });

    // Add backend skills
    skillsData.backend.forEach(skill => {
        backendContainer.appendChild(createSkillCard(skill));
    });

    // Add database skills
    skillsData.database.forEach(skill => {
        databaseContainer.appendChild(createSkillCard(skill));
    });
}

// Initial render
renderSkills();


const projectsContainer = document.getElementById('projectsContainer');
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.className = 'bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 project-card';
    projectElement.innerHTML = `
        <h3 class="text-xl font-bold mb-3 text-white">${project.title}</h3>
        <p class="text-gray-400 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2">
            ${project.tags.map(tag => `
                <span class="bg-blue-900 text-blue-200 text-sm px-3 py-1 rounded-full">${tag}</span>
            `).join('')}
        </div>
        <a href="${project.url}" class="mt-4 inline-flex items-center text-blue-400 hover:text-blue-300">
            View Project <i class="fas fa-external-link-alt ml-1"></i>
        </a>
    `;
    projectsContainer.appendChild(projectElement);
});

// Form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent the default form submission behavior

    // Call the sendMail function
    sendMail();
});

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: "Message from Portfolio",
        message: document.getElementById("message").value,
    };

    emailjs.send("service_7f9uve9", "template_gnn1y04", params)
        .then((response) => {
            alert("Email Sent!!")
        })
        .catch((error) => {
            alert("Failed to send email: " + error);
        });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
        menuIcon.classList.add('fa-bars');
        menuIcon.classList.remove('fa-times');
    });
});