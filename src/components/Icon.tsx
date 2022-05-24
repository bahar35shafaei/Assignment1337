interface IIconProps {
  imageSource: string;
}

export default function Icon(props: IIconProps) {
  const { imageSource } = props;
  return (
    <div className="flex justify-center items-center h-8 w-8 bg-black p-1 rounded-full ml-2 sm:mb-2">
      <img src={imageSource} alt="" className="h-5 w-5" />
    </div>
  );
}
