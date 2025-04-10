
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}




// scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');




window.onscroll = () => {

    sections.forEach(sec => {
        let top = window.screenY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active selection for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repetes on, scroll use this
        else {
            sec.classList.remove('show-animate');
        }

    });



    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scrool )

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');




}




const form = document.querySelector("form");

const name = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")
// const name = document.getElementById("name")



function sendEmail() {
    const bodyMessage = 'Full Name: ${name.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}';
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "aniketsonawane173@gmail.com",
        Password: "884582A409D71E921A1A3A13C18422D35A81",
        To: 'aniketsonawane173@gmail.com',
        From: "aniketsonawane173@gmail.com",
        Subject: subject.value,
        Body: bodyMessage
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail()
});










// window.onscroll = () => {
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky',window.scrollY > 100);
// }











