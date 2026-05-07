import NicheCard from "../components/NicheCard";

function Home() {
  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero-section">
        <h1>Discover Mentors & Learning Resources</h1>

        <p>
          Explore web development mentors and recommended books
          to accelerate your learning journey.
        </p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Search mentors or books..."
          />

          <button>Search</button>
        </div>
      </section>

      {/* Niche Section */}
      <section className="niche-section">
        <h2>Explore Categories</h2>

        <div className="niche-cards">

          <NicheCard
            title="Web Development Mentors"
            description="Discover experienced developers and mentors from GitHub."
            route="/mentors"
          />

          <NicheCard
            title="Learning Books"
            description="Browse recommended books to improve your skills."
            route="/books"
          />

        </div>
      </section>

    </div>
  );
}

export default Home;