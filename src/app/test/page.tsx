import Slug from "@/components/slug";
import React from "react";

const TestPage = async () => {
  const response = await fetch("https://hojunin-2-0.vercel.app/api/contents");
  const contents = await response.json();
  console.log("리렌더");
  return (
    <ul className="flex gap-2">
      {contents.map(({ slug }: { slug: string }) => {
        return <Slug key={slug} slug={slug} />;
      })}
    </ul>
  );
};

export default TestPage;
