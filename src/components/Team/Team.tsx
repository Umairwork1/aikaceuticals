import { useRef } from "react";
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