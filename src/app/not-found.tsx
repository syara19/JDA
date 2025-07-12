import Button from '@/components/elements/Button'
import Image from 'next/image'

export default function NotFound() {
    return (
        <div className="container min-h-d-screen grid place-content-center mx-auto px-4 min-h-d-screen">
            <div className="w-full max-w-[500px] rounded-md border-gray-100
          bg-white p-4 text-center md:border md:p-14">
                <Image
                className='mx-auto'
                    src={"/404.png"}
                    alt='404'
                    width={300}
                    height={300}
                />
                <h4 className="mt-2 text-center font-bold">
                    Page Not Found
                </h4>
                <Button className='mt-4 link link-hover' href='/'>Home</Button>
            </div>
        

        </div>
    )
}