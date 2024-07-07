import React from "react";

export default function Header({ activeTags, setActiveTags }) {
  const handleDeleteTag = (tagToRemove) => {
    setActiveTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
  };

  const clearFilter = () => {
    setActiveTags([]);
  };

  return (
    <>
      {" "}
      <div className="w-full h-[15.6rem] bg-mobileBgImage bg-[#5CA5A5] bg-no-repeat bg-cover lg:bg-desktopBgImage">
        {/* <div className='absolute w-[calc(100%-4.8rem)] bg-white rounded-[5px] left-[50%] translate-x-[-50%] top-[12rem] shadow-custom p-[2.4rem]'></div> */}
      </div>
      <div className="px-[2.4rem] flex justify-between items-center lg:px-[16.5rem] ">
        <div
          className={`${
            activeTags.length > 0 ? "opacity-1" : "opacity-0"
          } w-full bg-white rounded-[5px] items-center justify-between mt-[-4rem] shadow-custom p-[2.4rem] flex   transition-all duration-500`}
        >
          <div className="w-full flex flex-wrap gap-[1.6rem]">
            {activeTags.map((tag, index) => (
              <div className="flex" key={index}>
                <p className="bg-[#EFF6F6] px-[0.8rem] py-[0.4rem] text-[1.6rem] font-bold text-[#5CA5A5] rounded-l-[0.4rem]">{tag}</p>
                <div className="bg-[#5CA5A5] p-[0.85rem] rounded-r-[0.4rem] hover:bg-[#2B3939] transition-all duration-[0.3s] cursor-pointer" onClick={() => handleDeleteTag(tag)}>
                  <img src="/images/icon-remove.svg" alt="remove tag" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-[1.6rem] text-[#7C8F8F] font-bold lg:hover:text-[#5CA5A5] lg:hover:cursor-pointer lg:hover:underline" onClick={() => clearFilter()}>
            Clear
          </p>
        </div>
      </div>
    </>
  );
}
