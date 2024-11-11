interface Props {
  title: string;
  titleNo: string;
}

const SectionTitle2 = ({ title, titleNo }: Props) => {
   return (
    <h2 className=" font-titleFont text-2xl font-semibold flex items-center">
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[.5px] bg-gray-700 mr-6"></span>
      <span className="text-base md:text-lg text-textGreen mr-2">
        
        {titleNo}.
      </span>
      {title}
      
    </h2>
  );
}

export default SectionTitle2
