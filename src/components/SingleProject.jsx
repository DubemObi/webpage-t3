import { GoArrowRight } from "react-icons/go";

function SingleProject({ image, title }) {
  return (
    <div className="md:flex w-full gap-10 bg-grey-2">
      <img src={image} alt="" className="md:w-1/2 object-cover" />
      <div className="pt-6 px-6 pb-8 md:pb-6 md:px-0 md:pr-8">
        <h1 className="text-3xl text-grey-1">{title}</h1>
        <p className="mt-6 mb-8 ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book.
        </p>
        <button className="flex items-center gap-3 bg-white px-8 py-4 text-xs tracking-widest uppercase">
          View More <GoArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default SingleProject;
