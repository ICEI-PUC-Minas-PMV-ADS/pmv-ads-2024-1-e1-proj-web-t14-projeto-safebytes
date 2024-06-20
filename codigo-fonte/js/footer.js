

const footer = document.createElement('footer');
footer.id = 'footer01';
footer.className = 'footer01';

body.appendChild(footer);

const footerDiv =
    "<div class='footerDiv'>" +
        "<div class='footerTxt'>" +
            "<h7>Entre em contato conosco!</h7>" +
        "</div>" +
        "<div class='footerIcons'>" +
            "<div class='footerIcon'>" +
                "<a href='https://wa.me/15551234567' class='footerIconLink' target='_blank'>" +
                    "<i class='bi bi-whatsapp'></i>" +
                "</a>" +
            "</div>" +
            "<div class='footerIcon'>" +
                "<a href='mailto:vigiavirtual@gmail.com' class='footerIconLink' target='_blank'>" +
                    "<i class='bi bi-envelope'></i>" +
                "</a>" +
            "</div>" +
        "</div>" +
    "</div>"

footer.innerHTML += footerDiv;

