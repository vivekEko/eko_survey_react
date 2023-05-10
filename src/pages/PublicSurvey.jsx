import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#1e1e1e",
  },
  "& .MuiRating-iconHover": {
    color: "#eeeee",
  },
});

const PublicSurvey = () => {
  // local variables
  const [pageData, setPageData] = useState({});
  const scalePoints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const mockPageData = {
    survey_basic_detail: {
      name: "NPS Survey",
      desc: " NPS is a common metric used to determine customer perception and experience. Organizations use NPS scores to help find business areas that need improvement to create better customer loyalty.",
      cover: "img path here",
      primary_color: "#ac0069",
      logo: "img path here",
    },

    all_questionnaire: [
      {
        id: 1,
        question: " Email ID ",
        question_type: "Short Answer",
        answer: "",
        required: true,
      },
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

      //   {
      //     id: 4,
      //     question: "How would you rate our quality of service?",
      //     question_type: "Star Rating",
      //     answer: "",
      //     required: false,
      //   },
    ],
  };

  useEffect(() => {
    setPageData(mockPageData);
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="w-[60%] mx-auto pt-5">
        <div className="bg-white rounded-lg text-gray-700 p-5 mb-5 ">
          <h1 className="text-4xl font-semibold mb-5">
            {" "}
            {pageData?.survey_basic_detail?.name}{" "}
          </h1>
          <p className="text-gray-700">{pageData?.survey_basic_detail?.desc}</p>
        </div>

        <div>
          {/* all questions */}
          <div>
            {pageData?.all_questionnaire?.map((data, i) => {
              return (
                <div
                  key={data?.id}
                  className="bg-white rounded-lg text-gray-700 p-5 mb-5 "
                >
                  <h1 className="text-xl font-semibold mb-5">
                    <span> {data?.question}</span>
                    {data?.required && (
                      <span className="text-red-500 font-semibold">*</span>
                    )}
                  </h1>

                  <div>
                    {data?.question_type === "Short Answer" && (
                      <div>
                        <input
                          type="text"
                          className="w-full border text-lg p-2 rounded-lg"
                          placeholder="Type your response here"
                        />
                      </div>
                    )}

                    {data?.question_type === "Long Answer" && (
                      <div>
                        <textarea
                          rows={5}
                          className="w-full border text-lg p-2 rounded-lg"
                          placeholder="Type your response here"
                        />
                      </div>
                    )}

                    {data?.question_type === "Star Rating" && (
                      <div>
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
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* submit */}
          <div className="pb-10 flex justify-between items-center">
            <button className="bg-gray-800 text-white text-lg font-semibold px-8 py-3 rounded-lg hover:bg-gray-900 transition-all active:scale-95">
              Submit
            </button>

            <button className=" transition-all active:scale-95  hover:bg-gray-200 py-3 px-5 text-lg rounded-lg text-red-500">
              Reset form
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicSurvey;
