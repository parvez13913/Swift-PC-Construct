import Banner from "../components/Ui/Banner";
import FeaturedProduct from "../components/Ui/FeaturedProduct";
import RootLayout from "../components/shared/Layouts/RootLayout";


const HomePage = ({ products }) => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-5 gap-4 px-4 mb-2 mt-6">
        {
          products?.data?.map((product) => <FeaturedProduct key={product?.id} product={product} />)
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
  const res = await fetch("http://localhost:5000/api/v1/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 30,
  }
}