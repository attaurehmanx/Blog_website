/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IPost {
    title: string,
    slug: { current: string};
    publishedAt: string,
    excerpt: string,
    body: Array<any>,
    tags: Array<Tag>,
    _id: string,
}

export interface Tag{
    name: string,
    slug: { current: string};
    _id: string,
}
/* eslint-enable @typescript-eslint/no-explicit-any */