import Header from '@/app/Components/Header'
import { client } from '@/sanity/lib/client'
import React from 'react'
import { Lilita_One,} from "next/font/google";
import { IPost } from '../../../Utils/Interface'
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';

/* eslint-disable @typescript-eslint/no-explicit-any */

const lilitaFont = Lilita_One ( { weight:"400", subsets:["latin"]})


interface Params{
    params: {
        slug: string;
    }
}

async function getpost(slug:string) {
    const query = ` 
    *[_type == "post" && slug.current == "${slug}"][0] {
  title,
  slug,
  publishedAt,
  excerpt,
  body,
  tags[]->{
    _id,
    slug,
    name
  }
  
}`

const post = await client.fetch(query);
return post;
 
}




const page =async (params: Params) => {
        console.log(params, 'params')
    const post: IPost = await getpost(params?.params?.slug)
    console.log(post, 'post');
    
  return (
    <div>
      <Header title={post?.title}/>
      <div className='text-center'>
        <span className={`${lilitaFont.className} text-purple-500`}>{post?.publishedAt}</span>
        <div>
          {post?.tags?.map((tag) => {
             return <Link href={`/tag/${tag?.slug?.current}`} key={tag?._id}>{tag?.name}
             <span className="text- border dark:border-gray-900 rounded-md p-1 lowercase dark:bg-gray-950">#{tag.name}</span>
             
             </Link>
          })} 
        </div>
        <div className='text-justify mt-14 max-w-2xl ml-20 prose-headings:my-5 prose-headings:text-2xl prose-p:my-2'>
          <PortableText 
           value={post.body}
           components={myPortableTextComponents}
          />
        </div>
      </div>

    </div>
  )
}

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: { value: any }) => <Image src={urlFor(value).url()} alt='image' width={700} height={700} />,
    
}
}

/* eslint-enable @typescript-eslint/no-explicit-any */

