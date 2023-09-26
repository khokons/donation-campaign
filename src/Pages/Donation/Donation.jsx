import { useEffect, useState } from "react";
import DonationCart from "../Cart/DonationCart/DonationCart";
import Donationpage from "../DonationPage/Donationpage";

const Donation = () => {
    const [donations, setDonations] = useState([]);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const donationItems = JSON.parse(localStorage.getItem('favorites'));
        if(donationItems){
            setDonations(donationItems);
        }
        else{
            setNotFound("No Data Found");
        }
    },[])


    return (
        <div>
          {
            notFound? <p className="flex justify-center items-center h-[300px] text-4xl text-black">{notFound}</p> 
            : 
            <div>
                <div className="grid md:grid-cols-2 gap-6">
                    {
donations.map(cart => <Donationpage key={cart.id} cart={cart}></Donationpage>)
                    }
                </div>
            </div>
          }
        </div>
    );
};

export default Donation;

