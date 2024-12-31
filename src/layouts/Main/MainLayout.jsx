import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
    return <section className="max-w-[1380px] mx-auto">
        <Navbar />
       <section className="">
       <Outlet />
       </section>
        <Footer />
    </section>
}

export default MainLayout;
