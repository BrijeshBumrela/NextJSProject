const storyList = ({ stories }) => (
    <div className="storyList">
        {stories.map(story => (
            <div key={story.id} className="story">
                <h2 className="story-title">
                    <a href={story.url}>{story.title}</a>
                </h2>
            </div>
        ))}
    </div>
)

export default storyList;