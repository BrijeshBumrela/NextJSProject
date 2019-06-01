import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

import Layout from '../components/Layout';


const PostLink = ({ title, id }) => (
    <li>
        <Link href={`/post?title=${id}`}>
            <a>Post One About {title}</a>
        </Link>
    </li>
)

class Blog extends Component {

    static async getInitialProps() {
        let blogArray = [];
        for (let i = 1; i < 6; i++) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${i}`);
            const statusCode = res.status;
            const result = await res.json();

            blogArray.push(result);
        }

        return { posts: blogArray };
    }


    render() {
        return (
            <Layout>
                <h3>This is Blog</h3>
                <ul>
                    {this.props.posts.map(post => <PostLink key={post.id} id={post.id} title={post.title} />)}
                </ul>
            </Layout>
        )
    }
    
}

export default Blog;