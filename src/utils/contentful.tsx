import { createClient } from "contentful";

// MARK: React Component
const ContentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string
});

export default ContentfulClient