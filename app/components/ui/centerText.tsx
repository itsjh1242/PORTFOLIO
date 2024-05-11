interface CenterTextProps {
  context: string;
}
const CenterText = (props: CenterTextProps) => {
  const { context } = props;
  return (
    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-9xl max-sm:text-6xl text-center text-gray-300 font-medium opacity-50">
      {context}.
    </p>
  );
};

export default CenterText;
