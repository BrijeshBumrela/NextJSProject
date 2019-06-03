import Link from 'next/link';
import Layout from '../components/layout';

const Main = () => (
    <Layout>
        <div>
            <Link href="/about">
                <button>Go to About Page</button>
            </Link>
        </div>
    </Layout>
)

export default Main;