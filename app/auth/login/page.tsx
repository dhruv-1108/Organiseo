"use client";
import LoginForms from "@/components/forms/LoginForms";
import React, { useState } from "react";

type Props = {};

const page = (props: Props) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <LoginForms />
    </div>
  );
};

export default page;
