import React, { useEffect, useState } from "react";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";

import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import { useRecoilState } from "recoil";
import { activeTabAtom } from "../../recoil/activeTabAtom";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#1e1e1e",
  },
  "& .MuiRating-iconHover": {
    color: "#eeeee",
  },
});

const QuestionsTab = () => {
  // Global variables
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  // local variables
  const [pageData, setPageData] = useState({});
  const [activeInputId, setActiveInputId] = useState();
  const [changeQuestionId, setChangeQuestionId] = useState();

  // deafult data
  const questionTypes = [
    "Scale (0-10)",
    "Star Rating",
    "Short Answer",
    "Long Answer",
  ];

  const scalePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const mockPageData = {
    survey_basic_detail: {
      name: "NPS Survey",
      desc: "Lorem ipsum dolor sit amet",
      cover: "img path here",
      primary_color: "#ac0069",
      logo: "img path here",
    },

    all_questionnaire: [
      // {
      //   id: 1,
      //   question: " Email ID ",
      //   question_type: "Short Answer",
      //   answer: "",
      //   required: false,
      // },
      {
        id: 2,
        question:
          "On a scale of 0 to 10, how likely are you to recommend our company/product/service to a friend or colleague?",
        question_type: "Scale (0-10)",
        start_label: "Extremely low",
        end_label: "Extremely high",
        answer: "",
        required: false,
      },
      {
        id: 3,
        question:
          " In your opinion, what improvements could the company make that would warrant a higher rating from you? ",
        question_type: "Long Answer",
        answer: "",
        required: false,
      },

      // {
      //   id: 4,
      //   question: "How would you rate our quality of service?",
      //   question_type: "Star Rating",
      //   answer: "",
      //   required: false,
      // },
    ],
  };

  useEffect(() => {
    setPageData(mockPageData);
  }, []);

  return (
    <div className="flex">
      <div className="w-[20%]">
        {/* <button className="px-10 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg active:scale-95 transition-all fixed bottom-5 left-5 text-xl flex items-center justify-center gap-1 ">
          <span className="scale-x-[-1] -translate-y-[0.20rem] block">
            <ArrowForwardIosRoundedIcon />
          </span>

          <span>Previous</span>
        </button> */}

        <button className="px-10 py-3 bg-gray-400  text-white rounded-lg cursor-not-allowed transition-all fixed bottom-5 left-5 text-xl flex items-center justify-center gap-1 ">
          <span className="scale-x-[-1] -translate-y-[0.20rem] block">
            <ArrowForwardIosRoundedIcon />
          </span>

          <span>Previous</span>
        </button>
      </div>
      <div className="flex-1 mx-auto py-2 ">
        {/* survey name and description */}
        <div className="bg-white p-5 rounded-lg mb-5">
          <input
            autoFocus
            type="text"
            className="block w-full border-b outline-none focus:border-b-2 focus:border-b-gray-400 p-2 text-2xl font-semibold mb-5"
            placeholder="Survey Name"
          />

          <textarea
            rows={3}
            placeholder="Survey description"
            className="border-b block w-full outline-none focus:border-b-2 focus:border-b-gray-400 p-2"
          />
        </div>

        {/* survey questions */}
        <div>
          {/* question block */}
          {pageData?.all_questionnaire?.map((data, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveInputId(data?.id);
                }}
                onMouseEnter={() => {
                  setActiveInputId(data?.id);
                }}
                className="bg-white p-5 rounded-lg mb-5"
              >
                <div className="flex items-center gap-5">
                  {/* question */}
                  <div className="flex-1">
                    <input
                      type="text"
                      className="block w-full border-b outline-none focus:border-b-2 focus:border-b-gray-400 p-2 text-xl  mb-5"
                      value={data?.question}
                      onChange={(e) => {
                        setPageData({
                          ...pageData,
                          all_questionnaire: pageData?.all_questionnaire?.map(
                            (all_q_data) => {
                              if (activeInputId === all_q_data?.id) {
                                return {
                                  ...all_q_data,
                                  question: e?.target?.value,
                                };
                              } else return all_q_data;
                            }
                          ),
                        });
                      }}
                      placeholder="Write your question here"
                    />
                  </div>

                  {/* question type */}
                  <div>
                    <h1 className="text-gray-500 text-xs mb-1">
                      Question Type
                    </h1>
                    <div className="relative">
                      <div
                        className="border rounded-lg py-2 px-5 flex items-center justify-between gap-2 cursor-pointer w-[200px]"
                        onClick={() => {
                          changeQuestionId === data?.id
                            ? setChangeQuestionId(null)
                            : setChangeQuestionId(data?.id);
                        }}
                      >
                        <h1>{data?.question_type}</h1>
                        <span>
                          <ArrowDropDownRoundedIcon />
                        </span>
                      </div>

                      {changeQuestionId === data?.id && (
                        <div className="absolute top-[110%] shadow-2xl  border bg-gray-50 z-20 rounded-lg  right-0 left-0 overflow-hidden">
                          {questionTypes?.map((m_data) => {
                            return (
                              <div
                                key={m_data}
                                className={` ${
                                  m_data === data?.question_type
                                    ? "bg-gray-300"
                                    : "hover:bg-gray-200"
                                } p-2 cursor-pointer`}
                                onClick={() => {
                                  setPageData({
                                    ...pageData,
                                    all_questionnaire:
                                      pageData?.all_questionnaire?.map(
                                        (a_data) => {
                                          if (changeQuestionId === a_data?.id) {
                                            return {
                                              ...data,
                                              question_type: m_data,
                                            };
                                          } else return a_data;
                                        }
                                      ),
                                  });

                                  setChangeQuestionId(null);
                                }}
                              >
                                {m_data}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  {data?.question_type === "Short Answer" && (
                    <div>
                      <input
                        type="text"
                        placeholder="Short answer here"
                        className="w-full p-2 border mb-5"
                      />
                    </div>
                  )}

                  {data?.question_type === "Long Answer" && (
                    <div>
                      <textarea
                        rows={5}
                        placeholder="Long answer here"
                        className="w-full p-2 border mb-5"
                      />
                    </div>
                  )}

                  {data?.question_type === "Scale (0-10)" && (
                    <div>
                      <div className="flex gap-3 items-center justify-center flex-wrap py-5">
                        {scalePoints?.map((s_data) => {
                          return (
                            <div
                              key={s_data}
                              className="aspect-square rounded-xl bg-gray-300 w-[50px] flex justify-center items-center cursor-pointer hover:bg-gray-400"
                            >
                              {s_data}
                            </div>
                          );
                        })}
                      </div>

                      {/* <div>
                        <div className="flex items-center p-5 gap-5 ">
                          <span className="text-gray-500 font-semibold">0</span>
                          <input
                            type="text"
                            placeholder="Label (optional)"
                            className="border-b "
                            value={data?.start_label}
                            onChange={(e) => {
                              setPageData({
                                ...pageData,
                                all_questionnaire:
                                  pageData?.all_questionnaire?.map(
                                    (aq_data) => {
                                      if (aq_data?.id === activeInputId) {
                                        return {
                                          ...aq_data,
                                          start_label: e?.target?.value,
                                        };
                                      } else return aq_data;
                                    }
                                  ),
                              });
                            }}
                          />
                        </div>

                        <div className="flex items-center p-5 gap-5 ">
                          <span className="text-gray-500 font-semibold">
                            10
                          </span>
                          <input
                            type="text"
                            placeholder="Label (optional)"
                            className="border-b "
                            value={data?.end_label}
                            onChange={(e) => {
                              setPageData({
                                ...pageData,
                                all_questionnaire:
                                  pageData?.all_questionnaire?.map(
                                    (aq_data) => {
                                      if (aq_data?.id === activeInputId) {
                                        return {
                                          ...aq_data,
                                          end_label: e?.target?.value,
                                        };
                                      } else return aq_data;
                                    }
                                  ),
                              });
                            }}
                          />
                        </div>
                      </div> */}
                    </div>
                  )}

                  {data?.question_type === "Star Rating" && (
                    <div
                      className="flex justify-start items-center gap-10"
                      autoFocus
                    >
                      <button
                        className={`mb-3 rounded-lg ml-10 outline-none items-center cursor-pointer transition-all scale-150 `}
                      >
                        <StyledRating
                          name="customized-color"
                          defaultValue={0}
                          precision={0.5}
                          icon={<StarIcon fontSize="large" />}
                          emptyIcon={<StarBorderIcon fontSize="large" />}
                          onChange={(event, newValue) => {
                            setPageData({
                              ...pageData,
                              survey: pageData?.survey?.map(
                                (c_data, c_index) => {
                                  if (activeQuestionIndex === c_index) {
                                    return {
                                      ...c_data,
                                      answer: newValue,
                                    };
                                  } else {
                                    return c_data;
                                  }
                                }
                              ),
                            });
                          }}
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className="border-t  flex justify-end items-center pt-5 gap-5">
                  {/* <ContentCopyRoundedIcon className="text-gray-600" /> */}
                  <DeleteForeverRoundedIcon
                    className="text-gray-600 cursor-pointer hover:text-red-500 transition-all"
                    onClick={() => {
                      let filteredArray = pageData?.all_questionnaire
                        ?.filter((f_data, f_index) => {
                          if (f_index !== index) {
                            return f_data;
                          }
                        })
                        ?.map((m_data) => {
                          return m_data;
                        });

                      setPageData({
                        ...pageData,
                        all_questionnaire: filteredArray,
                      });
                    }}
                  />
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">Required</span>
                    <button
                      onClick={() =>
                        setPageData({
                          ...pageData,
                          all_questionnaire: pageData?.all_questionnaire?.map(
                            (m_data) => {
                              if (activeInputId === m_data?.id) {
                                return {
                                  ...m_data,
                                  required: !m_data?.required,
                                };
                              } else return m_data;
                            }
                          ),
                        })
                      }
                      className={`${
                        data?.required ? " bg-green-100" : "bg-gray-100"
                      } bg-gray-300 w-[35px] aspect-video relative rounded-full`}
                    >
                      <div
                        className={` ${
                          data?.required
                            ? "left-[20px] bg-green-500 ease-in duration-300"
                            : "left-0 bg-gray-500 ease-in duration-300"
                        }  rounded-full aspect-square w-[20px] absolute  top-[-2%] transition-all `}
                      ></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="flex justify-center items-center gap-2 flex-col text-gray-500 text-xl py-5">
            <button
              onClick={() => {
                setPageData({
                  ...pageData,
                  all_questionnaire: [
                    ...pageData?.all_questionnaire,
                    {
                      id: new Date().getTime(),
                      question: "",
                      question_type: "Short Answer",
                      required: false,
                    },
                  ],
                });
              }}
              className="active:scale-95 transition-all"
            >
              <img src="./add_icon.svg" alt="" className="mx-auto w-[80px]" />
            </button>
            <h1>Add Questions</h1>
          </div>
        </div>
      </div>
      <div className="w-[20%]">
        <button
          onClick={() => setActiveTab("Share")}
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

export default QuestionsTab;
