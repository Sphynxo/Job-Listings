import React from "react";

export default function JobList({ jobs, activeTags, handleTag }) {
  const filteredJobs = jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    return activeTags.every((tag) => jobTags.includes(tag));
  });

  return (
    <div className={`px-[2.4rem] flex flex-col gap-[4rem]  duration-[0.5s] mb-[15rem] transition-all ${activeTags.length > 0 ? "mt-[8rem]" : "mt-[5.6rem]"} lg:px-[15.6rem] lg:gap-[2.4rem]`}>
      {filteredJobs.map((job) => (
        <div className={`px-[2.4rem] bg-white pb-[2.4rem] rounded-[5px] ${job.new ? "shadow-inner-left" : ""} lg:flex lg:justify-between lg:items-center lg:py-[3.2rem] lg:px-[4rem]`} key={job.id}>
          <div className="lg:flex lg:items-center lg:gap-[2.4rem]">
            <img src={job.logo} alt="logo" className="w-[4.4rem] mt-[-2.2rem] lg:w-[8.8rem] lg:mt-0" />
            <div>
              <div className="flex items-center gap-[3.2rem] mt-[0.8rem]">
                <span className="text-[1.3rem] font-bold text-[#5CA5A5] lg:text-[1.8rem]">{job.company}</span>
                <div className="flex items-center gap-[0.8rem]">
                  {job.new ? <span className="text-[1.4rem] font-bold px-[0.8rem] pt-[0.4rem] pb-[0.2rem] bg-[#5CA5A5] rounded-[12px] text-white">NEW!</span> : null}
                  {job.featured ? <span className="text-[1.4rem] font-bold px-[0.8rem] pt-[0.4rem] pb-[0.2rem] bg-[#2B3939] rounded-[12px] text-white">FEATURED</span> : null}
                </div>
              </div>
              <h1 className="text-[1.5rem] font-bold text-[#2B3939] mt-[0.8rem] lg:text-[2.2rem] lg:hover:text-[#5CA5A5] lg:transition-all lg:duration-[0.3s] lg:hover:cursor-pointer">{job.position}</h1>
              <div className="flex items-center gap-[1rem] mt-[0.8rem]">
                <span className="text-[1.6rem] font-[500] text-[#7C8F8F] lg:text-[1.8rem]">{job.postedAt}</span>
                <div className="w-[0.4rem] h-[0.4rem] bg-[#B7C4C4] rounded-full"></div>
                <span className="text-[1.6rem] font-[500] text-[#7C8F8F] lg:text-[1.8rem]">{job.contract}</span>
                <div className="w-[0.4rem] h-[0.4rem] bg-[#B7C4C4] rounded-full"></div>
                <span className="text-[1.6rem] font-[500] text-[#7C8F8F] lg:text-[1.8rem]">{job.location}</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[0.1rem] bg-[#B7C4C4] mt-[1.6rem] lg:hidden"></div>

          <div className="flex gap-[1.6rem] mt-[1.6rem] flex-wrap">
            <p
              className="text-[1.6rem] font-bold px-[0.8rem] py-[0.4rem] bg-[#EFF6F6] text-[#5CA5A5] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white cursor-pointer transition-colors duration-[0.3s]"
              onClick={() => handleTag(job.role)}
            >
              {job.role}
            </p>
            <p
              className="text-[1.6rem] font-bold px-[0.8rem] py-[0.4rem] bg-[#EFF6F6] text-[#5CA5A5] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white cursor-pointer transition-colors duration-[0.3s]"
              onClick={() => handleTag(job.level)}
            >
              {job.level}
            </p>
            {job.languages.map((language, index) => (
              <p
                className="text-[1.6rem] font-bold px-[0.8rem] py-[0.4rem] bg-[#EFF6F6] text-[#5CA5A5] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white cursor-pointer transition-colors duration-[0.3s]"
                key={index}
                onClick={() => handleTag(language)}
              >
                {language}
              </p>
            ))}
            {job.tools.length > 0
              ? job.tools.map((tool, index) => (
                  <p
                    className="text-[1.6rem] font-bold px-[0.8rem] py-[0.4rem] bg-[#EFF6F6] text-[#5CA5A5] rounded-[4px] hover:bg-[#5CA5A5] hover:text-white cursor-pointer transition-colors duration-[0.3s]"
                    key={index}
                    onClick={() => handleTag(tool)}
                  >
                    {tool}
                  </p>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
}
