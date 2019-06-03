import Link from 'next/link';

const Layout = ({ children }) => (
    <div>
        <nav>
            <Link href="/">
                <a>HomePage</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/login">
                <a>Login</a>
            </Link>
        </nav>
        {children}
        <style jsx>{`
            nav {
                display: flex;
                justify-content: space-around;
                align-items: center;
            }
        `}</style>
    </div>
)

export default Layout;