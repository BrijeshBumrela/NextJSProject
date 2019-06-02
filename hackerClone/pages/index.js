import fetch from 'isomorphic-unfetch';
import Error from 'next/error';

import StoryList from '../components/storyList';
import Layout from '../components/Layout';

class Index extends React.Component {
    
    static async getInitialProps() {
        let stories = [];
        try {
            const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
            stories = await response.json();    
        } catch(err) {
            console.log(err);
        }
        return { stories }
    }
    
    render() {

        const { stories } = this.props;
        if (stories.length === 0) {
            return <Error statusCode="503" />
        }

        return (
            <Layout title="HackerNext">
                <StoryList stories={stories}/>
            </Layout>
        )
    }
}

export default Index;