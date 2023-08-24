import Banner from "../components/Ui/Banner";
import RootLayout from "../components/shared/Layouts/RootLayout";


const HomePage = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}