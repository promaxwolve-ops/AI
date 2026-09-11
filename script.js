/* =====================================================
   VISIONAI ACADEMY JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close menu after clicking a link */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions =
    document.querySelectorAll(".faq-question");


faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            question.parentElement;


        const isOpen =
            currentItem.classList.contains("open");


        /* Close all FAQ items */

        document.querySelectorAll(".faq-item")
            .forEach(function (item) {

                item.classList.remove("open");

            });


        /* Open selected item */

        if (!isOpen) {

            currentItem.classList.add("open");

        }

    });

});


/* =====================================================
   COURSE MODAL
===================================================== */

const courseModal =
    document.getElementById("courseModal");

const courseTitle =
    document.getElementById("courseTitle");


function showCourse(courseName) {

    courseTitle.textContent =
        courseName;

    courseModal.classList.add("show");

}


function closeCourse() {

    courseModal.classList.remove("show");

}


/* Close modal when clicking outside */

courseModal.addEventListener(
    "click",
    function (event) {

        if (event.target === courseModal) {

            closeCourse();

        }

    }
);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".learning-card, .course-card, .about-content, .about-visual"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* Add the visible animation */

const animationStyle =
    document.createElement("style");


animationStyle.textContent = `

    .learning-card.visible,
    .course-card.visible,
    .about-content.visible,
    .about-visual.visible {

        opacity: 1 !important;

        transform: translateY(0) !important;

    }

`;


document.head.appendChild(animationStyle);


/* =====================================================
   HERO SCREEN ANIMATION
===================================================== */

const aiScreen =
    document.querySelector(".ai-screen");


let rotation = 4;


setInterval(function () {

    rotation =
        rotation === 4 ? 2 : 4;

    aiScreen.style.transform =
        "translate(-50%,-50%) rotate(" +
        rotation +
        "deg)";

}, 2500);


/* =====================================================
   GOLD BUTTON EFFECT
===================================================== */

const goldButtons =
    document.querySelectorAll(".gold-button");


goldButtons.forEach(function (button) {

    button.addEventListener(
        "mouseenter",
        function () {

            button.style.letterSpacing =
                "0.4px";

        }
    );


    button.addEventListener(
        "mouseleave",
        function () {

            button.style.letterSpacing =
                "";

        }
    );

});


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeCourse();

        }

    }
);