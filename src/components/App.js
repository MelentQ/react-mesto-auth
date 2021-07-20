import React from 'react';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import {CurrentUserContext} from '../contexts/CurrentUserContext';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import InfoTooltip from './InfoTooltip';
import ProtectedRoute from "./ProtectedRoute";
import {register, login, checkToken} from "../utils/auth"

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isInfoPopupOpen, setIsInfoPopupOpen] = React.useState(false);
  const [isInfoTooltipError, setIsInfoTooltipError] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState('');

  let history = useHistory();

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getCards()])
      .then(([userData, cards]) => {
        setCurrentUser(userData);

        setCards(cards);
      })
      .catch(err => console.log(`Ошибка при загрузке данных с сервера: ${err.status}`))
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, !isLiked)
      .then(newCard => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(`Ошибка при лайке карточки: ${err.status}`))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter(c => c._id !== card._id))
      })
      .catch(err => console.log(`Ошибка при удалении карточки: ${err.status}`))
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsInfoPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleUpdateUser(user) {
    api.setProfileInfo(user.name, user.about)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка при обновлении данных пользователя: ${err.status}`))
  }

  function handleUpdateAvatar(user) {
    api.setUserAvatar(user.avatar)
      .then(userData => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка при обновлении аватара: ${err.status}`))
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card.name, card.link)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch(err => console.log(`Ошибка при добавлении карточки: ${err.status}`))
  }

  // Обработчик для регистрации
  function handleRegister(email, password) {
    register(email, password)
      .then(res => {
        // Информируем об успешном создании в infoPopup
        setIsInfoTooltipError(false);
        // Перенаправляем на страницу входа
        history.push("/sign-in");
      })
      .catch(err => {
        // Здесь задаем ошибку в infoPopup
        setIsInfoTooltipError(true);
        console.log(err);
      })
      .finally(() => {
        // Здесь открываем infoPopup
        setIsInfoPopupOpen(true);
      })
  }

  // Обработчик для авторизации
  function handleLogin(email, password) {
    login(email, password)
      .then(res => {
        // Если ответ успешный, то забираем токен
        localStorage.setItem('jwt', res.token);
        // Устанавливаем значение loggedIn на True
        setLoggedIn(true);
        // Сохраняем Email пользователя
        setUserEmail(email);
        // Перенаправляем в Main
        history.push('/');
      })
      .catch(err => {
        // Открываем infoPopup и уведомляем, что что-то пошло не так
        setIsInfoTooltipError(true);
        setIsInfoPopupOpen(true);
        console.log(err);
      })
  }

  // Обработчик для выхода из аккаунта
  function handleLogout() {
    // Удаляем токен
    localStorage.removeItem('jwt');
    // Устанавливаем значение loggedIn на False
    setLoggedIn(false);
    // Сбрасываем Email пользователя
    setUserEmail('');
    // Перенаправляем на страницу входа
    history.push("/sign-in");
  }

  // Поиск токена в локальном хранилище
  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    // Если токен есть, то проверяем его на сервере
    if (jwt) {
      checkToken(localStorage.getItem('jwt'))
        .then(res => {
          // Устанавливаем значение loggedIn на True
          setLoggedIn(true);
          // Сохраняем Email пользователя
          setUserEmail(res.data.email);
          // Перенаправляем в Main
          history.push('/');
        })
        .catch((err) => {
          // В случае ошибки перенаправляем на страницу входа
          // На всякий случай сбрасываем данные пользователя
          history.push('/sign-in');
          setLoggedIn(false);
          setUserEmail('');

          console.log(err)
        })
    }
  }, [])

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          loggedIn={loggedIn}
          userEmail={userEmail}
          onSignOut={handleLogout}
        />

        <Switch>
          <ProtectedRoute
            component={Main}
            exact path="/"
            loggedIn={loggedIn}

            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            cards={cards}
            handleCardDelete={handleCardDelete}
            handleCardLike={handleCardLike}
          />

          <Route path="/sign-in">
            <Login
              onLogin={handleLogin}
            />
          </Route>

          <Route path="/sign-up">
            <Register
              onRegister={handleRegister}
            />
          </Route>

          <Route exact path="*">
            <Redirect to="/sign-in" />
          </Route>
        </Switch>

        <Footer />

        <PopupWithForm
          name={'delete'}
          submitBtnText={'Да'}
          title={'Вы уверены?'}
        />

        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
          isOpen={isEditProfilePopupOpen}
        />

        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
        />

        <AddPlacePopup
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <InfoTooltip
          isOpen={isInfoPopupOpen}
          isError={isInfoTooltipError}
          onClose={closeAllPopups}
        />

      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
