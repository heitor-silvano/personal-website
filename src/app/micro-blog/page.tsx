"use client";
import LocalFont from "next/font/local";
import Section from "@/components/section";

export const libron = LocalFont({
  src: [
    {
      path: "../../../public/fonts/Libron-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Libron-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../public/fonts/Libron-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Libron-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

const MicroBlog = () => {
  return (
    <>
      <div
        className={`flex flex-row justify-center gap-4 p-4 antialiased ${libron.className}`}
      >
        <Section title="Posts">
        </Section>
      </div>
    </>
  );
};

export default MicroBlog;
