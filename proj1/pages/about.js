import Layout from '../components/Layout.js';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import { Component } from 'react';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/BrijeshBumrela');
        const data = await res.json();
        return { user: data }
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title>About Me</title>
                    <meta name="About Page" description="Page showcasing about myself"></meta>
                </Head>
                <Layout >
                    <h2>This is the about page</h2>
                    <h3>My Github Id is {this.props.user.login}</h3> 
                </Layout>    
            </React.Fragment>
        )
    }
}
