// Blog Articles Data
const blogArticles = [
    {
        id: 1,
        title: "Top 10 Wellness Apps for Mental Health in 2025",
        category: "wellness",
        date: "2025-08-15",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=400&fit=crop",
        excerpt: "Discover the best mental health and wellness apps that can transform your daily routine and improve your overall well-being.",
        content: `In today's fast-paced world, mental health has become a priority for many. These carefully selected wellness apps offer innovative solutions for stress management, meditation, and emotional well-being.

        From AI-powered therapy assistants to mindfulness meditation guides, these apps are revolutionizing how we approach mental health care. Each app has been tested for effectiveness, user experience, and value for money.

        Whether you're dealing with anxiety, looking to improve your sleep quality, or simply want to develop better mental habits, these apps provide accessible, affordable solutions right at your fingertips.`,
        author: "Sarah Johnson"
    },
    {
        id: 2,
        title: "Smart Home Technology: A Complete Guide for Beginners",
        category: "technology",
        date: "2025-07-22",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=400&fit=crop",
        excerpt: "Transform your living space into a smart home with our comprehensive guide covering everything from basic setups to advanced automation.",
        content: `Smart home technology has evolved from a luxury to an accessible reality for homeowners. This guide will walk you through the essentials of creating your own intelligent living space.

        We'll explore the best smart home hubs, voice assistants, security systems, and energy-saving devices. Learn how to integrate different ecosystems and create automation routines that simplify your daily life.

        From smart lighting that adjusts to your mood to thermostats that learn your preferences, discover how these technologies can enhance comfort, security, and energy efficiency in your home.`,
        author: "Michael Chen"
    },
    {
        id: 3,
        title: "Sustainable Living: Eco-Friendly Products That Make a Difference",
        category: "lifestyle",
        date: "2025-06-10",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=400&fit=crop",
        excerpt: "Explore eco-friendly products that help reduce your carbon footprint while maintaining quality and style in your daily life.",
        content: `Sustainable living doesn't mean compromising on quality or convenience. This article showcases innovative eco-friendly products that seamlessly integrate into your lifestyle while helping protect our planet.

        From bamboo toothbrushes to solar-powered chargers, we've curated products that combine functionality with environmental responsibility. Each item has been selected based on its sustainability credentials, durability, and practical value.

        Learn about brands that are leading the green revolution and discover how small changes in your purchasing decisions can contribute to a larger environmental impact.`,
        author: "Emma Wilson"
    },
    {
        id: 4,
        title: "Remote Work Productivity: Essential Tools and Platforms",
        category: "business",
        date: "2025-05-18",
        image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&h=400&fit=crop",
        excerpt: "Maximize your remote work efficiency with these essential productivity tools and collaboration platforms designed for distributed teams.",
        content: `The remote work revolution has transformed how we collaborate and stay productive. This comprehensive review covers the most effective tools and platforms for remote professionals and teams.

        We analyze project management software, video conferencing solutions, time tracking apps, and virtual collaboration spaces. Each tool is evaluated based on features, pricing, integration capabilities, and user experience.

        Whether you're a freelancer, remote employee, or managing a distributed team, these tools will help you maintain productivity, improve communication, and achieve better work-life balance.`,
        author: "David Martinez"
    },
    {
        id: 5,
        title: "Fitness Tracking Revolution: Best Wearables of 2025",
        category: "technology",
        date: "2025-04-25",
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=800&h=400&fit=crop",
        excerpt: "Compare the latest fitness trackers and smartwatches that are revolutionizing personal health monitoring and workout optimization.",
        content: `The fitness wearable market has exploded with innovative devices that go beyond simple step counting. Today's smartwatches and fitness trackers offer comprehensive health monitoring, AI-powered coaching, and seamless integration with your digital life.

        We've tested the top contenders from Apple, Garmin, Fitbit, and emerging brands. Our analysis covers accuracy of health metrics, battery life, comfort, app ecosystems, and value proposition.

        Discover which device best suits your fitness goals, whether you're a casual walker, serious athlete, or someone focused on overall health improvement.`,
        author: "Lisa Anderson"
    },
    {
        id: 6,
        title: "Digital Marketing Platforms: Comprehensive Review",
        category: "platform-review",
        date: "2025-03-12",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        excerpt: "An in-depth analysis of leading digital marketing platforms, comparing features, pricing, and ROI for businesses of all sizes.",
        content: `Digital marketing platforms have become essential for business growth in the online era. This comprehensive review examines the top platforms that can transform your marketing strategy.

        We evaluate HubSpot, Mailchimp, Hootsuite, SEMrush, and other leading solutions. Each platform is assessed for email marketing capabilities, social media management, SEO tools, analytics, and automation features.

        Learn which platform aligns with your business size, budget, and marketing objectives. We provide real-world case studies and tips for maximizing ROI from your chosen platform.`,
        author: "Robert Taylor"
    },
    {
        id: 7,
        title: "Mindful Morning Routines for Success",
        category: "wellness",
        date: "2025-02-20",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=400&fit=crop",
        excerpt: "Transform your mornings with mindfulness practices and routines that set the tone for productive, fulfilling days.",
        content: `The way you start your morning can determine the trajectory of your entire day. This guide explores evidence-based morning routines that successful individuals use to maximize their potential.

        We cover meditation techniques, journaling practices, exercise routines, and nutrition tips that can be customized to your lifestyle. Learn how to create a morning ritual that energizes your body and focuses your mind.

        Discover the science behind morning routines and how consistency in these practices can lead to improved mental clarity, increased productivity, and better overall well-being.`,
        author: "Jennifer Brown"
    },
    {
        id: 8,
        title: "E-Learning Platforms: Finding the Right Fit",
        category: "platform-review",
        date: "2025-01-15",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
        excerpt: "Navigate the world of online learning with our detailed comparison of top e-learning platforms for personal and professional development.",
        content: `The e-learning industry has democratized education, making quality courses accessible to anyone with an internet connection. This review helps you choose the right platform for your learning goals.

        We examine Coursera, Udemy, LinkedIn Learning, MasterClass, and specialized platforms. Each is evaluated for course quality, instructor credentials, certification value, pricing models, and learning experience.

        Whether you're looking to acquire new skills, change careers, or pursue personal interests, find the platform that offers the best combination of content quality, affordability, and recognized credentials.`,
        author: "Thomas Garcia"
    },
    {
        id: 9,
        title: "Discover Durable and Comfortable Clothing for School & Beyond",
        category: "lifestyle",
        date: "2025-08-25",
        image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=800&h=400&fit=crop",
        excerpt: "Find the perfect balance between durability, comfort, and style with quality school uniforms and everyday wear for active kids and teens.",
        content: `When it comes to school clothing and everyday wear for kids and teens, finding the perfect balance between durability, comfort, and style can be challenging. French Toast has emerged as a leading provider of quality school uniforms and casual wear.

        From reinforced knees to moisture-wicking fabrics, modern school clothing incorporates features that support active lifestyles. Learn about smart shopping strategies for growing kids and discover how quality clothing can boost confidence and performance.

        Explore size-inclusive options, sustainability benefits, and care tips that extend the life of school clothing while maintaining affordability for families.`,
        author: "Michelle Roberts"
    },
    {
        id: 10,
        title: "Durable & Comfortable School Wear for Every Student",
        category: "lifestyle",
        date: "2025-08-20",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=400&fit=crop",
        excerpt: "Explore the essential features that make school clothing both durable and comfortable, ensuring students can focus on learning while looking their best.",
        content: `Finding the perfect balance between durability, comfort, and style in school clothing is crucial for student success. Quality school wear must withstand daily activities while providing the comfort needed for long school days.

        Modern school uniforms incorporate advanced fabric technologies, including moisture-wicking materials and stretch fabrics that move with students. French Toast leads the industry with innovative designs that combine traditional school wear aesthetics with contemporary comfort features.

        Learn about sizing options, care instructions, and the long-term value of investing in quality school clothing that supports student confidence and academic achievement.`,
        author: "Emma Rodriguez"
    },
    {
        id: 11,
        title: "Jessops' Best Offers: Save on Lenses, Drones & Telescopes",
        category: "technology",
        date: "2025-12-12",
        image: "jessops1.png",
        excerpt: "Explore the latest Jessops deals on lenses, drones, and telescopes, with bundles and cashback offers that make upgrading your gear more affordable this season.",
        content: `Jessops is rolling out stacked savings on optics, aerial gear, and astronomy essentials just in time for year-end shooting. Expect cashback on popular zoom and prime lenses, lightweight drone kits with extra batteries, and entry-level telescopes bundled with smartphone adapters for easy skywatching.

        The value goes beyond sticker prices: trade-in bonuses help you retire aging equipment, while accessory bundles add batteries, ND filters, and cases without inflating the cost. If you're planning to refresh your kit for 2026 projects, this is a prime window to upgrade without overspending.`,
        author: "Daniel Moore"
    },
    {
        id: 12,
        title: "Lenovo Gaming: High-Performance PCs, Laptops & Handhelds",
        category: "technology",
        date: "2025-12-08",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=800&h=400&fit=crop",
        excerpt: "Dive into Lenovo gaming PCs, laptops, and handhelds that balance high performance with smart design for everyday players and competitive gamers alike.",
        content: `From overclocked towers to slim gaming notebooks and handheld PCs, Lenovo is building a family of hardware that feels tuned for real-world players rather than just benchmark charts.

        Thoughtful details like stronger cooling, tuned keyboards and generous ports show up the longer you play, turning a good gaming purchase into a system you quietly rely on night after night.`,
        author: "Mark Stevens"
    }
];

// DOM Elements
const blogGrid = document.getElementById('blogGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const pagination = document.getElementById('pagination');
const backToTopBtn = document.getElementById('backToTop');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const contactForm = document.getElementById('contactForm');

// Pagination variables
let currentPage = 1;
const articlesPerPage = 6;
let filteredArticles = [...blogArticles].sort((a, b) => new Date(b.date) - new Date(a.date));

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayArticles();
    setupEventListeners();
    initializeSlider();
    initCookieBanner();
});

// Display articles with pagination
function displayArticles() {
    const startIndex = (currentPage - 1) * articlesPerPage;
    const endIndex = startIndex + articlesPerPage;
    const articlesToShow = filteredArticles.slice(startIndex, endIndex);

    blogGrid.innerHTML = '';

    articlesToShow.forEach(article => {
        const articleCard = createArticleCard(article);
        blogGrid.appendChild(articleCard);
    });

    updatePagination();
}

// Create article card
function createArticleCard(article) {
    const card = document.createElement('div');
    card.className = 'blog-card';
    card.innerHTML = `
        <img src="${article.image}" alt="${article.title}">
        <div class="blog-card-content">
            <div class="blog-meta">
                <span class="blog-category">${article.category}</span>
                <span class="blog-date">${formatDate(article.date)}</span>
            </div>
            <h3><a href="article.html?id=${article.id}">${article.title}</a></h3>
            <p>${article.excerpt}</p>
            <a href="article.html?id=${article.id}" class="read-more">
                Read More <i class="fas fa-arrow-right"></i>
            </a>
        </div>
    `;
    return card;
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Update pagination
function updatePagination() {
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    pagination.innerHTML = '';

    // Previous button
    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayArticles();
            scrollToSection('blog');
        }
    };
    pagination.appendChild(prevBtn);

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.textContent = i;
        pageBtn.className = i === currentPage ? 'active' : '';
        pageBtn.onclick = () => {
            currentPage = i;
            displayArticles();
            scrollToSection('blog');
        };
        pagination.appendChild(pageBtn);
    }

    // Next button
    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayArticles();
            scrollToSection('blog');
        }
    };
    pagination.appendChild(nextBtn);
}

// Filter articles
function filterArticles() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;

    filteredArticles = blogArticles.filter(article => {
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) ||
                             article.excerpt.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    // Sort by date (newest first)
    filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

    currentPage = 1;
    displayArticles();
}

// Setup event listeners
function setupEventListeners() {
    // Search and filter
    searchInput.addEventListener('input', filterArticles);
    categoryFilter.addEventListener('change', filterArticles);

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Back to top button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for subscribing to our newsletter!');
        e.target.reset();
    });
}

// Initialize slider
function initializeSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].classList.add('active');
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Auto-play slider
    setInterval(nextSlide, 5000);
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = 100;
        const sectionTop = section.offsetTop - offset;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// Add smooth reveal animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.5s ease forwards';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.product-card, .stat, .info-item');
    animatedElements.forEach(el => observer.observe(el));
});

// Basic cookie consent banner
const COOKIE_KEY = 'cookie-consent-v1';
function initCookieBanner() {
    if (localStorage.getItem(COOKIE_KEY)) return;

    const banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.style.cssText = 'position:fixed;left:16px;right:16px;bottom:16px;z-index:9999;display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;color:#fff;border-radius:8px;box-shadow:0 6px 20px rgba(0,0,0,.25);flex-wrap:wrap;';
    banner.innerHTML = `
        <div style="flex:1;min-width:240px;">We use cookies to improve your experience. Manage preferences anytime.</div>
        <button id="cookie-accept" style="background:#22c55e;color:#fff;border:0;border-radius:6px;padding:8px 12px;cursor:pointer;">Accept All</button>
        <button id="cookie-manage" style="background:#fff;color:#111;border:0;border-radius:6px;padding:8px 12px;cursor:pointer;">Manage Preferences</button>
    `;

    document.body.appendChild(banner);

    const acceptBtn = document.getElementById('cookie-accept');
    const manageBtn = document.getElementById('cookie-manage');

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem(COOKIE_KEY, JSON.stringify({ accepted: true, ts: Date.now() }));
        banner.remove();
        // TODO: trigger non-essential scripts after consent
    });

    manageBtn.addEventListener('click', () => {
        alert('Please implement your cookie preferences modal or page here.');
    });
}