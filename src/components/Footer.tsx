import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
    return(
        <footer className="pt-20 mt-20 bg-slate-700">
         <Container className="flex flex-col md:flex-row gap-10 justify-between">
            <div>
                <div className="text-lg text-white">Next Tour</div>
                <p className="text-slate-400 max-w-sm">Welcome to JourneyMakers, where we turn travel dreams into unforgettable experiences.</p>
            </div>

            <div>
                <div className="text-lg text-white">Contact</div>
                <p className="text-slate-400">Mobile No. 03469894554</p>
                <Link className="text-slate-400 underline" 
                href="emailto: journey-makers@gmail.com">
                Email: journey-makers@gmail.com </Link>
            </div>
         </Container>
         <p className="text-center text-sm text-slate-500 pt-20 pb-4">Copyright 2024 Usman Asif | All Rights Reserved!</p>
        </footer>
    )
}