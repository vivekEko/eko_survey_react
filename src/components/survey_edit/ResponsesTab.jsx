import React, { useEffect, useState } from "react";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { activeTabAtom } from "../../recoil/activeTabAtom";
import { useRecoilState } from "recoil";

const ResponsesTab = () => {
  // Global variables
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);

  const [responsesCollectionStatus, setResponseCollectionStatus] =
    useState("true");
  const [pageData, setPageData] = useState({});

  const pageData2 = {
    questions: [
      "Email",
      "On a scale of 0 to 10, how likely are you to recommend our company/product/service to a friend or colleague?",
      "In your opinion, what improvements could the company make that would warrant a higher rating from you?",
      "How would you rate our quality of service?",
    ],

    answers: [
      {
        id: 1,
        all_answers: [
          "vivek.k@ekoinfomatics.com",
          "6",
          "Lorem Ipsum dolor sit amet",
          "3.2",
        ],
      },
      {
        id: 2,
        all_answers: [
          "aayan.b@ekoinfomatics.com",
          "4",
          "Lorem Ipsum dolor sit amet2",
          "5",
        ],
      },
    ],
  };

  useEffect(() => {
    setPageData(pageData2);
  }, []);

  return (
    <div>
      <div className="w-[20%]  ">
        <button
          onClick={() => setActiveTab("Share")}
          className="px-10 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg active:scale-95 transition-all fixed bottom-5 left-5 text-xl flex items-center justify-center gap-1 "
        >
          <span className="scale-x-[-1] -translate-y-[0.20rem] block">
            <ArrowForwardIosRoundedIcon />
          </span>

          <span>Previous</span>
        </button>

        {/* <button className="px-10 py-3 bg-gray-400  text-white rounded-lg cursor-not-allowed transition-all fixed bottom-5 left-5 text-xl flex items-center justify-center gap-1 ">
          <span className="scale-x-[-1] -translate-y-[0.20rem] block">
            <ArrowForwardIosRoundedIcon />
          </span>

          <span>Previous</span>
        </button> */}
      </div>
      <div className="w-[60%] mx-auto  py-4 ">
        {/* responses stats */}
        <div className="bg-white rounded-lg flex justify-between items-end p-5 ">
          <h1 className="text-3xl font-medium text-gray-800 ">
            <span>{pageData?.answers?.length}</span>
            <span className="text-sm text-gray-500 pl-2 font-normal">
              responses collected
            </span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">
              {responsesCollectionStatus
                ? " Accepting responses"
                : " Not accepting responses"}
            </span>
            <button
              onClick={() =>
                setResponseCollectionStatus(!responsesCollectionStatus)
              }
              className={`${
                responsesCollectionStatus ? " bg-green-100" : "bg-red-100"
              } bg-gray-300 w-[40px] aspect-video relative rounded-full`}
            >
              <div
                className={` ${
                  responsesCollectionStatus
                    ? "left-[20px] bg-green-500 ease-in duration-300"
                    : "left-0 bg-red-500 ease-in duration-300"
                }  rounded-full aspect-square w-[25px] absolute  top-[-2%] transition-all `}
              ></div>
            </button>
          </div>
        </div>

        {/* all responses */}
        <div className="overflow-x-scroll  border rounded-lg mt-10 bg-white">
          {/* headings / question list */}
          <div className={` flex bg-red-500 `}>
            {pageData?.questions?.map((questions_data, questions_index) => {
              return (
                <div
                  key={questions_index}
                  title={questions_data}
                  className="flex gap-2 text-sm  w-full min-w-[300px] bg-gray-50 border-b p-2 py-5 font-semibold "
                >
                  <h1>{questions_index + 1}.</h1>
                  <h1 className="truncate">{questions_data}</h1>
                </div>
              );
            })}
          </div>

          <div className="min-h-[60vh] relative">
            {/* all answers  */}
            <div>
              {pageData?.answers?.map((answers_data, answers_index) => {
                return (
                  <div className="flex" key={answers_index}>
                    {answers_data?.all_answers?.map(
                      (all_answers_data, all_answers_index) => {
                        return (
                          <div
                            key={all_answers_index}
                            className="flex gap-2 text-sm text-gray-800 w-full min-w-[300px] border-b p-2 pl-5"
                          >
                            <h1 className="truncate">
                              {all_answers_data ? (
                                all_answers_data
                              ) : (
                                <p className="text-gray-400 ">No response</p>
                              )}
                            </h1>
                          </div>
                        );
                      }
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* rows and colums count */}
        <div className="bg-gray-100 rounded-b-lg  flex justify-end items-center gap-5 py-5 px-5">
          <div className="flex gap-1 items-center ">
            <h1 className="text-gray-500">Total Questions : </h1>
            <h2 className=" text-black font-semibold">
              {pageData?.questions?.length}
            </h2>
          </div>
        </div>
      </div>

      <div className="w-[20%]  ">
        <button
          onClick={() => setActiveTab("Analytics")}
          className="px-10 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg active:scale-95 transition-all fixed bottom-5 right-5 text-xl flex items-center justify-center gap-1 "
        >
          <span>Next</span>

          <span className="-translate-y-[0.18rem] block">
            <ArrowForwardIosRoundedIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResponsesTab;
