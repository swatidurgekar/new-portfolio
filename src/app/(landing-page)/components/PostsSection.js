import Link from "next/link";
import { getPayload } from "../../../lib/payload";

function formatDate(timeStamp) {
    const date = new Date(timeStamp);
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

const PostsSection = async () => {
    const payload = await getPayload();
    const posts = await payload.find({
        collection: "posts",
        limit: 2,
        sort: '-createdAt',
    })
    console.log(posts);

    return (
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="flex gap-12 sm:gap-24">
                <div className="w-72">
                    <h2 className="text-4xl text-bold text-light">Latest from <br /> the blog</h2>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-12">
                    {posts.docs.map((post) => (
                        <Link href={`/posts/${post.id}`} key={post.id} className="group block">
                            <article className="space-y-4">
                                <h3 className="text-2xl font-semibold text-light group-hover:text-purple-400
                                transition-colors mb-3">{post.title}</h3>
                            </article>
                            <div>
                                <time className="text-slate-300">{formatDate(post.createdAt)}</time>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostsSection;