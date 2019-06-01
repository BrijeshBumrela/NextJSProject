import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
    <Layout>
        <h3>{router.query.title}</h3>
        <p>
            In publishing and graphic design, lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document without relying on meaningful content. Replacing the actual content with placeholder text allows designers to design the form of the content before the content itself has been produced.
        </p>
    </Layout>
)

export default withRouter(Post);