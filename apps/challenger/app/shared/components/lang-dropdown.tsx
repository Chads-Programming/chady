"use client";

import React from "react";
import { ProgramingLang } from "@repo/shared-types";
import { TemplateDropdown, DropdownItem } from "@repo/ui";
import JavaScript from "../icons/javascript";
import Python from "../icons/python";
import Typescript from "../icons/typescript";

interface Props {
  lang: ProgramingLang;
  onSelect(lang: ProgramingLang): void;
}

const LANGS: DropdownItem<ProgramingLang>[] = [
  {
    value: ProgramingLang.Javascript,
    data: ProgramingLang.Javascript,
    label: "Javascript",
  },
  {
    value: ProgramingLang.Typescript,
    data: ProgramingLang.Typescript,
    label: "Typescript",
  },
  {
    value: ProgramingLang.Python,
    data: ProgramingLang.Python,
    label: "Python",
  },
];

const getLangIcon = (lang: ProgramingLang) => {
  switch (lang) {
    case ProgramingLang.Javascript:
      return <JavaScript />;
    case ProgramingLang.Typescript:
      return <Typescript />;
    case ProgramingLang.Python:
      return <Python />;
  }
};

export const LangDropdown = ({ lang, onSelect }: Props) => {
  const handleOnSelect = (item: DropdownItem<ProgramingLang>) => {
    onSelect(item.data);
  };

  return (
    <TemplateDropdown value={lang} items={LANGS} onSelect={handleOnSelect}>
      {(item: DropdownItem<ProgramingLang>) => (
        <div className="inline-flex gap-2 justify-start items-center">
          {getLangIcon(item.data)}
          <span className="capitalize font-semibold text-sm">{item.label}</span>
        </div>
      )}
    </TemplateDropdown>
  );
};
