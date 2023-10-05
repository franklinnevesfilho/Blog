import {useParams} from "react-router-dom";

function Article() {
    const { id } = useParams();

    // TODO: Fetch article from API
    // TODO: Render article title and content
    return (
        <div>{id}</div>
    );
}

export default Article;