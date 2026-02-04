"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "../../lib/utils";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => (_jsx("label", { ref: ref, className: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className), ...props })));
Label.displayName = "Label";
export { Label };
