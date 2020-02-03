import Link from 'next/link';
import Layout from '../src/components/Layout';

import fetch from 'isomorphic-unfetch';

const Index = props => (
    <Layout>
        <h1>Batman TV Shows</h1>
            <ul>
                {props.shows.map(show => (
                    <li key={show.id}>
                        <Link href="/p/[id]" as={`/p/${show.id}`}>
                            <a>{show.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
    </Layout>
);

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = await res.json();

    console.log(`Show data. Count: ${data.length}`);

    return {
        shows: data.map(entry => entry.show)
    };
};

export default Index;
// const PostLink = props => (
//     <li>
//         {/* <Link href={`/post?title=${props.title}`}> */}
//         <Link href="/p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// )

// function Blogs() {
//     return (
//       <Layout>
        
//         <p>BLOGS</p>

//         <ul>
//             <PostLink id="hello-nextjs" />
//             <PostLink id="learn-nextjs" />
//             <PostLink id="deploy-nextjs" />
//             {/* <PostLink title="Hello NextJS" />
//             <PostLink title="Learn NextJS" />
//             <PostLink title="Deploy apps with Zeit" /> */}
//         </ul>
//       </Layout>
//     );
//   }

//   export default Blogs;