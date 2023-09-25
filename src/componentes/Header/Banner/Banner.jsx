

const Banner = () => {
    return (
        <div>
            <h1 className="text-center text-5xl mt-16 text-[#0B0B0B] font-bold">I Grow By Helping People In Need</h1>

           <div className="flex justify-center items-center my-10 relative">
           <input type="text" placeholder="Search" className="input w-full max-w-xs" />
           <button className="btn bg-[#FF444A] absolute left-[715px] rounded-r-lg">Search</button>
           </div>
        </div>
    );
};

export default Banner;