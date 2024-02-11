import { useRouter } from "next/router";
import Link from 'next/link';

// SSGの場合
export const getStaticProps = async ({ params }) => {
    console.log(params);
    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: {
        product: data,
        },
    };
};

export const getStaticPaths = async () => {
  const req = await fetch(`http://localhost:3000/productsPaths.json`);
  const data = await req.json();

  const paths = data.map((path: string) => {
    return {
      params: {
        id: path,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

const Product = ({ product }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className='flex justify-center h-screen items-center'>
      <main className='justify space-y-6'>
        <h1>{id}のページです</h1>
        <img src={product.image} className=''/>
        <p>{product.name}</p>
        <br />
        <Link href="/products">商品一覧へ</Link>
      </main>
    </div>
  );
};

export default Product;
