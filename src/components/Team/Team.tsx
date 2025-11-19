// import React, { useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import classes from "./team.module.css";

// type TeamMember = {
//   image: string;
// };

// type TeamProps = {
//   members: TeamMember[];
// };

// export default function Team({ members }: TeamProps) {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scroll = (direction: "left" | "right") => {
//     if (!scrollRef.current) return;

//     // Get the first child width (team card width including gap)
//     const container = scrollRef.current;
//     const firstCard = container.firstElementChild as HTMLElement;

//     if (!firstCard) return;

//     const style = window.getComputedStyle(firstCard);
//     const cardWidth = firstCard.offsetWidth;
//     const gap = parseInt(style.marginRight || "0");

//     // Scroll by 4 cards at a time
//     const scrollAmount = (cardWidth + gap) * 4;

//     container.scrollBy({
//       left: direction === "left" ? -scrollAmount : scrollAmount,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div className={classes["team-container"]}>
//       <h2 className={classes["team-title"]}>Our Team</h2>

//       <div className={classes["team-main"]}>
//         {/* Left Navigation Button */}
//         <button
//           onClick={() => scroll("left")}
//           className={`${classes["nav-button"]} ${classes["nav-button-left"]}`}
//           aria-label="Scroll left"
//         >
//           <ChevronLeft size={20} />
//         </button>

//         {/* Horizontal Images Row */}
//         <div ref={scrollRef} className={classes["team-scroll-container"]}>
//           {members.map((member, idx) => (
//             <div key={idx} className={classes["team-member"]}>
//               <img
//                 src={member.image}
//                 alt={`Team member ${idx + 1}`}
//                 className={classes["team-image"]}
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right Navigation Button */}
//         <button
//           onClick={() => scroll("right")}
//           className={`${classes["nav-button"]} ${classes["nav-button-right"]}`}
//           aria-label="Scroll right"
//         >
//           <ChevronRight size={20} />
//         </button>
//       </div>
//     </div>
//   );
// }







import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import classes from "./team.module.css";

type TeamMember = {
  image: string;
};

type TeamProps = {
  members: TeamMember[];
};

export default function Team({ members }: TeamProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const containerWidth = container.offsetWidth;
    
    // Scroll by exactly one viewport width (4 cards)
    const scrollAmount = containerWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes["team-container"]}>
      <h2 className={classes["team-title"]}>Our Team</h2>

      <div className={classes["team-main"]}>
        {/* Left Navigation Button */}
        <button
          onClick={() => scroll("left")}
          className={`${classes["nav-button"]} ${classes["nav-button-left"]}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Horizontal Images Row */}
        <div className={classes["team-scroll-wrapper"]}>
          <div ref={scrollRef} className={classes["team-scroll-container"]}>
            {members.map((member, idx) => (
              <div key={idx} className={classes["team-member"]}>
                <img
                  src={member.image}
                  alt={`Team member ${idx + 1}`}
                  className={classes["team-image"]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => scroll("right")}
          className={`${classes["nav-button"]} ${classes["nav-button-right"]}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}