const profile = document.querySelector ('.profile');
const profileEditButton = profile.querySelector ('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector ('.profile__name');
const profileDescription = profile.querySelector ('.profile__description');

const popupProfile = document.querySelector('.profile-popup');
const popupProfileSubmitButton = popupProfile.querySelector ('.popup__submit-button');
const popupProfileCloseButton = popupProfile.querySelector ('.popup__close-button');
const popupProfileInputName = popupProfile.querySelector ('.popup__input-username');
const popupProfileInputDescription = popupProfile.querySelector ('.popup__input-description');

const popupAdd = document.querySelector('.add-popup');
const popupAddSubmitButton = popupAdd.querySelector('.popup__submit-button');
const popupAddCloseButton = popupAdd.querySelector ('.popup__close-button');
const popupAddInputName = popupAdd.querySelector ('.popup__input-name');
const popupAddInputLink = popupAdd.querySelector ('.popup__input-link');

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;

const popupCard = document.querySelector('.card-popup');
const popupCardImage = popupCard.querySelector('.card-popup__image');
const popupCardTitle = popupCard.querySelector('.card-popup__title');
const popupCardCloseButton = popupCard.querySelector('.card-popup__close-button');

const overlay = document.querySelectorAll('.overlay');

console.log(overlay);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 
function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
  }
function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}
function clearInputs() {
  popupAddInputLink.value = ''; 
  popupAddInputName.value = '';
}
function setListeners(card) {
  card.querySelector('.card__like-button').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like-button_active');
 });
card.querySelector('.card__delete-button').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
 });
card.querySelector('.card__image').addEventListener('click', function(evt) {
   popupCardImage.src = card.querySelector('.card__image').src;
  popupCardTitle.textContent = card.querySelector('.card__title').textContent;
  openPopup(popupCard);
});
}
function initialCard(item) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__image').alt = item.name;
    cards.prepend(card);
    setListeners(card);
}
function createCard() {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = popupAddInputLink.value;
  card.querySelector('.card__title').textContent = popupAddInputName.value;
  card.querySelector('.card__image').alt = popupAddInputName.value;
  cards.prepend(card);
  clearInputs();
  setListeners(card);
}
function setProfile() {
  popupProfileInputName.value = profileName.textContent;
  popupProfileInputDescription.value = profileDescription.textContent;
}
function enableSubmitButton() {
  popupProfileSubmitButton.classList.remove('popup__submit-button_inactive')
}
function popupProfileSubmitButtonHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = popupProfileInputName.value;
    profileDescription.textContent = popupProfileInputDescription.value;
    closePopup(popupProfile);
}
function popupAddSubmitButtonHandler (evt) {
    evt.preventDefault();  
    createCard();   
    closePopup(popupAdd);
}
function profileEditButtonHandler() {
  openPopup(popupProfile);
  popupProfileInputName.value = profileName.textContent;
  popupProfileInputDescription.value = profileDescription.textContent;
  enableSubmitButton()
}

function overlayHandler(evt) {
overlay.forEach((item) =>{
  item.addEventListener('click', ()=>{
    closePopup(evt)
  })
})
}

initialCards.forEach((item) => {
  initialCard(item);
});
profileEditButton.addEventListener('click', profileEditButtonHandler);
profileAddButton.addEventListener('click', function(){
  openPopup(popupAdd);
});
popupProfileCloseButton.addEventListener('click', function(){
    closePopup(popupProfile);  
});
popupProfileSubmitButton.addEventListener('click', popupProfileSubmitButtonHandler);

popupAddCloseButton.addEventListener('click', function(){
    clearInputs();
    closePopup(popupAdd);
});
popupAddSubmitButton.addEventListener('click', popupAddSubmitButtonHandler);
popupCardCloseButton.addEventListener('click', function(){
    closePopup(popupCard);
  });
  overlayHandler();
  setProfile();
