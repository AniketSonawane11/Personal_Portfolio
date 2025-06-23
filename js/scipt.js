// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; // ✅ fixed from screenY to scrollY

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Activate navbar link
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            // Add animation class
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });
    
    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close mobile navbar after clicking a link
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Contact Form Email Sending
const form = document.querySelector("form");

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${name.value}<br>
Email: ${email.value}<br>
Phone Number: ${phone.value}<br>
Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aniketsonawane173@gmail.com",
        Password: "YOUR_REAL_PASSWORD_HERE", // ⚠️ Replace safely (Never hardcode in production)
        To: 'aniketsonawane173@gmail.com',
        From: "aniketsonawane173@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                alert("Message sent successfully!");
                form.reset();
            } else {
                alert("Message failed: " + message);
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    if (!name.value || !email.value || !phone.value || !subject.value || !message.value) {
        alert("Please fill in all fields.");
        return;
    }

    sendEmail();
});
