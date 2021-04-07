import { Link } from "react-router-dom";

const Card = (props) => {

    const { id, title, img_url } = props.data;

    return ( 
        <div className="blog-card">
            <Link to={'/blog/' + id} className="post-img">
                <span style={{backgroundImage: 'url(' + img_url + ')'}}></span>
            </Link>
            <h3>{title}</h3>
            <Link className="post-link" to={'/blog/' + id}>Read more</Link>
        </div>
    );
}
 
export default Card;