import React from "react";
import MainLayout from "../components/layouts/mainLayout";
import QuestionsTab from "../components/survey_edit/QuestionsTab";
import ShareTab from "../components/survey_edit/ShareTab";
import ResponsesTab from "../components/survey_edit/ResponsesTab";
import AnalyticsTab from "../components/survey_edit/AnalyticsTab";
// recoil
import { useRecoilState } from "recoil";
import { activeTabAtom } from "../recoil/activeTabAtom";

const SurveyEdit = () => {
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);
  const tabList = ["Create", "Share", "Responses", "Analytics"];
  return (
    <div>
      <MainLayout>
        <div className="flex justify-center items-center gap-5 z-50 sticky top-14 bg-white">
          {tabList?.map((data, i) => {
            return (
              <button
                key={i}
                className={` ${
                  activeTab === data
                    ? "font-semibold  border-b-gray-900"
                    : "border-b-transparent"
                } border-b-2 transition-all py-1 w-[100px]`}
                onClick={() => setActiveTab(data)}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">Step {i + 1}</span>
                  <span>{data}</span>
                </div>
              </button>
            );
          })}
        </div>
        <div className="bg-gray-100 min-h-[90vh]">
          {/* Create tab */}
          {activeTab === "Create" && <QuestionsTab />}

          {/* Share tab */}
          <div id="share">{activeTab === "Share" && <ShareTab />}</div>

          {/* Responses tab */}
          <div id="response">
            {activeTab === "Responses" && <ResponsesTab />}
          </div>

          {/* Analytics tab */}
          <div id="analytics">
            {activeTab === "Analytics" && <AnalyticsTab />}
          </div>
        </div>
      </MainLayout>
    </div>
  );
};

export default SurveyEdit;
