/* eslint-disable react/prop-types */


const DonationCart = ({cart}) => {

    const {Picture, Description, Title, Price,Text_button_bg } =
    cart || {};

    return (
        
     <div>
        <div className="card max-w-screen-xl h-[350px] mx-auto bg-gray-700">
        <figure><img className="w-full"  src={Picture} alt="Shoes" />
        <div className="absolute h-[85px] w-full bg-gray-950 opacity-60 bottom-0 left-0"></div>
      <button style={{backgroundColor: Text_button_bg}} className="px-2 py-2 absolute left-6 bottom-5 text-white">Donate {Price}</button>
        </figure>
      </div>

      <div className="">
        <h2 className="text-4xl font-bold text-[#0B0B0B] py-6">{Title}</h2>
        <p>{Description}</p>
      </div>
     </div>
      

      
    );
};

export default DonationCart;