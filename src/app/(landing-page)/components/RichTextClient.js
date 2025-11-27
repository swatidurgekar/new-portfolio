"use client"

import dynamic from "next/dynamic";

const RichText = dynamic(
    () => import("@payloadcms/richtext-lexical/react").then(m => m.RichText),
    {
        ssr: false,
        loading: () => <p>Loading content...</p>
    }
);

export default function RichTextClient({ content }) {
    return <RichText data={content} className="payload-richtext" />;
}