import Image from "next/image"
import { Container } from "./Container"
import { testmonials } from "@/data"
import { Rating } from "./Rating"


export function Testmonial() {
    return(
        <Container className="py-20">
         <h2 className="text-4xl font-heading font-semibold text-center">What our customers are say</h2>

         <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-6 mt-20">
            {testmonials.map((testmonial) => (
                <div key={testmonial.name} className="bg-white p-6 flex rounded-md gap-4 md:w-[calc(50%-24px)]">
                 <Image src={testmonial.image} alt={testmonial.name} width={100} height={100} className="w-16 h-16 shrink-0 object-cover rounded-full"/>
                 <div>
                    <div className="flex justify-between">
                        <div>
                            <p>{testmonial.name}</p>
                            <p className="text-slate-400">{testmonial.country}</p>
                        </div>
                        <Rating rate={testmonial.rating}/>
                    </div>
                    <p>{testmonial.description}</p>
                 </div>
                </div>
            ))}
         </div>
        </Container>
    )
}