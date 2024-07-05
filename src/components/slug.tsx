"use client";
import React, { useEffect } from "react";

const Slug = ({ slug }: { slug: string }) => {
  useEffect(() => {
    console.log("slug", slug);
  }, [slug]);

  return <li>{slug}</li>;
};

export default Slug;
