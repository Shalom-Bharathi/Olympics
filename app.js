const medalData = [
    { country: "United States", gold: 39, silver: 41, bronze: 33 },
    { country: "China", gold: 38, silver: 32, bronze: 18 },
    { country: "Japan", gold: 27, silver: 14, bronze: 17 },
    { country: "Great Britain", gold: 22, silver: 21, bronze: 22 },
    { country: "Russia", gold: 20, silver: 28, bronze: 23 },
    { country: "Australia", gold: 17, silver: 7, bronze: 22 },
    { country: "Netherlands", gold: 10, silver: 12, bronze: 14 },
    { country: "France", gold: 10, silver: 12, bronze: 11 },
    { country: "Germany", gold: 10, silver: 11, bronze: 16 },
    { country: "Italy", gold: 10, silver: 10, bronze: 20 },
    { country: "Canada", gold: 9, silver: 8, bronze: 10 },
    { country: "India", gold: 7, silver: 5, bronze: 6 },
    { country: "South Korea", gold: 6, silver: 6, bronze: 8 },
    { country: "New Zealand", gold: 6, silver: 3, bronze: 5 },
    { country: "Brazil", gold: 5, silver: 5, bronze: 8 },
    { country: "Spain", gold: 5, silver: 3, bronze: 6 },
    { country: "Ukraine", gold: 4, silver: 5, bronze: 6 },
    { country: "South Africa", gold: 4, silver: 3, bronze: 5 },
    { country: "Mexico", gold: 4, silver: 2, bronze: 3 },
    { country: "Hungary", gold: 3, silver: 5, bronze: 4 },
    { country: "Norway", gold: 3, silver: 3, bronze: 2 },
    { country: "Sweden", gold: 3, silver: 2, bronze: 4 },
    { country: "Finland", gold: 2, silver: 3, bronze: 5 },
    { country: "Czech Republic", gold: 2, silver: 2, bronze: 3 },
    { country: "Argentina", gold: 1, silver: 2, bronze: 3 },
    { country: "Kenya", gold: 1, silver: 1, bronze: 2 },
    { country: "Philippines", gold: 1, silver: 0, bronze: 1 },
    { country: "Egypt", gold: 1, silver: 0, bronze: 1 },
    { country: "Iran", gold: 1, silver: 0, bronze: 1 },
    { country: "Portugal", gold: 0, silver: 1, bronze: 1 },
    { country: "Iceland", gold: 0, silver: 0, bronze: 1 }
];

document.addEventListener('DOMContentLoaded', () => {
    initPage();
    createMedalChart();
});

function initPage() {
    animateHeroElements();
    initScrollAnimation();
    populateEvents(); 
    populateHighlights();
    initMedalSearch();
    populateAthletes();
    populateMoments();
    initImpactTabs();
}

function animateHeroElements() {
    const heroElements = document.querySelectorAll('.hero-element');
    heroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

function initScrollAnimation() {
    const animateItems = document.querySelectorAll('.animate-item');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    animateItems.forEach(item => observer.observe(item));
}

function populateHighlights() {
    const highlights = [
        { title: "Record-Breaking 100m Sprint", description: "Usain Bolt's successor sets a new world record.", image: "./assets/OH1.webp", link: "https://www.youtube.com/watch?v=VhjvNjULeNY" },
        { title: "Artistic Gymnastics Perfection", description: "A flawless routine earns a perfect 10.", image: "./assets/OH2.webp", link: "https://www.youtube.com/watch?app=desktop&v=bHQd6-42SHY" },
        { title: "Marathon Miracle", description: "Underdog athlete wins gold in a thrilling finish.", image: "./assets/OH3.jpeg", link: "https://www.espn.in/olympics/story/_/id/40803378/tamirat-tola-wins-gold-men-marathon" },
        { title: "Diving Triumph", description: "A stunning dive secures a gold medal.", image: "./assets/OH4.png", link: "https://showcasemagazine.medium.com/team-gb-clinches-first-medal-at-2024-olympics-with-bronze-in-womens-3m-synchronized-springboard-cda73d282a7f" },
        { title: "Team Relay Victory", description: "A last-minute surge leads to a historic relay win.", image: "./assets/OH5.jpeg", link: "https://apnews.com/article/2024-olympics-richardson-3bea5e3c280d04b034f4538eac10952b" },
        { title: "Fencing Showdown", description: "An epic duel ends with a nail-biting finish.", image: "./assets/OH6.webp", link: "https://timesofindia.indiatimes.com/sports/paris-olympics-2024/paris-olympic-fencing-world-number-ones-suffer-major-upsets-before-quarter-finals/articleshow/112114657.cms" },
        { title: "Swimming Sensation", description: "A young swimmer breaks multiple records in one event.", image: "./assets/OH7.webp", link: "https://www.foxnews.com/sports/16-year-old-canadian-swimming-sensation-sets-world-record-trials" },
        { title: "Weightlifting Wonder", description: "An athlete lifts an astonishing weight to claim gold.", image: "./assets/OH8.jpg", link: "https://ironmind.com/news/Ilya-Ilin-Returns-to-Weightlifting-a-Winner-Again/" },
    ];

    const highlightsGrid = document.getElementById('highlights-grid');
    highlights.forEach(highlight => {
        const card = document.createElement('div');
        card.className = 'relative bg-cover bg-center rounded-lg shadow-lg highlight-card';
        card.style.backgroundImage = `url(${highlight.image})`;
        card.style.height = '300px';
        card.style.color = 'white';
        card.style.display = 'flex';
        
        card.style.flexDirection = 'column';
        card.style.justifyContent = 'flex-end';
        card.style.padding = '1rem';
        card.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        card.style.position = 'relative';
        card.style.overflow = 'hidden';

        const overlay = document.createElement('div');
        overlay.className = 'absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-start p-4 opacity-0 transition-opacity duration-300';
        overlay.innerHTML = `
            <h3 class="text-2xl font-bold">${highlight.title}</h3>
            <p>${highlight.description}</p>
        `;
        card.appendChild(overlay);

        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * highlightsGrid.children.length);

        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            overlay.style.opacity = '1';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
            overlay.style.opacity = '0';
        });

        card.addEventListener('click', () => {
            window.open(highlight.link, '_blank');
        });

        highlightsGrid.appendChild(card);
    });
}

function initMedalSearch() {
    const searchInput = document.getElementById("SearchInput")
    const searchResults = document.getElementById("SearchContent")

    const medalSection = document.getElementById('medals');
    
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredCountries = medalData.filter(country => 
            country.country.toLowerCase().includes(searchTerm)
        );
        displaySearchResults(filteredCountries, searchResults);
    });
}

function displaySearchResults(countries, container) {
    container.innerHTML = '';
    countries.forEach(country => {
        const countryElement = document.createElement('div');
        countryElement.className = 'p-2 hover:bg-gray-100 cursor-pointer';
        countryElement.textContent = country.country;
        countryElement.addEventListener('click', () => selectCountry(country));
        container.appendChild(countryElement);
    });
}

function selectCountry(country) {
    updateMedalTable(country);
    updateMedalChart(country);
}

function updateMedalTable(country) {
    const tableBody = document.getElementById('medal-table-body');
    tableBody.innerHTML = `
        <tr>
            <td class="py-2">${country.country}</td>
            <td class="py-2">${country.gold}</td>
            <td class="py-2">${country.silver}</td>
            <td class="py-2">${country.bronze}</td>
            <td class="py-2">${country.gold + country.silver + country.bronze}</td>
        </tr>
    `;
}

function updateMedalChart(country) {
    const ctx = document.getElementById('medal-chart').getContext('2d');
    if (window.medalChart) {
        window.medalChart.destroy();
    }
    window.medalChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Gold', 'Silver', 'Bronze'],
            datasets: [{
                label: 'Medals',
                data: [country.gold, country.silver, country.bronze],
                backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

function createMedalChart() {
    const ctx = document.getElementById('medal-chart').getContext('2d');
    window.medalChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Gold', 'Silver', 'Bronze'],
            datasets: [{
                label: 'Medals',
                data: [39, 41, 33],
                backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top'
                }
            }
        }
    });
}

function populateAthletes() {
    const athletes = [
        { name: "Simone Biles", sport: "Gymnastics", achievement: "5-time Olympic medalist", image: "./assets/SimoneBiles.avif" },
        { name: "Caeleb Dressel", sport: "Swimming", achievement: "7-time Olympic gold medalist", image: "./assets/CaelebDressel.avif" },
        { name: "Eliud Kipchoge", sport: "Marathon", achievement: "2-time Olympic champion", image: "./assets/EliudKipchoge.avif" }
    ];

    const athletesGrid = document.getElementById('athletes-grid');
    athletes.forEach(athlete => {
        const card = document.createElement('div');
        card.className = 'bg-gray-700 rounded-lg p-6 shadow-lg athlete-card transition-transform duration-300 hover:scale-105 athletesDivs';
        
        card.innerHTML = `
            <div class="flex flex-col items-center">
                <img src="${athlete.image}" alt="${athlete.name}" class="w-32 h-32 object-cover rounded-full mb-4">
                <h3 class="text-2xl font-bold mb-2 text-center">${athlete.name}</h3>
                <p class="mb-2 text-center">${athlete.sport}</p>
                <p class="text-center">${athlete.achievement}</p>
            </div>
        `;
        
        athletesGrid.appendChild(card);

        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 1000,
            easing: 'easeOutExpo'
        });
    });
}

function populateMoments() {
    const moments = [
        { 
            title: "Dramatic Finish in Swimming Relay", 
            description: "USA edges out Australia by 0.03 seconds in thrilling 4x100m freestyle relay.",
            image: "./assets/swimming-relay.webp"
        },
        { 
            title: "Unexpected Victory in Tennis", 
            description: "Unseeded player defeats world #1 in an intense five-set match.",
            image: "./assets/TennisVictory.jpg"
        },
        { 
            title: "Record-Breaking High Jump", 
            description: "Athlete clears 2.45m, setting a new Olympic record.",
            image: "./assets/Record-Breaking-High-Jump.avif"
        },
        { 
            title: "Gymnastics Perfect 10", 
            description: "Gymnast scores a perfect 10 on balance beam, a rare feat in modern Olympics.",
            image: "./assets/Gymnastics-Perfect-10.jpg"
        }
    ];

    const momentsGrid = document.getElementById('moments-grid');
    moments.forEach(moment => {
        const card = document.createElement('div');
        card.className = 'bg-cover bg-center rounded-lg shadow-lg moment-card';
        card.style.backgroundImage = `url(${moment.image})`;
        card.innerHTML = `
            <div class="moment-card-content">
                <h3 class="text-2xl font-bold mb-2">${moment.title}</h3>
                <p>${moment.description}</p>
            </div>
        `;
        momentsGrid.appendChild(card);

        VanillaTilt.init(card, {
            max: 15,
            speed: 300,
            glare: true,
            "max-glare": 0.5,
            scale: 1.05
        });
    });
}

function populateEvents() {
    const events = [
    { 
        name: "Athletics", 
        venue: "Stade de France", 
        description: "Track and field events including sprints, long-distance runs, jumps, and throws.",
        image: "./assets/Athletics.webp",
        athletes: 2000,
        medals: 48,
        worldRecords: 3
    },
    { 
        name: "Swimming", 
        venue: "Paris Aquatics Centre", 
        description: "Various swimming styles and distances, including relays and individual medleys.",
        athletes: 1500,
        medals: 35,
        worldRecords: 2
    },
    { 
        name: "Gymnastics", 
        venue: "Bercy Arena", 
        description: "Artistic and rhythmic gymnastics featuring floor exercises, apparatus work, and more.",
        athletes: 500,
        medals: 18,
        worldRecords: 1
    },
    { 
        name: "Cycling", 
        venue: "Champs-Élysées & Velodrome National", 
        description: "Road races, time trials, track cycling, BMX, and mountain biking events.",
        athletes: 800,
        medals: 22,
        worldRecords: 1
    },
    { 
        name: "Beach Volleyball", 
        venue: "Eiffel Tower Stadium", 
        description: "Fast-paced matches played on sand courts with the iconic Eiffel Tower as a backdrop.",
        athletes: 200,
        medals: 2,
        worldRecords: 0
    }
];

    const eventsNav = document.getElementById('events-nav');
    const eventContent = document.getElementById('event-content');

    events.forEach((event, index) => {
        const navItem = document.createElement('div');
        navItem.className = `event-nav-item ${index === 0 ? 'active' : ''}`;
        navItem.textContent = event.name;
        navItem.addEventListener('click', () => switchEvent(index));
        eventsNav.appendChild(navItem);
    });

    function switchEvent(index) {
        const navItems = document.querySelectorAll('.event-nav-item');
        navItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });

        const event = events[index];
        eventContent.innerHTML = `
            <div class="event-image"></div>
            <div class="event-details">
                <h3>${event.name}</h3>
                <p><strong>Venue:</strong> ${event.venue}</p>
                <p>${event.description}</p>
                <div class="event-stats">
                    <div class="stat-item">
                        <div class="stat-value">${event.athletes}</div>
                        <div class="stat-label">Athletes</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${event.medals}</div>
                        <div class="stat-label">Medals</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-value">${event.worldRecords}</div>
                        <div class="stat-label">World Records</div>
                    </div>
                </div>
            </div>
        `;

        eventContent.classList.remove('active');
        setTimeout(() => eventContent.classList.add('active'), 50);
    }

    switchEvent(0);
}

function initImpactTabs() {
    const impacts = ['Economic', 'Social', 'Environmental'];
    const tabsContainer = document.getElementById('impact-tabs');
    const contentContainer = document.getElementById('impact-content');

    impacts.forEach((impact, index) => {
        const tab = document.createElement('button');
        tab.textContent = impact;
        tab.className = `impact-tab px-4 py-2 text-sm font-medium ${index === 0 ? 'active bg-red-600 text-white' : 'bg-gray-700 text-gray-300'}`;
        tab.onclick = () => switchImpactTab(impact);
        tabsContainer.appendChild(tab);
    });

    switchImpactTab('Economic');
}

function switchImpactTab(impact) {
    const tabs = document.querySelectorAll('.impact-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active', 'bg-red-600', 'text-white');
        tab.classList.add('bg-gray-700', 'text-gray-300');
        if (tab.textContent === impact) {
            tab.classList.add('active', 'bg-red-600', 'text-white');
            tab.classList.remove('bg-gray-700', 'text-gray-300');
        }
    });

    const contentContainer = document.getElementById('impact-content');
    contentContainer.innerHTML = `<h3 class="text-3xl font-bold mb-4">${impact} Impact</h3>`;

    switch (impact) {
        case 'Economic':
            contentContainer.innerHTML += `
                <p class="mb-4">The Paris 2024 Olympics are projected to generate significant economic benefits for France, including job creation and increased tourism revenue.</p>
                <div class="chart-container">
                    <canvas id="economic-chart"></canvas>
                </div>
            `;
            createEconomicChart();
            break;
        case 'Social':
            contentContainer.innerHTML += `
                <p class="mb-4">The Olympics have fostered community engagement and promoted sports participation across France, leaving a lasting social legacy.</p>
                <div class="chart-container">
                    <canvas id="social-chart"></canvas>
                </div>
            `;
            createSocialChart();
            break;
        case 'Environmental':
            contentContainer.innerHTML += `
                <p class="mb-4">Paris 2024 has implemented various sustainability initiatives, aiming to be the first carbon-neutral Olympic Games.</p>
                <div class="chart-container">
                    <canvas id="environmental-chart"></canvas>
                </div>
            `;
            createEnvironmentalChart();
            break;
    }
}

function createEconomicChart() {
    const ctx = document.getElementById('economic-chart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Tourism Revenue', 'Job Creation', 'Infrastructure Investment'],
            datasets: [{
                label: 'Economic Impact (Billion €)',
                data: [3.5, 2.1, 4.8],
                backgroundColor: 'rgba(239, 68, 68, 0.7)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        max: 5
                    }
                }
            }
        }
    });
}

function createSocialChart() {
    const ctx = document.getElementById('social-chart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Increased Sports Participation', 'Community Engagement', 'Cultural Exchange'],
            datasets: [{
                data: [40, 35, 25],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

function createEnvironmentalChart() {
    const ctx = document.getElementById('environmental-chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Carbon Emissions (Million Tonnes)',
                data: [10, 9, 8, 6, 5],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}