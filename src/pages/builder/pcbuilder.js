import CategoryCard from "../../components/Ui/CategoryCard";
import RootLayout from "../../components/shared/Layouts/RootLayout";

/* eslint-disable @next/next/no-img-element */
const PcBuilderPage = () => {
    const productCategories = [
        {
            id: "1",
            name: "CPU",
            categoryIcon: "https://i.ibb.co/rGJNtfs/cpu-svg.png",
            category: 'cpu'
        },
        {
            id: "2",
            name: "Motherboard",
            categoryIcon: "https://i.ibb.co/gj6jjKg/motherboard-svg.png",
            category: 'motherboard'
        },
        {
            id: "3",
            name: "RAM",
            categoryIcon: "https://i.ibb.co/sFJS99M/ram-svg.png",
            category: 'ram'
        },
        {
            id: "4",
            name: "Power Supply",
            categoryIcon: "https://i.ibb.co/6437v8V/psupply-svg.png",
            category: 'powerSupply'
        },
        {
            id: "5",
            name: "Monitor",
            categoryIcon: "https://i.ibb.co/xF8XVnb/monitor-svg.png",
            category: 'monitor'
        },
        {
            id: "6",
            name: "Storage Device",
            categoryIcon: "https://i.ibb.co/Tvbh6yb/hdd-svg.png",
            category: "storage",
        },
    ]
    return (
        <div>
            <h1 className='text-center text-4xl font-serif font-semibold text-info my-8'>Build Your Own Computer</h1>
            <div className='w-9/12 mx-auto'>
                {
                    productCategories.map(productcategory => <CategoryCard key={productcategory.id} productcategory={productcategory} />)
                }
            </div>

        </div>
    );
};

export default PcBuilderPage;


PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
