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

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search mentors or books..."
          />

          <button>Search</button>
        </div>
      </section>

      {/* Niche Cards Section */}
      <section className="niche-section">
        <h2>Explore Categories</h2>

        <div className="niche-cards">
          {/* Cards will go here in Story 4 */}
        </div>
      </section>

    </div>
  );
}

export default Home;