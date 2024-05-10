interface CustomButtonProps {
  type: string;
  context: string;
  action?: ((...args: any[]) => void) | null;
}
interface CustomButtonProp {
  context: string;
  action?: ((...args: any[]) => void) | null;
}
const CustomButton = (props: CustomButtonProps) => {
  const { type, context, action } = props;
  if (type === "primary") {
    return <PrimaryButton context={context} action={action} />;
  } else if (type === "primary-rounded") {
    return <PrimaryRoundedButton context={context} action={action} />;
  } else {
    return <SecondaryButton context={context} action={action} />;
  }
};

const PrimaryButton = (props: CustomButtonProp) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 rounded shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-white max-sm:text-xs">{context}</p>
    </div>
  );
};

const PrimaryRoundedButton = (props: CustomButtonProp) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 rounded-full shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-white max-sm:text-xs">{context}</p>
    </div>
  );
};

const SecondaryButton = (props: CustomButtonProp) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 border border-blue-600 rounded shadow-sm bg-transparent hover:bg-blue-100 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-blue-600 max-sm:text-xs">{context}</p>
    </div>
  );
};

export default CustomButton;
