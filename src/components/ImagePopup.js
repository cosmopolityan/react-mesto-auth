import React from 'react';

function ImagePopup(props) {
  const { card, isOpen, onClose } = props;

  return (
    <section className={'popup popup-photo' + (props.card.name ? ' popup_opened' : '')}
      onClick={onClose}
    >
      <div className="popup-photo__container">
        <figure className="popup-photo__box"
        >
          <button
            onClick={onClose}
            type="button"
            className="popup__close-button"
          />
          <img
            className="popup-photo__image"
            alt={card?.name}
            src={card?.link}
          />
          <figcaption className="popup__caption">{card ? card.name : ''}</figcaption>
        </figure>
      </div>
    </section >
  );
}

export default ImagePopup;