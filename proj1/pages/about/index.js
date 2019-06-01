import { Component } from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

import Layout from '../../components/Layout.js';
import Error from '../_error/index';

// import moduleCSS from './about.css';

export default class About extends Component {

    static async getInitialProps() {
        const res = await fetch('https://api.github.com/users/BrijeshBumrela');
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
                        // className={moduleCSS.imageSize}
                        src={user.avatar_url}
                        alt="BrijeshBumrela"
                    />
                </Layout>    
            </React.Fragment>
        )
    }
}
