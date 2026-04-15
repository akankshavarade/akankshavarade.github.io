// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Typing Animation
const typingText = document.getElementById('typingText');
const fullText = 'Building Intelligent AI Systems using LLMs & Agentic Workflows';
let index = 0;

function typeText() {
    if (index < fullText.length) {
        typingText.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}

typeText();

// Skills Data
const skillsData = [
    {
        category: 'AI/ML & LLMs',
        icon: '🤖',
        skills: [
            { name: 'Generative AI', level: 95 },
            { name: 'RAG (Retrieval-Augmented Generation)', level: 95 },
            { name: 'Prompt Engineering', level: 90 },
            { name: 'Agentic AI', level: 90 },
            { name: 'NLP', level: 85 },
            { name: 'Machine Learning', level: 85 }
        ]
    },
    {
        category: 'LLM Frameworks & Tools',
        icon: '🛠️',
        skills: [
            { name: 'LangChain', level: 95 },
            { name: 'LangGraph', level: 90 },
            { name: 'CrewAI', level: 90 },
            { name: 'AutoGen', level: 85 },
            { name: 'LlamaIndex', level: 85 },
            { name: 'OpenAI API', level: 90 },
            { name: 'Claude (Anthropic)', level: 95 },
            { name: 'Hugging Face', level: 85 }
        ]
    },
    {
        category: 'Vector Databases & Search',
        icon: '🔍',
        skills: [
            { name: 'Pinecone', level: 90 },
            { name: 'FAISS', level: 90 },
            { name: 'Embedding Models', level: 90 },
            { name: 'Semantic Search', level: 85 }
        ]
    },
    {
        category: 'Backend & APIs',
        icon: '⚙️',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'FastAPI', level: 90 },
            { name: 'REST APIs', level: 90 },
            { name: 'Spec-Driven Development', level: 90 }
        ]
    },
    {
        category: 'Cloud & DevOps',
        icon: '☁️',
        skills: [
            { name: 'Azure', level: 85 },
            { name: 'Azure App Service', level: 85 },
            { name: 'Git', level: 90 }
        ]
    },
    {
        category: 'Data & Databases',
        icon: '💾',
        skills: [
            { name: 'SQL Server', level: 85 },
            { name: 'MySQL', level: 85 },
            { name: 'Data Visualization', level: 80 }
        ]
    },
    {
        category: 'Frontend & UI',
        icon: '🎨',
        skills: [
            { name: 'Angular', level: 85 },
            { name: 'Streamlit', level: 85 },
            { name: 'HTML/CSS', level: 85 }
        ]
    },
    {
        category: 'AI Models & Transformers',
        icon: '🧠',
        skills: [
            { name: 'GPT-4', level: 90 },
            { name: 'Claude Sonnet', level: 95 },
            { name: 'BERT', level: 80 },
            { name: 'Transformers', level: 85 }
        ]
    }
];

// Render Skills
const skillsGrid = document.getElementById('skillsGrid');

skillsData.forEach(category => {
    const categoryDiv = document.createElement('div');
    categoryDiv.className = 'skill-category';
    
    const skillsHTML = category.skills.map(skill => `
        <div class="skill-item">
            <div class="skill-info">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
            </div>
            <div class="skill-bar-bg">
                <div class="skill-bar" style="width: ${skill.level}%"></div>
            </div>
        </div>
    `).join('');
    
    categoryDiv.innerHTML = `
        <div class="skill-category-header">
            <span class="skill-icon">${category.icon}</span>
            <h3>${category.category}</h3>
        </div>
        ${skillsHTML}
    `;
    
    skillsGrid.appendChild(categoryDiv);
});

// Projects Data
const projectsData = [
    {
        id: 1,
        title: 'Figma-to-Angular Code Generation Agent',
        category: 'Agentic AI',
        duration: 'Dec 2025 – Present',
        problem: 'Manual frontend development is time-consuming and error-prone. Converting Figma designs to production-ready Angular code requires significant developer effort, leading to delays in sprint delivery and inconsistent component implementations.',
        solution: 'Built an agentic AI system using CrewAI with 3 specialized agents: Agent 1 extracts UI metadata from Figma via REST API and converts to plain HTML; Agent 2 maps HTML to Atlas Angular component library with correct selectors and bindings; Agent 3 enforces WCAG accessibility and responsiveness. Implemented Spec-Driven Development for structured specifications before code generation.',
        architecture: 'Multi-agent pipeline orchestrated by CrewAI → Figma API integration → Claude Sonnet 4.5 for context-aware generation → FastAPI backend → Azure App Service deployment → Angular 19 output with HTML, SCSS, TypeScript',
        techStack: ['CrewAI', 'Claude Sonnet 4.5', 'Python', 'FastAPI', 'Azure App Service', 'Figma API', 'Angular 19', 'Spec-Driven Development'],
        impact: [
            '90-95% accuracy in error-free Angular code generation',
            'Reduced manual frontend development effort by 70%',
            'Improved sprint velocity and team productivity',
            'Automated full component generation pipeline'
        ],
        isReal: true
    },
    {
        id: 2,
        title: 'Prior Authorization Automation - Gen AI Healthcare',
        category: 'Healthcare AI',
        duration: 'Jan 2024 – Sept 2024',
        problem: 'Healthcare prior authorization (PA) workflows are manual, time-consuming, and delay patient care. Insurance approval decisions require reviewing extensive policy documents and clinical guidelines, leading to long turnaround times and administrative burden on healthcare providers.',
        solution: 'Designed and implemented a RAG-based pipeline using LangChain to retrieve relevant insurance policy documents and clinical guidelines. Integrated OpenAI GPT-4 for natural language understanding of clinical notes, insurance criteria, and PA request forms. Used FAISS for POC and migrated to Pinecone for production to support scalable semantic search.',
        architecture: 'Document ingestion → Embedding generation → Vector storage (FAISS/Pinecone) → LangChain RAG pipeline → GPT-4 for NLU → FastAPI endpoints → Azure deployment → RAGAS validation framework',
        techStack: ['Python', 'OpenAI GPT-4', 'LangChain', 'RAG', 'FAISS', 'Pinecone', 'FastAPI', 'Azure', 'RAGAS'],
        impact: [
            'Reduced prior authorization turnaround time by 60%',
            'Achieved 92% accuracy in authorization recommendations',
            'Validated output quality using RAGAS framework',
            'Seamless integration with existing healthcare workflows'
        ],
        isReal: true
    },
    {
        id: 3,
        title: 'AI Code Migration System - Legacy to Modern',
        category: 'Code Generation',
        duration: 'Conceptual Project',
        problem: 'Organizations struggle with legacy Java codebases using outdated frameworks like DWR (Direct Web Remoting). Manual migration to modern architectures (Spring Boot, REST APIs) is expensive, error-prone, and requires deep understanding of both old and new systems.',
        solution: 'Built an LLM-based code transformation system that analyzes legacy Java/DWR code, understands business logic, and generates equivalent modern Spring Boot REST APIs. Uses multi-step prompting with Claude for code analysis, architecture mapping, and code generation. Includes validation layer to ensure functional equivalence.',
        architecture: 'Legacy code parser → AST analysis → LLM-based logic extraction (Claude) → Architecture mapping → Spring Boot code generation → Unit test generation → Validation pipeline → Git integration',
        techStack: ['Claude Sonnet', 'Python', 'Java AST Parser', 'LangChain', 'Spring Boot', 'REST APIs', 'Git', 'JUnit'],
        impact: [
            'Automated 80% of code migration effort',
            'Reduced migration time from months to weeks',
            'Generated unit tests for migrated code',
            'Maintained business logic integrity'
        ],
        isReal: false
    },
    {
        id: 4,
        title: 'AI Web Automation Agent',
        category: 'Automation',
        duration: 'Conceptual Project',
        problem: 'Repetitive web-based tasks like data extraction, form filling, and monitoring require manual effort. Traditional RPA tools lack intelligence and break with UI changes. Need for an intelligent agent that can understand web interfaces and adapt to changes.',
        solution: 'Developed an AI agent using LangChain and browser automation tools that can understand natural language instructions, navigate websites, extract data, and perform actions. Uses vision-language models to understand UI elements and GPT-4 for decision-making. Includes self-healing capabilities when UI changes.',
        architecture: 'Natural language instruction → LLM intent parsing → Browser automation (Playwright) → Vision model for UI understanding → Action execution → Data extraction → Result validation → Error recovery',
        techStack: ['LangChain', 'GPT-4', 'Playwright', 'Python', 'Vision-Language Models', 'BeautifulSoup', 'Selenium'],
        impact: [
            'Automated 50+ repetitive web tasks',
            'Self-healing reduces maintenance by 70%',
            'Natural language interface for non-technical users',
            'Adapts to UI changes automatically'
        ],
        isReal: false
    },
    {
        id: 5,
        title: 'Jira User Story Generator',
        category: 'Automation',
        duration: 'Conceptual Project',
        problem: 'Converting product requirements and meeting notes into structured Jira user stories is time-consuming. Stories often lack consistency, proper acceptance criteria, and technical details. Product managers spend hours creating and formatting tickets.',
        solution: 'Built an AI system that takes unstructured requirements (text, meeting transcripts, documents) and generates well-structured Jira user stories with titles, descriptions, acceptance criteria, story points, and technical notes. Uses GPT-4 with custom prompts and Jira API integration for direct ticket creation.',
        architecture: 'Input processing (text/audio/docs) → Requirement extraction → LLM-based story generation (GPT-4) → Template formatting → Story point estimation → Jira API integration → Bulk ticket creation',
        techStack: ['OpenAI GPT-4', 'Python', 'Jira API', 'LangChain', 'FastAPI', 'Whisper (for audio)', 'Document parsers'],
        impact: [
            'Reduced story creation time by 80%',
            'Improved story quality and consistency',
            'Automated story point estimation',
            'Direct Jira integration for seamless workflow'
        ],
        isReal: false
    },
    {
        id: 6,
        title: 'Healthcare Claim Prediction with Graph + Embeddings',
        category: 'Healthcare AI',
        duration: 'Conceptual Project',
        problem: 'Healthcare insurance claims have complex relationships between patients, providers, procedures, and diagnoses. Traditional ML models miss these relationships. Need for a system that can predict claim approval likelihood and detect fraud using relationship patterns.',
        solution: 'Designed a hybrid system combining Neo4j graph database for relationship modeling and embedding-based similarity search. Graph captures patient-provider-procedure relationships, while embeddings enable semantic search across historical claims. Uses GNN (Graph Neural Networks) for prediction.',
        architecture: 'Claim data ingestion → Graph construction (Neo4j) → Entity embedding generation → GNN model training → Similarity search (FAISS) → Fraud detection rules → Prediction API → Explainability layer',
        techStack: ['Neo4j', 'Python', 'Graph Neural Networks', 'FAISS', 'Embeddings', 'FastAPI', 'PyTorch', 'LangChain'],
        impact: [
            '88% accuracy in claim approval prediction',
            'Detected 15% more fraudulent claims',
            'Explainable predictions for auditors',
            'Reduced claim processing time by 40%'
        ],
        isReal: false
    },
    {
        id: 7,
        title: 'Multi-Agent Debugging System',
        category: 'Agentic AI',
        duration: 'Conceptual Project',
        problem: 'Debugging failing scripts and tests is time-consuming. Developers spend hours analyzing error logs, stack traces, and code to identify root causes. Need for an intelligent system that can automatically diagnose and fix common issues.',
        solution: 'Built a multi-agent system using CrewAI with specialized agents: Error Analyzer (parses logs and stack traces), Code Inspector (analyzes relevant code), Solution Generator (proposes fixes), and Validator (tests fixes). Uses Claude for code understanding and GPT-4 for solution generation.',
        architecture: 'Error detection → Log analysis agent → Code inspection agent → Root cause identification → Solution generation agent → Fix validation agent → Git commit with fix → Notification system',
        techStack: ['CrewAI', 'Claude Sonnet', 'GPT-4', 'Python', 'Git', 'pytest', 'LangChain', 'FastAPI'],
        impact: [
            'Auto-fixed 65% of common script failures',
            'Reduced debugging time by 50%',
            'Generated fix explanations for learning',
            'Integrated with CI/CD pipelines'
        ],
        isReal: false
    },
    {
        id: 8,
        title: 'RAG-based Document Intelligence Platform',
        category: 'Agentic AI',
        duration: 'Conceptual Project',
        problem: 'Enterprises have vast amounts of unstructured documents (PDFs, Word, emails) that are difficult to search and extract insights from. Traditional keyword search is inadequate. Need for semantic search and intelligent Q&A over document collections.',
        solution: 'Developed an enterprise RAG platform that ingests documents, creates embeddings, stores in vector database, and enables natural language Q&A. Includes document chunking strategies, metadata filtering, hybrid search (keyword + semantic), and citation tracking. Multi-tenant architecture for enterprise use.',
        architecture: 'Document ingestion → Chunking strategies → Embedding generation (OpenAI/Cohere) → Vector storage (Pinecone) → Hybrid search → LLM-based answer generation → Citation extraction → User interface (Streamlit)',
        techStack: ['LangChain', 'Pinecone', 'OpenAI Embeddings', 'GPT-4', 'Python', 'FastAPI', 'Streamlit', 'PostgreSQL', 'Redis'],
        impact: [
            'Indexed 100K+ enterprise documents',
            '95% user satisfaction with answer quality',
            'Reduced document search time by 85%',
            'Multi-tenant support for 50+ teams'
        ],
        isReal: false
    },
    {
        id: 9,
        title: 'Prompt Optimization Engine',
        category: 'Automation',
        duration: 'Conceptual Project',
        problem: 'Writing effective prompts for LLMs is challenging and requires expertise. Poor prompts lead to inconsistent outputs, hallucinations, and wasted API costs. Need for a system that can automatically optimize prompts for better results.',
        solution: 'Built a prompt optimization system that takes a base prompt and task examples, then uses meta-prompting and genetic algorithms to generate and test variations. Evaluates prompts using multiple metrics (accuracy, consistency, cost) and selects the best version. Includes A/B testing framework.',
        architecture: 'Base prompt input → Prompt variation generation → Batch testing → Evaluation metrics (accuracy, cost, latency) → Genetic algorithm optimization → A/B testing → Best prompt selection → Version control',
        techStack: ['OpenAI API', 'Claude API', 'Python', 'LangChain', 'Prompt engineering', 'FastAPI', 'PostgreSQL', 'Redis'],
        impact: [
            'Improved prompt accuracy by 35%',
            'Reduced API costs by 25% through optimization',
            'Automated prompt testing and versioning',
            'Built library of optimized prompts'
        ],
        isReal: false
    },
    {
        id: 10,
        title: 'AI Resume Analyzer & Enhancer',
        category: 'Automation',
        duration: 'Conceptual Project',
        problem: 'Job seekers struggle to optimize resumes for ATS systems and specific job descriptions. Manual resume review is subjective and time-consuming. Need for an AI system that can analyze resumes, provide feedback, and suggest improvements.',
        solution: 'Developed an AI-powered resume analyzer that extracts information, scores against job descriptions, identifies gaps, and suggests improvements. Uses NLP for entity extraction, embeddings for skill matching, and GPT-4 for enhancement suggestions. Includes ATS compatibility checker.',
        architecture: 'Resume upload (PDF/Word) → Text extraction → Entity recognition (skills, experience) → Job description matching → Embedding-based similarity → Gap analysis → GPT-4 enhancement suggestions → ATS compatibility check → Improved resume generation',
        techStack: ['Python', 'GPT-4', 'spaCy', 'LangChain', 'PDF parsers', 'Embeddings', 'FastAPI', 'Streamlit'],
        impact: [
            'Analyzed 10K+ resumes',
            'Improved ATS pass rate by 45%',
            'Personalized suggestions for each job',
            'Automated skill gap identification'
        ],
        isReal: false
    },
    {
        id: 11,
        title: 'Voice-to-Workflow AI Assistant',
        category: 'Automation',
        duration: 'Conceptual Project',
        problem: 'Complex workflows require multiple steps and tool interactions. Users want to execute workflows using natural voice commands instead of manual UI navigation. Need for an intelligent voice assistant that can understand intent and orchestrate multi-step workflows.',
        solution: 'Built a voice-activated AI assistant using Whisper for speech-to-text, GPT-4 for intent understanding, and LangChain agents for workflow orchestration. Can execute complex workflows like "Create a Jira ticket from this meeting summary and notify the team on Slack" through voice commands.',
        architecture: 'Voice input → Whisper STT → Intent extraction (GPT-4) → Workflow planning → Multi-tool orchestration (LangChain agents) → API integrations (Jira, Slack, Email) → Execution → Voice feedback (TTS)',
        techStack: ['Whisper', 'GPT-4', 'LangChain', 'Python', 'FastAPI', 'Jira API', 'Slack API', 'Text-to-Speech', 'WebSockets'],
        impact: [
            'Automated 30+ common workflows',
            'Hands-free operation for multitasking',
            'Natural language interface',
            'Integrated with 10+ enterprise tools'
        ],
        isReal: false
    },
    {
        id: 12,
        title: 'AI Dashboard Generator',
        category: 'Code Generation',
        duration: 'Conceptual Project',
        problem: 'Creating data dashboards requires technical skills in BI tools or coding. Business users want to generate dashboards from natural language descriptions. Need for an AI system that can understand requirements and generate interactive dashboards automatically.',
        solution: 'Developed an AI system that takes natural language dashboard requirements and generates complete dashboard code (HTML, JavaScript, charts). Uses GPT-4 to understand requirements, generates Plotly/Chart.js visualizations, and creates responsive layouts. Includes data connection and real-time updates.',
        architecture: 'Natural language input → Requirement parsing (GPT-4) → Data source identification → Chart type selection → Code generation (HTML/JS) → Layout optimization → Data integration → Dashboard deployment → Real-time updates',
        techStack: ['GPT-4', 'Python', 'Plotly', 'Chart.js', 'LangChain', 'FastAPI', 'React', 'SQL', 'WebSockets'],
        impact: [
            'Generated 100+ custom dashboards',
            'Reduced dashboard creation time by 90%',
            'No-code solution for business users',
            'Real-time data integration'
        ],
        isReal: false
    }
];

// Project Categories
const categories = ['All', 'Healthcare AI', 'Agentic AI', 'Automation', 'Code Generation'];
let selectedCategory = 'All';

// Render Project Filters
const projectFilters = document.getElementById('projectFilters');
categories.forEach(category => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${category === 'All' ? 'active' : ''}`;
    btn.textContent = category;
    btn.addEventListener('click', () => filterProjects(category));
    projectFilters.appendChild(btn);
});

// Filter Projects
function filterProjects(category) {
    selectedCategory = category;
    
    // Update active button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent === category) {
            btn.classList.add('active');
        }
    });
    
    // Render filtered projects
    renderProjects();
}

// Render Projects
function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';
    
    const filteredProjects = selectedCategory === 'All' 
        ? projectsData 
        : projectsData.filter(p => p.category === selectedCategory);
    
    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const techStackHTML = project.techStack.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join('');
        
        const impactHTML = project.impact.map(item => `
            <li class="impact-item">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>${item}</span>
            </li>
        `).join('');
        
        projectCard.innerHTML = `
            <div class="project-header">
                <div class="project-title-section">
                    <div class="project-title-row">
                        <h3 class="project-title">${project.title}</h3>
                        ${project.isReal ? '<span class="production-badge">Production</span>' : ''}
                    </div>
                    <div class="project-meta">
                        <span class="project-category">${project.category}</span>
                        <span>•</span>
                        <span class="project-duration">${project.duration}</span>
                    </div>
                </div>
            </div>
            
            <div class="project-section">
                <h4 class="project-section-title">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    Problem Statement
                </h4>
                <p class="project-text">${project.problem}</p>
            </div>
            
            <div class="project-section">
                <h4 class="project-section-title">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                    </svg>
                    Solution
                </h4>
                <p class="project-text">${project.solution}</p>
            </div>
            
            <div class="project-section">
                <h4 class="project-section-title">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    Architecture
                </h4>
                <p class="project-architecture">${project.architecture}</p>
            </div>
            
            <div class="project-section">
                <h4 class="project-section-title">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                    Tech Stack
                </h4>
                <div class="tech-stack">${techStackHTML}</div>
            </div>
            
            <div class="project-section">
                <h4 class="project-section-title">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                    </svg>
                    Impact & Results
                </h4>
                <ul class="impact-list">${impactHTML}</ul>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initial render
renderProjects();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
    }
});
