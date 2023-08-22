import CategoryCard from "../../components/Ui/CategoryCard";
import RootLayout from "../../components/shared/Layouts/RootLayout";

/* eslint-disable @next/next/no-img-element */
const PcBuilderPage = () => {
    const categories = [
        {
            id: "1",
            name: "CPU",
            categoryIcon: "https://i.ibb.co/rGJNtfs/cpu-svg.png"
        },
        {
            id: "2",
            name: "Motherboard",
            categoryIcon: "https://i.ibb.co/gj6jjKg/motherboard-svg.png"
        },
        {
            id: "3",
            name: "RAM",
            categoryIcon: "https://i.ibb.co/sFJS99M/ram-svg.png"
        },
        {
            id: "4",
            name: "Power Supply",
            categoryIcon: "https://i.ibb.co/6437v8V/psupply-svg.png"
        },
        {
            id: "5",
            name: "Monitor",
            categoryIcon: "https://i.ibb.co/xF8XVnb/monitor-svg.png"
        },
        {
            id: "6",
            name: "Storage Device",
            categoryIcon: "https://i.ibb.co/Tvbh6yb/hdd-svg.png"
        },
    ]
    return (
        <div>
            <h1 className='text-center text-4xl font-serif font-semibold text-info my-8'>Build Your Own Computer</h1>
            <div className='w-9/12 mx-auto'>
                {
                    categories.map(category => <CategoryCard key={category.id} category={category} />)
                }
            </div>

        </div>
    );
};

export default PcBuilderPage;


PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>
}
