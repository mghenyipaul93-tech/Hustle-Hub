import { useNavigate } from "react-router-dom";

function NicheCard({ title, description, route }) {
  const navigate = useNavigate();

  return (
    <div
      className="niche-card"
      onClick={() => navigate(route)}
    >
      <h3>{title}</h3>

      <p>{description}</p>
    </div>
  );
}

export default NicheCard;