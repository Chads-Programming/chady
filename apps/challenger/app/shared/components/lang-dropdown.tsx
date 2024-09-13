"use client";

import React from "react";
import { ProgramingLang } from "@repo/shared-types";
import { TemplateDropdown, DropdownItem } from "@repo/ui";
import JavaScript from "../icons/javascript";
import Python from "../icons/python";
import Typescript from "../icons/typescript";
import Php from "../icons/php";

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
  {
    value: ProgramingLang.Php,
    data: ProgramingLang.Php,
    label: "PHP",
  },
];

const getLangIcon = (lang: ProgramingLang) => {
  switch (lang) {
    case ProgramingLang.Javascript:
      return <JavaScript />;
    case ProgramingLang.Typescript:
      return <Typescript />;
    case ProgramingLang.Python:
      return <Python className="w-4 h-4" />;
    case ProgramingLang.Php:
      return <Php className="w-4 h-4" />;
  }
};

export const LangDropdown = ({ lang, onSelect }: Props) => {
  const handleOnSelect = (item: DropdownItem<ProgramingLang>) => {
    onSelect(item.data);
  };

  return (
    <TemplateDropdown
      title="Select a lang"
      value={lang}
      items={LANGS}
      onSelect={handleOnSelect}
    >
      {(item: DropdownItem<ProgramingLang>) => (
        <div className="inline-flex gap-2 justify-start items-center">
          {getLangIcon(item.data)}
          <span className="capitalize font-semibold text-sm">{item.label}</span>
        </div>
      )}
    </TemplateDropdown>
  );
};
