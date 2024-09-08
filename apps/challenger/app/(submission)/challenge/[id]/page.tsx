"use client";

import { Editor } from "@monaco-editor/react";
import {
  cn,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui";
import React from "react";
import Markdown from "react-markdown";

const codeChallenge = {
  title: "Regular Expression Matching",
  startedCode: "function isMatch(s, p) {\n\n};",
  description:
    'Given an input string s and a pattern p, implement regular expression matching with support for \'.\' and \'*\' where:\n\n* \'.\' Matches any single character.\n* \'*\' Matches zero or more of the preceding element.\n* The matching should cover the entire input string (not partial).\n\n### Example 1:\n\nInput: s = "aa", p = "a"\nOutput: false\n> Explanation: "a" does not match the entire string "aa".\n\n### Example 2:\n\nInput: s = "aa", p = "a*"\nOutput: true\n> Explanation: \'*\' means zero or more of the preceding element, \'a\'. Therefore, by repeating \'a\' once, it becomes "aa".\n\n### Example 3:\n\nInput: s = "ab", p = ".*"\nOutput: true\nExplanation: ".*" means "zero or more (*) of any character (.)".\n\n### Constraints:\n\n* 1 <= s.length <= 20\n* 1 <= p.length <= 20\n* s contains only lowercase English letters.\n* p contains only lowercase English letters, \'.\', and \'*\'.\n* It is guaranteed for each appearance of the character \'*\', there will be a previous valid character to match.',
};

interface CustomResizableHandleProps {
  horizontal?: boolean;
}

const CustomResizableHandle = ({ horizontal }: CustomResizableHandleProps) => (
  <ResizableHandle
    className={cn("w-5 bg-transparent group", {
      ["!h-5 border border-x-0 border-y-border"]: horizontal,
    })}
  >
    <div
      className={cn(
        "transition-all ease-in bg-gray-600 group-hover:bg-primary rounded-md ",
        {
          ["!w-2/3 !h-1 !rotate-180"]: horizontal,
          ["h-1/4 w-1"]: !horizontal,
        }
      )}
    ></div>
  </ResizableHandle>
);

const ChallengePage = () => {
  return (
    <div className="w-full flex flex-col h-fit sticky top-14">
      <ResizablePanelGroup
        direction="horizontal"
        className="w-full"
        tagName="div"
      >
        <ResizablePanel
          defaultSize={25}
          className="rounded-md border border-border backdrop-blur-md shadow-md bg-background/60"
        >
          <div className="flex flex-col px-6 py-2 gap-2">
            <h2 className="font-semibold text-xl text-primary">
              {codeChallenge.title.toUpperCase()}
            </h2>
            <Markdown className="text-gray-300 text-sm challenge-description">
              {codeChallenge.description}
            </Markdown>
          </div>
        </ResizablePanel>
        <CustomResizableHandle />
        <ResizablePanel defaultSize={75}>
          <ResizablePanelGroup
            direction="vertical"
            className="rounded-md border border-border backdrop-blur-md shadow-md bg-background/60"
          >
            <ResizablePanel defaultSize={75}>
              <div className="flex flex-col h-full px-2 pt-2 gap-2">
                <h2 className="text-pretty text-ls font-medium ml-2">Code</h2>
                <Editor
                  height="100%"
                  defaultLanguage="javascript"
                  theme="vs-dark"
                  defaultValue={codeChallenge.startedCode}
                  options={{
                    fontSize: 16,
                    formatOnType: true,
                    minimap: {
                      enabled: false,
                    },
                  }}
                />
              </div>
            </ResizablePanel>
            <CustomResizableHandle horizontal />
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                <span className="font-semibold">Results</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default ChallengePage;
