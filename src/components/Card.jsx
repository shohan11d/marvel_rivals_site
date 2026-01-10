import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";

function Card({ videoSrc, text }) {
  return (
    <div className="relative ">
      <video
        src={videoSrc}
        autoPlay
        muted
        loop
        className="rounded-lg  h-[600px] object-cover border w-full"
      />
      <div className="absolute top-10 left-10  p-4 rounded-lg  max-w-xs">
        <h3 className="text_6xl font-bold text-gray-200 font-zentry">
          Radiant
        </h3>
        <p className="text-gray-400 ">{text}</p>
      </div>
      <Button
        id="watch-trailer"
        title="Watch Trailer"
        leftIcon={<TiLocationArrow />}
        containerClass="bg-black text-gray-50 flex-center gap-1 self-start absolute bottom-10 left-10"
      />
    </div>
  );
}

export default Card;
