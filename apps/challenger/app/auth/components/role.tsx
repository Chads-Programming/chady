import React, { useMemo, useState } from "react";
import Image from "next/image";

interface Props {
  name: string;
  imageUrl: string;
  color: number;
}

function intToHex(colorInt: number) {
  if (colorInt < 0 || colorInt > 0xffffff) {
    return "#0000";
  }
  let hexColor = colorInt.toString(16).padStart(6, "0");
  return `#${hexColor}`;
}

export const Role = ({ name, imageUrl, color }: Props) => {
  const [showImage, setShowImage] = useState(true);
  const colorHex = useMemo(() => intToHex(color), [color]);

  const handleImageError = () => setShowImage(false);

  return (
    <div
      className="inline-flex justify-start gap-2 items-center rounded-md border py-1 px-2 select-none"
      style={{ borderColor: colorHex }}
    >
      <span className="text-xs font-medium" style={{ color: colorHex }}>
        {name}
      </span>
      {showImage && (
        <Image
          src={imageUrl}
          alt={name}
          height={15}
          width={15}
          onError={handleImageError}
        />
      )}
    </div>
  );
};
