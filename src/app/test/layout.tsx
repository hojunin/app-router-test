import React from "react";

const TestLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default TestLayout;

export const dynamic = "error";
export const dynamicParams = false;
export const revalidate = false;
