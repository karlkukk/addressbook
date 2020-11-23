// define variables
const form = document.querySelector('#contact-form');
const contacts = document.querySelector('#contacts-table')
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const city = document.querySelector('#city');
const street = document.querySelector('#street');
const postcode = document.querySelector('#postcode');
const phone = document.querySelector('#phone');

const contact = [firstName, lastName, city, street, postcode, phone];


// define event listeners
// add contact to table
form.addEventListener('submit', addContact);

// functions
// addContact fucntion

function addContact(e) {
    if (firstName.value === '' || lastName.value === '' || city.value === '' || street.value === '' || postcode.value === '' || phone.value === '') {
        alert("Add new contact data!")
    } else {
        // create tr
        const tr = document.createElement('tr');

        contact.forEach(function (contactData) {
            // create td
            const td = document.createElement('td');
            // add contact value to td
            td.appendChild(document.createTextNode(contactData.value));
            // append td to tr
            tr.appendChild(td);
        })


        // append tr to table
        contacts.appendChild(tr);
        e.preventDefault();
    }
}