import React from 'react'

function Footer() {
    return <footer>
        <section className='flex'>
            <section className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <h2> Contect us</h2>
                <div>
                    <p>ABC Street, uni 21, Bangladesh</p>
                    <p>+8801946461628</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                </div>
            </section>
            <section className="footer footer-center bg-base-300 text-base-content rounded p-10">
                <h2>Follow us</h2>
                <p>Join us on social media</p>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <h1>Facebook</h1>
                    </a>
                    <a>
                        <h1>Insta</h1>
                    </a>
                    <a>
                        <h1>X</h1>
                    </a>
                </div>
            </section>
        </section>
        <section className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>
        </section>
    </footer>
}

export default Footer