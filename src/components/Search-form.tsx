import { CiSearch } from "react-icons/ci";
export function SearchForm() {
    return(

        <form className="grid md:grid-cols-4 gap-4">
            <div className="flex flex-col gap-2">
                <label htmlFor="search">Search</label>
                <input 
                id="search"
                type="text" 
                placeholder="Search" 
                className="py-2 outline-none border-b border-b-slate-100" />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="destination">Destination</label>
                 <select 
                 id="destination"
                 className="py-2 outline-none border-b border-b-slate-100">
                   <option value="pakistan">Pakistan</option>
                   <option value="india">India</option>
                   <option value="dubai">Dubai</option>
                   <option value="america">America</option>
                   <option value="malaysia">Malaysia</option>
                   <option value="maldives">Maldives</option>
                 </select>
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="duration">Duration</label>
                 <select 
                 id="duration"
                 className="py-2 outline-none border-b border-b-slate-100">
                   <option value="1 Day">1 Day</option>
                   <option value="2 Days">2 Days</option>
                   <option value="2-4 Days">2-4 Day</option>
                   
                 </select>
            </div>
                   
              <button className="bg-pink-500 text-white py-4 rounded-md md:-mr-10 md:-my-10 flex justify-center items-center md:flex-col gap-2">
              <CiSearch size={20} />
                Search
                </button> 

        </form>
    )
}