import fetch from 'isomorphic-unfetch';
import Error from 'next/error';
import Layout from '../components/Layout';

class Story extends React.Component {
    static async getInitialProps({ req, res, query }) {

        let story = null;
        let statusCode = null;

        try {
            const storyId = query.id;
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
            story = await response.json();
        } catch(err) {
            console.log(err)
        }
        return { story, statusCode }
    }

    render() {
        const { story } = this.props;

        if (!story) {
            return <Error statusCode={503}/>
        }


        return  (
            <Layout title={story.title} backButton={true}>
                <main>
                    <h1 className="story-title">
                        <a href={story.url}>{story.title}</a>
                    </h1>
                    <div className="story-details">
                        <strong>{story.points} Points</strong>    
                        <strong>{story.comment_count} Comments</strong>    
                        <strong>{story.time_ago}</strong>    
                    </div>
                </main>



                <style jsx>{`
                    main {
                        padding: 1em;
                    }
                    .story-title {
                        font-size: 1.2rem;
                        margin: 0;
                        font-weight: 300;
                        padding-bottom: 0.5em;
                    }
                    .story-title a {
                        color: #333;
                        text-decoration: none;
                    }
                    .story-title a:hover {
                        text-decoration: underline;
                    }
                    .story-details {
                        font-size: .8rem;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
                        margin-bottom: 1em;
                    }
                    .story-details strong {
                        margin-right: 1em;
                    }
                    .story-details a {
                        color: #f60;
                    }
                `}
                </style>

            </Layout>
        )
    }
}

export default Story;