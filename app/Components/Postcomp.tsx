import Link from "next/link"
import { Lilita_One, VT323} from "next/font/google"
import { IPost } from "../Utils/Interface"


interface props{
    post: IPost;
}

const lilitaFont = Lilita_One ( { weight:"400", subsets:["latin"]})
const Vt323Font = VT323 ( { weight:"400", subsets:["latin"]})
// 
const Postcomp = ({post}: props) => {
  return (
    <div className="mb-10 p-5 border border-gray-900    hover:bg-purple-600 hover:border-gray-400 hover:dark:border-purple-600 hover:text-slate-200 hover:dark:bg-gray-950 rounded-lg  hover:shadow-sm hover:shadow-purple-400">
      
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2 className={`${lilitaFont.className} text-2xl `}>{post?.title}</h2>
        <p className={`${Vt323Font.className} text-lg my-2 text-purple-900 `}>{new Date(post?.publishedAt).toDateString()}</p>
        <p className="my-3">{post?.excerpt}</p>
      </Link>

      {/* Tags */}

      <div>
        {post?.tags?.map((tag) => (
          <span key={tag?._id} className="text- border dark:border-gray-900 rounded-md p-1 lowercase dark:bg-gray-950">{tag.name}</span>
        ))}
      </div>


    </div>
  )
}

export default Postcomp

