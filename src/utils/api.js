class Api {
  /**
   * Класс для работы с API Mesto
   * @param {String} address базовый адрес, например https://mesto.nomoreparties.co/v1/cohort-24
   * @param {String} token токен, например 68a2e8bf-41f6-4309-86d1-09aae1dd8e56
   * @param {Function} handleResponse колбэк функция, которая обрабатывает ответ промиса
   */
  constructor(address, token, handleResponse) {
    this._address = address;
    this._token = token;
    this._handleResponse = handleResponse;
  }

  /**
   *
   * @returns Возвращает начальные карточки с сервера
   */
  getCards() {
    return fetch(`${this._address}/cards`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

  /**
   *
   * @returns Возвращает данные пользователя с сервера
   */
  getUserData() {
    return fetch(`${this._address}/users/me`, {
      method: 'GET',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }

  /**
   * Назначает новые данные пользователя
   * @param {*} name - имя пользователя
   * @param {*} about - о пользователе
   * @returns Возвращает готовый объект, содержащий все обновленные данные пользователя
   */
  setProfileInfo(name, about) {
    return fetch(`${this._address}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._handleResponse)
  }

  /**
   * Назначает новый аватар пользователя
   * @param {*} link - ссылка на изображение
   * @returns Возвращает готовый объект, содержащий все обновленные данные пользователя
   */
  setUserAvatar(link) {
    return fetch(`${this._address}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: link
      })
    })
    .then(this._handleResponse)
  }

  /**
   * Добавляет на сервер новую карточку
   * @param {*} name - имя карточки
   * @param {*} link - ссылка на карточку
   * @returns Возвращает готовый объект с данными карточки
   */
  addCard(name, link) {
    return fetch(`${this._address}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._handleResponse)
  }

  changeLikeCardStatus(cardId, isLiked) {
    const method = isLiked ? 'PUT' : 'DELETE';

    return fetch(`${this._address}/cards/likes/${cardId}`, {
      method: method,
      headers: {
        authorization: this._token
      }
    })
      .then(this._handleResponse)
  }

  /**
   * Удаляет карточку
   * @param {*} cardId - идентификатор карточки
   */
  deleteCard(cardId) {
    return fetch(`${this._address}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token
      }
    })
    .then(this._handleResponse)
  }
}

const apiAddress = 'https://mesto.nomoreparties.co/v1/cohort-24';
const apiToken = '68a2e8bf-41f6-4309-86d1-09aae1dd8e56';
const handleResponse = (res) => res.ok ? res.json() : Promise.reject(res.status);
const api = new Api(apiAddress, apiToken, handleResponse);

export default api;
