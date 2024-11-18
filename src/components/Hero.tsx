import { Container } from "./Container";
import Image from "next/image";
import { SearchForm } from "./Search-form";

export function Hero() {
    return(
       <Container className="grid grid-cols-2 p-10">
        <div className="py-10 md:py-20 ">

            <p className="text-pink-500 font-semibold ml-1 text-lg ">Book With Us!</p>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-2 text-balance font-heading">Discover Your Next Adventure</h1>

            <p className="text-lg text-slate-600 ">Welcome to JourneyMakers, where we turn travel dreams into unforgettable experiences.</p>
            <div className="p-4 md:p-10 rounded-md bg-white mt-10 -mr-[50%] relative">
                <SearchForm />
            </div>
        </div>

        <div className="hidden lg:flex justify-center">
            <Image width={480} height={600} src='https://img.freepik.com/free-photo/vertical-shot-snowy-hill-near-mountain-blue-sky_181624-2155.jpg?t=st=1730119734~exp=1730123334~hmac=34c07fdac60feb35cd27f4fa77b40a03f5dcc5c9b25db280e5c96b2635f3c795&w=360' alt='Image' className="rounded-md w-[80%] h-full max-h-[700px] object-cover" />
        </div>
       </Container>
    )
}