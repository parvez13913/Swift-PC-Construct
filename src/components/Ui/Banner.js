import Image from 'next/image';
import Link from 'next/link';
import bannerImage from '../../images/banner.png';

const Banner = () => {
    return (
        <div className='text-center lg:flex items-center p-4'>
            <div>
                <Image className='lg:w-11/12' src={bannerImage} alt='' />
            </div>
            <div>
                <h1 className='text-4xl font-semibold font-serif mb-3'>
                    <span className='text-info'>Create a Computer </span>that’s what You Need.
                </h1>
                <h6 className='my-3 font-semibold font-serif text-xl text-info'>The best way to cretae your Own Computer</h6>
                <Link href="/builder/pcbuilder" className='btn btn-info btn-outline normal-case'>Get Started</Link>
            </div>
        </div>
    );
};

export default Banner;