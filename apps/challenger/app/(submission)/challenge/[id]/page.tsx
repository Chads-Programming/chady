"use client";

import {
  cn,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@repo/ui";
import React from "react";

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
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full sticky top-14"
    >
      <ResizablePanel
        defaultSize={25}
        className="rounded-md border border-border backdrop-blur-md shadow-md bg-background/60"
      >
        <div className="flex h-auto items-center justify-center p-6">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <CustomResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup
          direction="vertical"
          className="rounded-md border border-border backdrop-blur-md shadow-md bg-background/60"
        >
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <CustomResizableHandle horizontal />
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default ChallengePage;
