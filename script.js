/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =========================================
   COUNTERS
========================================= */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = Number(counter.dataset.target);

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const updateCounter = () => {

            current += increment;

            if (current >= target) {

                counter.textContent =
                    target.toLocaleString();

                return;

            }

            counter.textContent =
                current.toLocaleString();

            requestAnimationFrame(updateCounter);

        };

        updateCounter();

        observer.unobserve(counter);

    });

}, {
    threshold: 0.6
});

counters.forEach(counter => {
    counterObserver.observe(counter);
});


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    redsan: {

        title: "REDSAN @30",

        category:
            "ENTERTAINMENT • SPONSORSHIP • EVENT MANAGEMENT",

        location:
            "Carnivore Grounds, Nairobi",

        description:
            "A major entertainment experience celebrating REDSAN's 30th anniversary. My involvement covered both sponsorship acquisition and event execution, helping bring together the commercial and operational sides of the event.",

        responsibilities: [
            "Supported sponsorship acquisition and partner engagement.",
            "Worked on event planning and operational coordination.",
            "Coordinated logistics requirements with suppliers and partners.",
            "Supported stage, power, tents and venue-related requirements.",
            "Worked alongside ticketing and event partners.",
            "Supported on-ground execution and attendee experience."
        ],

        images: []

    },


    mogo: {

        title: "Mogo Countrywide BTL Activation",

        category:
            "BTL • ROADSHOW • FIELD MARKETING",

        location:
            "Nationwide, Kenya",

        description:
            "A large-scale BTL campaign involving Brand Ambassador teams positioned across strategic locations nationwide alongside four roadshows, each running for six days.",

        responsibilities: [
            "Coordinated Brand Ambassador deployment.",
            "Supported nationwide field execution.",
            "Briefed and equipped activation teams.",
            "Tracked field performance and activity.",
            "Coordinated roadshow routes and locations.",
            "Supported lead generation and client reporting.",
            "Resolved real-time field and operational challenges."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=1rGuQJUfxPUpAkDvQcJ5BvkeVrZig1rWO&sz=w1600",
            "https://drive.google.com/thumbnail?id=1wh-qkK2mqWbS3g83w9sv4O0vYZGxwLu4&sz=w1600"
        ]

    },


    vaal: {

        title: "VAAL Real Estate Launch",

        category:
            "EVENT MANAGEMENT • BRAND LAUNCH",

        location:
            "GTC Nairobi",

        description:
            "A real estate brand launch at GTC Nairobi, focused on creating a polished brand experience while coordinating event requirements, logistics and execution.",

        responsibilities: [
            "Supported event planning and coordination.",
            "Coordinated event logistics and suppliers.",
            "Supported guest experience and event flow.",
            "Assisted with on-ground execution.",
            "Worked to ensure the event environment aligned with the brand."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=1RVK7U219LjHQgzgMfbXFGBw8o0koKZ_k&sz=w1600"
        ]

    },


    chan: {

        title: "CHAN 2024",

        category:
            "ATL • BTL • SPORTS BRANDING",

        location:
            "Kasarani & Nyayo Stadium",

        description:
            "Supported branding and event implementation around CHAN 2024, working across ATL and BTL logistics and on-ground execution at two major stadium venues.",

        responsibilities: [
            "Supported stadium branding implementation.",
            "Coordinated branding logistics.",
            "Supported ATL and BTL execution.",
            "Worked with teams on venue requirements.",
            "Supported on-ground event operations."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=1M1VFWdZApgsFeBFZA7fhfAn8zR3NRHJ_&sz=w1600",
            "https://drive.google.com/thumbnail?id=10382hWSjwxDLRJ8qqPVT_4CM2WB497Sy&sz=w1600"
        ]

    },


    paint: {

        title: "Paint The Run",

        category:
            "WELLNESS • COMMUNITY • EVENT MANAGEMENT",

        location:
            "Nairobi",

        description:
            "A WalkingTribe experiential wellness event built around movement, community and creating an energetic participant experience.",

        responsibilities: [
            "Supported event planning.",
            "Coordinated logistics and scheduling.",
            "Supported participant experience.",
            "Worked with teams during event execution.",
            "Supported the overall WalkingTribe event experience."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=190JOQPV5PqLHWRl1WgOwIqKYbvrAzeNA&sz=w1600"
        ]

    },


    spiro: {

        title: "Spiro E-Bikes Roadshow",

        category:
            "EXPERIENTIAL • ROADSHOW",

        location:
            "Multiple Locations",

        description:
            "An experiential roadshow involving market storm activities and mobile teams designed to increase awareness and generate leads for Spiro's electric mobility offering.",

        responsibilities: [
            "Supported roadshow planning.",
            "Coordinated market storm teams.",
            "Supported route and location coordination.",
            "Tracked team activity.",
            "Supported field reporting.",
            "Communicated operational issues and solutions."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=17JnDNyzOgIuzfYw0zjU8xPL-l-aU-65i&sz=w1600",
            "https://drive.google.com/thumbnail?id=1v8wqlyx4OkQj6qkJ3QGyhYn9KHpweZje&sz=w1600"
        ]

    },


    lulu: {

        title: "Lulu & Shanga Series",

        category:
            "ENTERTAINMENT • WATCH PARTY • BRAND EXPERIENCE",

        location:
            "Nairobi",

        description:
            "Entertainment-led viewing experiences created around the Lulu & Shanga series for Multichoice and Shamba Café.",

        responsibilities: [
            "Supported event planning and execution.",
            "Coordinated event requirements.",
            "Supported guest experience.",
            "Worked with stakeholders and suppliers.",
            "Supported entertainment-led brand engagement."
        ],

        images: [
            "https://drive.google.com/thumbnail?id=1hbxuqt6VMVIYhJQlI86gkgQPsXlauowl&sz=w1200",
            "https://drive.google.com/thumbnail?id=1xfRTXd134QGrosm7GbaNSwPKUy2sYh8o&sz=w1200",
            "https://drive.google.com/thumbnail?id=1jR3AsYHuySdzbr5qtvLo1UIl9OKZGhSD&sz=w1200"
        ]

    }

};


/* =========================================
   CASE STUDY MODAL
========================================= */

const modal = document.getElementById("caseStudyModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");


document.querySelectorAll(".case-study-btn").forEach(button => {

    button.addEventListener("click", () => {

        const projectId = button.dataset.project;

        openCaseStudy(projectId);

    });

});


function openCaseStudy(projectId) {

    const project = projects[projectId];

    if (!project) return;


    let galleryHTML = "";

    if (project.images && project.images.length > 0) {

        galleryHTML = `
            <div class="modal-gallery">

                ${project.images.map(image => `

                    <img
                        src="${image}"
                        alt="${project.title}"
                        class="gallery-image"
                    >

                `).join("")}

            </div>
        `;

    }


    modalContent.innerHTML = `

        <div class="modal-meta">
            ${project.category}
        </div>

        <h2 class="modal-title">
            ${project.title}
        </h2>

        <div class="modal-meta">
            <i class="fa-solid fa-location-dot"></i>
            ${project.location}
        </div>

        <p class="modal-description">
            ${project.description}
        </p>

        <div class="modal-list">

            ${project.responsibilities.map(item => `

                <div>
                    <i class="fa-solid fa-check"></i>
                    <span>${item}</span>
                </div>

            `).join("")}

        </div>

        ${galleryHTML}

    `;


    modal.classList.add("active");

    document.body.style.overflow = "hidden";


    /* Activate lightbox on gallery images */

    document.querySelectorAll(".gallery-image").forEach(image => {

        image.addEventListener("click", () => {

            openLightbox(image.src);

        });

    });

}


/* =========================================
   CLOSE MODAL
========================================= */

function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}

modalClose.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", closeModal);


/* ESC KEY */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeModal();
        closeLightbox();

    }

});


/* =========================================
   LIGHTBOX
========================================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


function openLightbox(src) {

    lightboxImage.src = src;

    lightbox.classList.add("active");

}


function closeLightbox() {

    lightbox.classList.remove("active");

    lightboxImage.src = "";

}


lightboxClose.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", event => {

    if (event.target === lightbox) {

        closeLightbox();

    }

});


/* =========================================
   REVEAL ANIMATIONS
========================================= */

const revealElements = document.querySelectorAll(
    ".project-card, .capability-card, .approach-step, .mini-project"
);


const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();