import user1 from "../assets/user1.webp";
import user2 from "../assets/user2.webp";

const Testimonials = () => {
  return (
    <>
      <div className="text-center mb-8">
        <h5 className="text-lg font-semibold  text-pink-600">Reviews</h5>
        <h1 className="text-3xl font-bold text-gray-800">What your customers say</h1>
        <p className="text-gray-500 mt-2">Find out how our users are spreading the word</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center mb-4">
          <div className="w-20 h-20 mb-4">
            <img src={user1} alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
          <p className="text-yellow-500 mb-2">4/5</p>
          <div className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis, ipsum aperiam,
            quasi, pariatur vitae laudantium adipisci esse consequuntur facere illum necessitatibus quis.
            Exercitationem ipsam, tempora repellendus voluptatibus porro voluptate?
          </div>
        </div>
        <div className="w-full sm:w-80 md:w-96 bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center mb-4">
          <div className="w-20 h-20 mb-4">
            <img src={user2} alt="User" className="w-full h-full rounded-full object-cover" />
          </div>
          <p className="text-yellow-500 mb-2">4/5</p>
          <div className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facilis, ipsum aperiam,
            quasi, pariatur vitae laudantium adipisci esse consequuntur facere illum necessitatibus quis.
            Exercitationem ipsam, tempora repellendus voluptatibus porro voluptate?
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
