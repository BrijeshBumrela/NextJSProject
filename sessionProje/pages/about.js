import Link from 'next/link';
import Layout from '../components/layout';

const About = () => (
    <Layout>
        <div>
            <Link href="/">
                <a title="home page">Home Page</a>
            </Link>
        </div>
    </Layout>
)

export default About;