import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, Skeleton } from "@unicorn-ui/ui";
export function ComponentPageSkeleton() {
    return (_jsxs("div", { className: "space-y-10 pb-10 max-w-5xl mx-auto", children: [_jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-12 w-1/3" }), _jsx(Skeleton, { className: "h-6 w-2/3" })] }), _jsx("div", { className: "space-y-8", children: _jsxs("div", { className: "space-y-4", children: [_jsx(Skeleton, { className: "h-8 w-40" }), _jsx(Card, { className: "min-h-[350px] p-6", children: _jsx("div", { className: "flex items-center justify-center h-full", children: _jsx(Skeleton, { className: "h-10 w-32" }) }) })] }) }), _jsxs("div", { className: "space-y-6 pt-8", children: [_jsx(Skeleton, { className: "h-10 w-24" }), _jsx(Card, { className: "h-48" })] })] }));
}
