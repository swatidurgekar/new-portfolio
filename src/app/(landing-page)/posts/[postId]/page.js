export const revalidate = 60; // cache for 60 seconds

import { getPayload } from "../../../../lib/payload";
import RichTextClient from "../../components/RichTextClient";

const Page = async ({ params }) => {
    const { postId } = await params;

    const payload = await getPayload();

    let post = await payload.find({
        collection: "posts",
        where: {
            id: postId
        }
    })

    if (!post?.docs?.length) {
        return <div>Post not found</div>
    }

    let data = post.docs[0];

    return (
        <div className="mx-auto container p-8 pb-20 sm:p-20">
            <h1 className="text-5xl font-bold mb-5 text-center leading-normal">{data.title}</h1>
            <RichTextClient className="payload-richtext" content={data.content} />
        </div>
    )
}

export default Page;