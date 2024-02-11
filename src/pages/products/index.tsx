import Link from 'next/link';

const ProductsList = () => {
    return (
        <div className='flex justify-center h-screen items-center'>
            <main className=''>
                <h2 className='text-3xl font-bold'>商品一覧</h2>

                <ul className='pt-6 list-disc'>
                    <li>
                        <Link href="/products/smartphone">スマートフォン</Link>
                    </li>
                    <li>
                        <Link href="/products/pc">パソコン</Link>
                    </li>
                    <li>
                        <Link href="/products/headphone">ヘッドホン</Link>
                    </li>
                    
                </ul>
            </main>
        </div>
    );
}

export default ProductsList;