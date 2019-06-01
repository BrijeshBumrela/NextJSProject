import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

import Layout from '../components/Layout';


const PostLink = ({ title }) => (
    <li>
        <Link href={`/post?title=${title}`}>
            <a>Post One About {title}</a>
        </Link>
    </li>
)



const Blog = () => (
    <Layout>
        <h3>This is Blog</h3>
        <ul>
            <PostLink title="React" />
            <PostLink title="Vue" />
            <PostLink title="Angular" />
        </ul>
    </Layout>
)



export default Blog;