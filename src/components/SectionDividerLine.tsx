interface ISectionDividerLineProps {
  className?: string;
}
const SectionDividerLine = ({ className }: ISectionDividerLineProps) => {
  return (
    <div
      className={`my-14 mx-auto bg-rich-blue-lightLine w-[70%] h-1 rounded-full max-w-[100rem] ${className}`}
    ></div>
  );
};

export default SectionDividerLine;
