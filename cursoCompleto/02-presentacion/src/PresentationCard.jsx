import imagenAvatar from "./assets/avatar.png";
import "./PresentationCard.css";
function PresentationCard() {
  let name = "Alejandro";
  return (
    <div className="presentation-card">
      <h1>Hola, soy {name}</h1>
      <img src={imagenAvatar} alt="avatar" className="avatar" />
    </div>
  );
}
export default PresentationCard;
