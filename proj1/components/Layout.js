import Link from 'next/link';

const Layout = (props) => (
    <div className="root">
        <header>
            <Link className="header-link" href="/">
                <a className="header-link-a">Home</a>
            </Link>
            <Link className="header-link" href="/about">
                <a className="header-link-a">About</a>
            </Link>
            <Link className="header-link" href="/hireme">
                <a className="header-link-a">Hire Me</a>
            </Link>
        </header>
        {props.children}
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
            padding: 1em;
        };
        `}</style>
        <style global jsx>{`
            body {
                margin: 0;
                font-size: 110%;
                background: #f0f0f0;
            }
        `}</style>
    </div>
)

export default Layout;