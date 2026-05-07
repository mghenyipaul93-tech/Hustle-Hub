import { useNavigate } from "react-router-dom";

function NicheCard({
  title,
  description,
  buttonText,
  route,
}) {
  const navigate = useNavigate();

  return (
    <div
      className="niche-card"
      onClick={() => navigate(route)}
    >
      <h3>{title}</h3>

      <p>{description}</p>

      <button className="card-button">
        {buttonText}
      </button>
    </div>
  );
}

export default NicheCard;