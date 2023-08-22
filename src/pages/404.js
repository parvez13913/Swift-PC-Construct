import Image from "next/image";
import notfoundImage from '@/images/not-found.png'
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const NotFoundPage = () => {
  const router = useRouter()
  setTimeout(() => {
    router.push("/")
  }, 5000)
  return (
    <div className="text-center">
      <Head>
        <title>Swift-PC-Construct-404 Not Found</title>
        <meta
          name="description"
          content="This is Swift-PC-Construct made by Parvez Rahman"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="min-h-screen w-full"
        src={notfoundImage}
        alt="notFound_image"
      />

      <Link href="/" className="btn btn-info btn-outline normal-case lg:w-72 my-4">
        Back To Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
