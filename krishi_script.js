
        let currentSlide = 0;

        function googleTranslateElementInit() {
            new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,ta,bn,gu',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
            }, 'google_translate_element');
        }

        function selectLanguage(lang) {
            localStorage.setItem('selectedLanguage', lang);
            document.getElementById('language-selection').style.display = 'none';
            document.getElementById('landing-page').style.display = 'flex';
            setTimeout(() => {
                document.getElementById('landing-page').style.opacity = '1';
            }, 100);
        }

        function enterSite() {
            let mainContent = document.getElementById('main-content');
            document.getElementById('landing-page').style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
                document.getElementById('slider-container').style.display = 'block'; // Show slider after entering
            }, 100);
        }

        function nextSlide() {
            const slides = document.querySelectorAll('.slider img');
            if (currentSlide < slides.length - 1) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            updateSlider();
        }

        function prevSlide() {
            const slides = document.querySelectorAll('.slider img');
            if (currentSlide > 0) {
                currentSlide--;
            } else {
                currentSlide = slides.length - 1;
            }
            updateSlider();
        }

        function updateSlider() {
            const slider = document.getElementById('slider');
            slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
        }

        window.onload = () => {
            if (localStorage.getItem('selectedLanguage')) {
                enterSite();
            } else {
                document.getElementById('language-selection').style.display = 'flex';
            }
        };
        const jobData = {
        crop_management: [
            {
                title: "Crop Management Specialist",
                description: "Assist farmers with crop management using AI-based tools.",
            },
            {
                title: "Field Technician",
                description: "Monitor and guide the cultivation of crops in rural areas.",
            },
        ],
        soil_health: [
            {
                title: "Soil Health Expert",
                description: "Help farmers improve soil quality using AI-driven diagnostics.",
            },
            {
                title: "Agri-Soil Consultant",
                description: "Provide consultation for soil treatment and maintenance.",
            },
        ],
        irrigation: [
            {
                title: "Irrigation System Planner",
                description: "Design efficient irrigation systems to improve crop yields.",
            },
            {
                title: "Water Management Expert",
                description: "Develop sustainable water management techniques for rural farming.",
            },
        ],
        farming_technology: [
            {
                title: "Agri-Tech Engineer",
                description: "Introduce new technologies to streamline farming operations.",
            },
            {
                title: "Farm Automation Specialist",
                description: "Integrate automation systems to increase farm productivity.",
            },
        ],
        organic_farming: [
            {
                title: "Organic Farming Consultant",
                description: "Advise farmers on organic farming techniques for sustainable practices.",
            },
            {
                title: "Organic Crop Advisor",
                description: "Help farmers transition to organic farming for better crop health.",
            },
        ],
    };

    // Function to update job suggestions based on selected skill
    function updateJobSuggestions() {
        const skill = document.getElementById('skills-dropdown').value;
        const jobSuggestions = jobData[skill] || [];

        // Clear previous job listings
        const jobListingsContainer = document.getElementById('job-suggestions');
        jobListingsContainer.innerHTML = '';

        // Generate job cards for selected skill
        jobSuggestions.forEach((job) => {
            const jobCard = document.createElement('div');
            jobCard.classList.add('job-card');

            const jobTitle = document.createElement('h3');
            jobTitle.textContent = job.title;

            const jobDesc = document.createElement('p');
            jobDesc.textContent = job.description;

            const applyButton = document.createElement('button');
            applyButton.textContent = 'Apply Now';

            jobCard.appendChild(jobTitle);
            jobCard.appendChild(jobDesc);
            jobCard.appendChild(applyButton);

            jobListingsContainer.appendChild(jobCard);
        });
    }
