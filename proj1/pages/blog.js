import Layout from '../components/Layout';
import Link from 'next/link';

export default () => (
    <Layout>
        <h3>This is Blog</h3>
        <ul>
            <li>
                <Link href="/post?title=React">
                    <a>Post One About React</a>
                </Link>
            </li>
        </ul>
    </Layout>
)