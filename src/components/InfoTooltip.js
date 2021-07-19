import React from 'react';
import errorIcon from '../images/icons/error-cross.svg';
import acceptIcon from '../images/icons/accept.svg';

function InfoTooltip({isOpen, isError, onClose}) {
  return (
    <div className={`popup${isOpen ? ' popup_opened' : ''}`} id="infoPopup">
      <div className="popup__container popup__container_place_info-popup">
        <button type="button" className="popup__close-button" onClick={onClose}/>

        <img className="popup__icon" src={isError ? errorIcon : acceptIcon} alt="Иконка"/>

        <h2 className="popup__title popup__title_type_info-popup">
          {isError ?
          'Что-то пошло не так! Попробуйте ещё раз.'
          :
          'Вы успешно зарегистрировались!'}
        </h2>
      </div>
    </div>
  )
}

export default InfoTooltip;
