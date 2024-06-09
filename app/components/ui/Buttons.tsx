interface CustomButtonInterface {
  type: string;
  context: string;
  action?: ((...args: any[]) => void) | null;
}
interface CustomButtonPartInterface {
  context: string;
  action?: ((...args: any[]) => void) | null;
}
const CustomButton = (props: CustomButtonInterface) => {
  const { type, context, action } = props;
  if (type === "primary") {
    return <PrimaryButton context={context} action={action} />;
  } else if (type === "primary-rounded") {
    return <PrimaryRoundedButton context={context} action={action} />;
  } else {
    return <SecondaryButton context={context} action={action} />;
  }
};

const PrimaryButton = (props: CustomButtonPartInterface) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6 py-3  rounded shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-white max-sm:text-xs">{context}</p>
    </div>
  );
};

const PrimaryRoundedButton = (props: CustomButtonPartInterface) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6  py-3 rounded-full shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-white max-sm:text-xs">{context}</p>
    </div>
  );
};

const SecondaryButton = (props: CustomButtonPartInterface) => {
  const { context, action } = props;
  return (
    <div
      className="flex justify-center items-center px-6 py-3  border border-blue-600 rounded shadow-sm bg-transparent hover:bg-blue-100 transition-all duration-500 cursor-pointer"
      onClick={() => action && action()}
    >
      <p className="text-blue-600 max-sm:text-xs">{context}</p>
    </div>
  );
};

export default CustomButton;
