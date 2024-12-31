import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return <section>
        <Navbar />
       <section className="min-h-screen">
       <Outlet />
       </section>
        <Footer />
    </section>
}

export default MainLayout;
