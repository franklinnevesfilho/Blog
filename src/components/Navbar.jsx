import css from './style/Navbar.module.css';

function Navbar() {
    return (
        <>
            <nav className={css.navbar}>
                <h1 className={css.logo}>LOGO</h1>
                <div className={css.links}>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;