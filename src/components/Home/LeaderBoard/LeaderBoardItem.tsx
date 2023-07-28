import { UserType } from "../../../library/types";
import { useAuthContext } from "../../../library/firebase/firebaseAuth";

export function LeaderBoardItem({
  player,
  index,
}: {
  player: UserType;
  index: number;
}) {
  const { user } = useAuthContext();

  const MedalEmoji = ({ index }: { index: number }) => {
    const medals = ["🥇", "🥈", "🥉"];
    return (
      <span className={index < 3 ? "text-3xl" : "text-md"}>
        {index < 3 ? medals[index] : `#${index + 1}`}
      </span>
    );
  };

  const playerNameToShow = user
    ? user.uid === player.id
      ? "You"
      : player.name
    : player.name;

  return (
    <div className="w-full bg-white rounded border my-3">
      <div className="p-3">
        <div className="uppercase tracking-wide text-[#16a34a] font-semibold rounded-md">
          <MedalEmoji index={index} />
        </div>
        <p className="block mt-1 text-lg leading-tight font-medium text-black">
          {playerNameToShow}
        </p>
        <p className="mt-2 text-gray-500">Score: {player.score}</p>
      </div>
    </div>
  );
}
