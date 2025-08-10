import { getPayload } from "../../../../lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";

const Page = async ({ params }) => {
    const { postId } = await params;
    console.log(postId);

    const payload = await getPayload();
    let post = await payload.find({
        collection: "posts",
        where: {
            id: postId
        }
    })

    if (!post) {
        return <div>Post not found</div>
    }

    let data = post.docs[0];
    console.log(data);

    return (
        <div className="mx-auto container p-8 pb-20 sm:p-20">
            <h1 className="text-5xl font-bold mb-5 text-center leading-normal">{data.title}</h1>
            <SerializedRichText className="payload-richtext" data={data.content} />
        </div>
    )
}

export default Page;