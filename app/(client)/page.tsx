import { client } from "@/sanity/lib/client"
import Header from "../Components/Header";
import { IPost } from "../Utils/Interface"
import Postcomp from "../Components/Postcomp";


async function getposts() {
  const query = `
  *[_type == "post"] {
  title,
  slug,
  publishedAt,
  excerpt,
  tags[]-> {
    _id,
    slug,
    name
  }
}  `;
  const data = await client.fetch(query);
  return data;
  
}

export const revalidate = 60;

export default async function Home() {
  const posts: IPost[] = await getposts();
  console.log(posts, 'posts')
  return(
    <div>
      <Header title="Blog"/>
      <div>
        {posts?.length > 0 && posts?.map((post) => (
          <Postcomp key={post?._id} post={post}/>
        ))}
      </div>
    </div>
  )
}
