const profile = document.querySelector ('.profile');
const profileEditButton = profile.querySelector ('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');
const profileName = profile.querySelector ('.profile__name');
const profileDescription = profile.querySelector ('.profile__description');

const profilePopup = document.querySelector ('.profile-popup');
const profilePopupSubmitButton = profilePopup.querySelector ('.popup__submit-button');
const profilePopupCloseButton = profilePopup.querySelector ('.popup__close-button');
const profilePopupInputName = profilePopup.querySelector ('.popup__input-name');
const profilePopupInputDescription = profilePopup.querySelector ('.popup__input-description');

const addPopup = document.querySelector('.add-popup');
const addPopupSubmitButton = addPopup.querySelector('.popup__submit-button');
const addPopupCloseButton = addPopup.querySelector ('.popup__close-button');
const addPopupInputName = addPopup.querySelector ('.popup__input-name');
const addPopupInputLink = addPopup.querySelector ('.popup__input-link');

const cards = document.querySelector('.cards');
const cardTemplate = document.querySelector('#card').content;

const cardPopup = document.querySelector('.card-popup');
const cardPopupImage = cardPopup.querySelector('.card-popup__image');
const cardPopupTitle = cardPopup.querySelector('.card-popup__title');
const cardPopupCloseButton = cardPopup.querySelector('.card-popup__close-button');

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
function initialCard(item) {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
    card.querySelector('.card__image').src = item.link;
    card.querySelector('.card__title').textContent = item.name;
    card.querySelector('.card__image').alt = item.name;
    cards.prepend(card);
    card.querySelector('.card__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('card__like-button_active');
    });
    card.querySelector('.card__delete-button').addEventListener('click', function(evt) {
        evt.target.parentElement.remove();
    });
    card.querySelector('.card__image').addEventListener('click', function(evt) {
      cardPopupImage.src = card.querySelector('.card__image').src;
      cardPopupTitle.textContent = card.querySelector('.card__title').textContent;
      openPopup(cardPopup);
    });
}
function createCard() {
  const card = cardTemplate.querySelector('.card').cloneNode(true);
  card.querySelector('.card__image').src = addPopupInputLink.value;
  card.querySelector('.card__title').textContent = addPopupInputName.value;
  card.querySelector('.card__image').alt = addPopupInputName.value;
  cards.prepend(card);
  addPopupInputLink.value = ''; 
  addPopupInputName.value = '';
  card.querySelector('.card__like-button').addEventListener('click', function(evt) {
      evt.target.classList.toggle('card__like-button_active');
   });
  card.querySelector('.card__delete-button').addEventListener('click', function(evt) {
      evt.target.parentElement.remove();
   });
  card.querySelector('.card__image').addEventListener('click', function(evt) {
     cardPopupImage.src = card.querySelector('.card__image').src;
    cardPopupTitle.textContent = card.querySelector('.card__title').textContent;
    openPopup(cardPopup);
  });
}
function profilePopupSubmitButtonHandler (evt) {
    evt.preventDefault(); 
    profileName.textContent = profilePopupInputName.value;
    profileDescription.textContent = profilePopupInputDescription.value;
    closePopup(profilePopup);
}
function addPopupSubmitButtonHandler (evt) {
    evt.preventDefault();  
    createCard();   
    closePopup(addPopup);
}
initialCards.forEach((item) => {
  initialCard(item);
});
profileEditButton.addEventListener('click', function(){
    openPopup(profilePopup);
    profilePopupInputName.value = profileName.textContent;
    profilePopupInputDescription.value = profileDescription.textContent;  
});
profileAddButton.addEventListener('click', function(){
  openPopup(addPopup);
});
profilePopupCloseButton.addEventListener('click', function(){
    closePopup(profilePopup);  
});
profilePopupSubmitButton.addEventListener('click', profilePopupSubmitButtonHandler);

addPopupCloseButton.addEventListener('click', function(){
    addPopupInputLink.value = ''; 
    addPopupInputName.value = '';
    closePopup(addPopup);
});
addPopupSubmitButton.addEventListener('click', addPopupSubmitButtonHandler);
cardPopupCloseButton.addEventListener('click', function(){
    closePopup(cardPopup);
  });
