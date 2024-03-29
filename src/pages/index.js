import Head from "next/head";
import Banner from "../components/Ui/Banner";
import FeaturedCategories from "../components/Ui/FeaturedCategories";
import FeaturedProduct from "../components/Ui/FeaturedProduct";
import RootLayout from "../components/shared/Layouts/RootLayout";


const HomePage = ({ products, categories }) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
      </Head>
      <Banner />
      <div>
        <h1 className="text-center text-3xl font-serif font-semibold mt-12">Our <span className="text-info">Products</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 px-4">
          {
            products?.data?.map((product) => <FeaturedProduct key={product?._id} product={product} />)
          }
        </div>
      </div>

      <div>
        <h1 className="text-center text-3xl font-serif font-semibold mt-12">Featured <span className="text-info">Categories</span>
        </h1>
        {
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-8 lg:ml-14'>
            {
              categories?.data?.map((category) => <FeaturedCategories key={category?._id} category={category} />)
            }
          </div>
        }
      </div>
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}


export const getStaticProps = async () => {
  const res = await fetch("https://swift-pc-construct-server.vercel.app/api/v1/products/randomProduct");
  const products = await res.json();

  const categoriesRes = await fetch(`https://swift-pc-construct-server.vercel.app/api/v1/categories`);
  const categories = await categoriesRes.json();

  return {
    props: {
      products,
      categories
    },
    revalidate: 30,
  }
}