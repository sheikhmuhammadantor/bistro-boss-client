import { Link } from "react-router-dom";

function Home() {
    return <div>
        <h1>Home</h1>
        <Link to="/app" className="btn">APP</Link>
        <div>
            <img src="https://github.com/ProgrammingHero1/bistro-boss-restaurant-resources/blob/main/assets/home/01.jpg" alt="" />
        </div>
    </div>
}

export default Home;
