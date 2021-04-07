import Card from './Card';

const Blog = (props) => {
    return ( 
        <main className="blog container">
            { props.posts.map((item, index) => <Card key={index} data={item} />) } 
        </main>
     );
}
 
export default Blog;