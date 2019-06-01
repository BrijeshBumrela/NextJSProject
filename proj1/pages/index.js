const fetch = require('node-fetch');

const Index = (props) => (
    <div>
        Hi There {props.title}
    </div>
)

Index.getInitialProps = async ({ req }) => {
    let jsonData
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => {
            jsonData = json
            return jsonData;
        })

};

export default Index;