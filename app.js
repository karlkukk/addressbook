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
        const person = new Person(firstName.value, lastName.value, city.value, street.value, postcode.value, phone.value);
        // create tr
        const tr = document.createElement('tr');

        // create all td with person data
        tr.innerHTML = `<td>${person.firstName}</td>
                        <td>${person.lastName}</td>
                        <td>${person.city}</td>
                        <td>${person.street}</td>
                        <td>${person.postcode}</td>
                        <td>${person.phone}</td>`;
        // append tr to table
        contacts.appendChild(tr);
        e.preventDefault();
    }
}

