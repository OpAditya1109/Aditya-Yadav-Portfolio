import { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg"; // Ensure correct import

const words = [
  "Secura", 
  "Reliable", 
  "Engaging", 
  "Accessible", 
  "Responsive", 
  "Dynamic", 
  "Scalable", 
  "Interactive", 
  "Optimized", 
  "Innovative", 
  "Seamless", 
  "Efficient", 
  "Future-proof", 
  "Trustworthy"
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 animate-move-left pr-4">
            {[...new Array(2)].map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word, index) => (
                  <div key={index} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">{word}</span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
