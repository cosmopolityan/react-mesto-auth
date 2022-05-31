function ImagePopup(props) { // props
  return (
    <section className={'popup popup-photo' + (props.card.name ? ' popup_opened' : '')}>
      <div className="popup-photo__container">
        <figure className="popup-photo__box">
          <button onClick={props.onClose} type="button" className="popup__close-button" />
          <img className="popup-photo__image" alt={props.card.name} src={props.card.link} />
          <figcaption className="popup__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </section>
  );
}

export default ImagePopup;