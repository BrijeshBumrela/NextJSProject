import Layout from '../components/Layout.js';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';
import Error from './_error/index';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/uers/BrijeshBumrela');
        const statusCode = res.status > 200 ? res.status : false;
        const data = await res.json();
        return { user: data, statusCode }
    }

    render() {

        const { user, statusCode } = this.props;

        if (statusCode) {
            return <Error />
        }

        return (
            <React.Fragment>
                <Head>
                    <title>About Me</title>
                    <meta name="About Page" description="Page showcasing about myself"></meta>
                </Head>
                <Layout>
                    <h2>This is the about page</h2>
                    <h3>My Github Id is {user.login}</h3> 
                    <img 
                        src={user.avatar_url}
                        alt="BrijeshBumrela"
                    />
                </Layout>    
            </React.Fragment>
        )
    }
}
