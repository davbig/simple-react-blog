import { useParams } from "react-router";

const Post = (props) => {

    const { id } = useParams();
    const { title, published_date, author, description, img_url } = props.getPost(id);

    return ( 
        <div className="single-post container">
            <img className="post-head-img" src={img_url} alt={title}></img>
            <h2>{title}</h2>
            <div className="post-meta">{ published_date } by { author }</div>
            <p>{description}</p>
        </div>
     );
}
 
export default Post;
