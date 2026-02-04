"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { BarChart, PieChart, Activity, Package } from "lucide-react";
import { componentRegistry } from "../../registry/enhanced-registry";
import { Card } from "../core/card";
export function ComponentAnalytics() {
    const [stats, setStats] = React.useState(null);
    React.useEffect(() => {
        // Subscribe to registry changes
        const updateStats = () => {
            setStats(componentRegistry.getStats());
        };
        updateStats();
        const unsubscribe = componentRegistry.subscribe(updateStats);
        return () => { unsubscribe(); };
    }, []);
    if (!stats)
        return null;
    return (_jsxs("div", { className: "space-y-8 p-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [_jsx(StatsCard, { title: "Total Components", value: stats.totalComponents, icon: _jsx(Package, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(StatsCard, { title: "Categories", value: stats.totalCategories, icon: _jsx(BarChart, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(StatsCard, { title: "Avg Bundle Size", value: "~4.2kb", subtext: "Estimated Gzipped", icon: _jsx(Activity, { className: "w-4 h-4 text-muted-foreground" }) }), _jsx(StatsCard, { title: "Documentation Coverage", value: "98%", icon: _jsx(PieChart, { className: "w-4 h-4 text-muted-foreground" }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [_jsxs(Card, { className: "p-6", children: [_jsx("h3", { className: "font-semibold mb-4", children: "Distribution by Category" }), _jsx("div", { className: "space-y-4", children: Object.entries(stats.componentsByCategory).map(([category, count]) => (_jsxs("div", { className: "space-y-1", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "capitalize", children: category }), _jsx("span", { className: "text-muted-foreground", children: count })] }), _jsx("div", { className: "h-2 bg-muted rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-primary", style: { width: `${(count / stats.totalComponents) * 100}%` } }) })] }, category))) })] }), _jsxs(Card, { className: "p-6", children: [_jsx("h3", { className: "font-semibold mb-4", children: "Component Status" }), _jsx("div", { className: "space-y-4", children: Object.entries(stats.componentsByStatus || {}).map(([status, count]) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-muted/50 rounded-lg", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `w-2 h-2 rounded-full ${getStatusColor(status)}` }), _jsx("span", { className: "capitalize font-medium", children: status })] }), _jsx("span", { className: "text-xl font-bold", children: count })] }, status))) })] })] }), _jsxs(Card, { className: "p-6", children: [_jsx("h3", { className: "font-semibold mb-4", children: "Recently Updated" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4", children: stats.recentlyUpdated.map((name) => (_jsxs("div", { className: "p-3 border rounded-lg bg-background flex items-center gap-2", children: [_jsx("div", { className: "w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs", children: name.substring(0, 2) }), _jsx("span", { className: "text-sm font-medium truncate", children: name })] }, name))) })] })] }));
}
function StatsCard({ title, value, subtext, icon }) {
    return (_jsxs(Card, { className: "p-6", children: [_jsxs("div", { className: "flex flex-row items-center justify-between space-y-0 pb-2", children: [_jsx("h3", { className: "tracking-tight text-sm font-medium text-muted-foreground", children: title }), icon] }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold", children: value }), subtext && _jsx("p", { className: "text-xs text-muted-foreground", children: subtext })] })] }));
}
function getStatusColor(status) {
    switch (status) {
        case 'stable': return 'bg-green-500';
        case 'beta': return 'bg-yellow-500';
        case 'experimental': return 'bg-purple-500';
        case 'deprecated': return 'bg-red-500';
        default: return 'bg-gray-500';
    }
}
