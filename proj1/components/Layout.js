import Link from 'next/link';
import Router from 'next/router';
import Nprogress from 'nprogress';

Router.onRouteChangeStart = url => Nprogress.start();

Router.onRouteChangeComplete = () => Nprogress.done();

Router.onRouteChangeError = () => Nprogress.done();

const Layout = (props) => (
    <div className="root">
        <header>
            <Link href="/">
                <a className="header-link-a">Home</a>
            </Link>
            <Link href="/about">
                <a className="header-link-a">About</a>
            </Link>
            <Link href="/hireme">
                <a className="header-link-a">Hire Me</a>
            </Link>
        </header>
        <div className="main-content">
            {props.children}
        </div>
        <footer>&copy; {new Date().getFullYear()}</footer>
    
        <style jsx>{`
        .root {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
        };
        header {
            width: 100%;
            display: flex;
            justify-content: space-around;
            padding: 1em;
            font-size: 1.2rem;
            background: indigo;
        };
        .header-link-a {
            color: darkgrey;
            text-decoration: none;
        };
        .header-link-a:hover {
            font-weight: bold;
            color: lightgrey;
        };
        footer {
            padding: 1rem;
            padding-top: 2rem;
        };
        .main-content {
            margin: 2rem;
        }
        `}</style>
    </div>
)

export default Layout;