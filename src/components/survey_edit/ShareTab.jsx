import React from "react";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import SendAndArchiveRoundedIcon from "@mui/icons-material/SendAndArchiveRounded";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
// recoil
import { activeTabAtom } from "../../recoil/activeTabAtom";
import { useRecoilState } from "recoil";

const ShareTab = () => {
  // Global variables
  const [activeTab, setActiveTab] = useRecoilState(activeTabAtom);

  // copy link functions
  function copyText(entryText) {
    navigator.clipboard.writeText(entryText);
  }
  return (
    <div>
      <div className="w-[20%]  ">
        <button
          onClick={() => setActiveTab("Create")}
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
      <div className="w-[60%] mx-auto  py-4 flex flex-col gap-5 ">
        {/* share link section */}
        <div className="bg-white p-5 rounded-lg  w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-lg text-gray-800 font-semibold">Survey Link</h1>

            <button
              title="Copy link to share"
              onClick={() =>
                copyText("http://eko_survey.com/public_survey/5421")
              }
            >
              <ContentCopyRoundedIcon className="text-gray-700" />
            </button>
          </div>

          <div className="p-3 border rounded-lg mt-5 text-gray-800 flex justify-between items-center gap-2">
            <span>http://eko_survey.com/public_survey/5421</span>
            <Link target="_blank" to="/public_survey">
              <OpenInNewIcon />
            </Link>
          </div>
        </div>

        {/* Share via email */}
        <div className="bg-white p-5 rounded-lg w-full">
          <div className="flex justify-between items-center">
            <h1 className="text-lg text-gray-800 font-semibold">
              Share via email
            </h1>

            <div>
              <button className="border border-gray-800 text-black hover:bg-gray-700 px-3 p-2 rounded-lg hover:text-white active:scale-95 transition-all font-semibold flex items-center gap-3 group">
                <span>
                  <SendAndArchiveRoundedIcon className="text-gray-700 group-hover:text-white transition-all" />
                </span>
                <span>Import Emails</span>
              </button>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="mb-5">
              <h3 className="text-sm text-gray-500 mb-1">To</h3>
              <input type="text" className="border w-full  rounded-lg p-2" />
            </div>

            <div className="mb-5">
              <h3 className="text-sm text-gray-500 mb-1">Subject</h3>
              <input type="text" className="border w-full  rounded-lg p-2" />
            </div>

            <div className="mb-5">
              <h3 className="text-sm text-gray-500 mb-1">Message</h3>
              <textarea rows={5} className="border w-full  rounded-lg p-2" />
            </div>

            <button className="border border-gray-800 text-black hover:bg-gray-700 px-3 p-2 rounded-lg hover:text-white active:scale-95 transition-all font-semibold flex justify-center items-center gap-3 group w-full ">
              Send
            </button>
          </form>
        </div>
      </div>

      <div className="w-[20%]  ">
        <button
          onClick={() => setActiveTab("Responses")}
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

export default ShareTab;
