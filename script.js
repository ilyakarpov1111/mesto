const profile = document.querySelector ('.profile');
const profileEditButton = profile.querySelector ('.profile__edit-button');
const profileName = profile.querySelector ('.profile__name');
const profileDescription = profile.querySelector ('.profile__description');
console.log(profileName.textContent);
console.log(profileDescription.textContent);
console.log(profileDescription.value);

const editPopup = document.querySelector ('.popup');
const editSubmitButton = editPopup.querySelector ('.popup__submit-button');
const editCloseButton = editPopup.querySelector ('.popup__close-button');
const editInputName = editPopup.querySelector ('.popup__input-name');
const editInputDescription = editPopup.querySelector ('.popup__input-description');

function closeEditPopup() {
    editPopup.classList.remove('popup_opened');
}
function openEditPopup() {
    editPopup.classList.add('popup_opened');
    editInputName.value = profileName.textContent;
    editInputDescription.value = profileDescription.textContent;
}
function editSubmitHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = editInputName.value;
    profileDescription.textContent = editInputDescription.value;
    editPopup.classList.remove('popup_opened');
}

profileEditButton.addEventListener('click', openEditPopup); 
editCloseButton.addEventListener('click', closeEditPopup);
editSubmitButton.addEventListener('click', editSubmitHandler);
