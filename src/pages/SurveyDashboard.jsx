import React from "react";
import MainLayout from "../components/layouts/mainLayout";
import { Link } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SurveyDashboard = () => {
  const surveyList = [
    {
      survey_name: "Order Survey",
      created_timestamp: "Apr 10, 2023",
    },

    {
      survey_name: "Event Survey",
      created_timestamp: "Feb 02, 2023",
    },

    {
      survey_name: "Feedback Survey",
      created_timestamp: "Jan 30, 2023",
    },
  ];
  return (
    <div>
      <MainLayout>
        <div>
          {/* create survey */}

          <div className="bg-gray-100 p-5 mb-5">
            <div className="w-[60%] mx-auto flex flex-col   text-gray-600 font-medium gap-2">
              <div className="w-fit">
                <h1 className=" mb-5">Start a new survey</h1>
                <Link
                  to="/survey_edit"
                  className="text-8xl flex justify-center items-center w-[150px] aspect-square border text-gray-300 border-gray-300 bg-white rounded-md hover:text-9xl transition-all duration-200 active:scale-95"
                >
                  <span className="translate-y-[-6px]">+</span>
                </Link>
              </div>
            </div>
          </div>

          {/* previos surveys */}
          <div className=" p-5">
            <div className="w-[60%] mx-auto flex flex-col   text-gray-600 font-medium gap-2">
              <div className="">
                <h1 className=" mb-5">Existing surveys</h1>
                {/* list of surveys */}
                <div className="flex gap-5 flex-wrap">
                  {surveyList?.map((data, index) => {
                    return (
                      <div
                        key={index}
                        className="text-left  bg-gray-100  p-5 rounded-md hover:outline-gray-500 hover:outline transition-all cursor-pointer justify-between flex items-end gap-4 "
                      >
                        <div>
                          <h1 className="font-semibold text-xl mb-5">
                            {data?.survey_name}
                          </h1>

                          <p className="text-xs text-gray-500">
                            Created: {data?.created_timestamp}
                          </p>
                        </div>

                        <div>
                          <div className=" cursor-pointer rounded-md hover:bg-gray-200 transition-all ">
                            <MoreVertIcon />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default SurveyDashboard;
