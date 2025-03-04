interface Props {
  cardType: "Live" | "Finished" | "Match preparing";
}
export const CardStatus = ({ cardType }: Props) => {
  return (
    <div
      className={`flex items-center h-[27px] rounded-[4px] py-1 sm:py-1.5 px-[23px] sm:px-[34px] text-white text-[12px] ${
        cardType === "Live"
          ? "bg-[#43AD28]"
          : cardType === "Finished"
          ? "bg-[#EB0237]"
          : "bg-[#EB6402]"
      }`}
    >
      {cardType}
    </div>
  );
};
