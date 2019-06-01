import Layout from '../components/Layout.js';
import Head from 'next/head';

const About = (props) => (
    <React.Fragment>
        <Head>
            <title>About Me</title>
            <meta name="About Page" description="Page showcasing about myself"></meta>
        </Head>
        <Layout >
            This is the about page 
        </Layout>    
    </React.Fragment>
)

export default About;