/* eslint-disable react/no-unknown-property */

const Card = ({card}) => {


    const {id,Picture,Title,Category,Category_bg,Card_bg,Text_button_bg} = card || {}
  return (
    <div> 
      <div style={{backgroundColor:Card_bg}} className="relative  flex flex-col rounded-xl  bg-clip-border ">
        <div>
          <img
            src={Picture}
            alt="img-blur-shadow"
            layout="fill"
          />
        </div>
        <div className="p-6">
          <button style={{backgroundColor:Category_bg, color:Text_button_bg}} className="px-2 py-1">{Category}</button>
          <h2 style={{color:Text_button_bg}} className="font-sans text-xl font-light leading-relaxed antialiased">
          {Title}
          </h2>
          
        </div>


      </div>
    </div>
  );
};

export default Card;
