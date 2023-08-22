import RootLayout from "../components/shared/Layouts/RootLayout";


const HomePage = () => {
  return (
    <div className="min-h-screen">
      <h1>This is Home page</h1>
    </div>
  );
};

export default HomePage;



HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>
}