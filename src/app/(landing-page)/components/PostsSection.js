import { Link } from "lucide-react";
import { getPayload } from "../../../lib/payload";

const PostsSection = async () => {
    const payload = await getPayload();
    const posts = await payload.find({
        collection: "posts",
        limit: 2
    })
    console.log(posts);

    return (
        <div>
            <h2>Latest from <br /> the blog</h2>
            <div>
                {posts.docs.map((post) => (
                    <Link href={`/posts/${post.slug}`} key={post.id}>
                        <article>
                            <h3>{post.title}</h3>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default PostsSection;