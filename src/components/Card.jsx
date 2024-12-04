import "./Card.css";

// eslint-disable-next-line react/prop-types
function Card({ imageUrl, description }) {
  return (
    <div className="card border border-white border-opacity-25 hover:md:-translate-y-3 duration-300">
      <div className="block md:min-h-[18rem] min-h-[16rem] overflow-hidden">
        <div className="flex flex-col">
          <img className="w-[8rem] self-center rounded-md" src={imageUrl} alt="image" />
        </div>
        <div className="w-[25%] rounded-full my-6 max-w-4xl h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;
