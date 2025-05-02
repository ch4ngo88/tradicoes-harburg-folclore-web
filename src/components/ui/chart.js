import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "@/lib/utils";
const THEMES = { light: "", dark: ".dark" };
const ChartContext = React.createContext(null);
function useChart() {
    const context = React.useContext(ChartContext);
    if (!context)
        throw new Error("useChart must be used within a <ChartContainer />");
    return context;
}
const ChartContainer = React.forwardRef(({ id, className, children, config, ...props }, ref) => {
    const uniqueId = React.useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;
    return (_jsx(ChartContext.Provider, { value: { config }, children: _jsxs("div", { "data-chart": chartId, ref: ref, className: cn("flex aspect-video justify-center text-xs", className), ...props, children: [_jsx(ChartStyle, { id: chartId, config: config }), _jsx(Recharts.ResponsiveContainer, { children: _jsx("div", { children: children }) })] }) }));
});
ChartContainer.displayName = "ChartContainer";
const ChartStyle = ({ id, config }) => {
    const colorConfig = Object.entries(config).filter(([, c]) => c.theme || c.color);
    if (!colorConfig.length)
        return null;
    const css = Object.entries(THEMES)
        .map(([theme, prefix]) => {
        const lines = colorConfig
            .map(([key, conf]) => {
            const color = conf.theme?.[theme] || conf.color;
            return color ? `  --color-${key}: ${color};` : null;
        })
            .filter(Boolean)
            .join("\n");
        return `${prefix} [data-chart=${id}] {\n${lines}\n}`;
    })
        .join("\n");
    return _jsx("style", { dangerouslySetInnerHTML: { __html: css } });
};
const ChartTooltip = Recharts.Tooltip;
const ChartTooltipContent = React.forwardRef(({ active, payload, label, className, labelFormatter }, ref) => {
    const { config } = useChart();
    // Filter valid items
    const validPayload = Array.isArray(payload)
        ? payload.filter((item) => !!item)
        : [];
    // Return null if not active or payload is empty
    if (!active || !validPayload.length)
        return null;
    // Format label safely
    const formattedLabel = typeof label !== "undefined"
        ? labelFormatter
            ? labelFormatter(label, validPayload)
            : label
        : null;
    return (_jsxs("div", { ref: ref, className: cn("grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl", className), children: [formattedLabel !== null && formattedLabel !== undefined && (_jsx("div", { className: "font-medium", children: formattedLabel })), _jsx("div", { className: "grid gap-1.5", children: validPayload.map((item, index) => {
                    const key = item.dataKey?.toString() ||
                        item.name?.toString() ||
                        `item-${index}`;
                    const itemConfig = getPayloadConfigFromPayload(config, item, key);
                    const indicatorColor = item.color;
                    return (_jsxs("div", { className: "flex items-center gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5", children: [itemConfig?.icon ? (_jsx(itemConfig.icon, {})) : (_jsx("div", { className: "h-2.5 w-2.5 shrink-0 rounded-[2px]", style: { backgroundColor: indicatorColor } })), _jsxs("div", { className: "flex flex-1 justify-between", children: [_jsx("span", { className: "text-muted-foreground", children: itemConfig?.label || item.name }), _jsx("span", { className: "font-mono font-medium tabular-nums text-foreground", children: item.value?.toLocaleString?.() ?? item.value })] })] }, key));
                }) })] }));
});
ChartTooltipContent.displayName = "ChartTooltipContent";
const ChartLegend = Recharts.Legend;
const ChartLegendContent = React.forwardRef(({ className, hideIcon = false, payload, verticalAlign = "bottom", nameKey }, ref) => {
    const { config } = useChart();
    const validLegendPayload = Array.isArray(payload)
        ? payload.filter((item) => !!item)
        : [];
    if (!validLegendPayload.length)
        return null;
    return (_jsx("div", { ref: ref, className: cn("flex items-center justify-center gap-4", verticalAlign === "top" ? "pb-3" : "pt-3", className), children: validLegendPayload.map((item, index) => {
            const key = nameKey || item.dataKey || `item-${index}`;
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            return (_jsxs("div", { className: "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground", children: [itemConfig?.icon && !hideIcon ? (_jsx(itemConfig.icon, {})) : (_jsx("div", { className: "h-2 w-2 shrink-0 rounded-[2px]", style: { backgroundColor: item.color } })), _jsx("span", { children: itemConfig?.label ?? item.value })] }, item.value || index));
        }) }));
});
ChartLegendContent.displayName = "ChartLegendContent";
function getPayloadConfigFromPayload(config, payload, key) {
    const payloadPayload = payload?.payload;
    const labelFromDirect = typeof payload?.[key] === "string" ? payload[key] : undefined;
    const labelFromInner = typeof payloadPayload?.[key] === "string" ? payloadPayload[key] : undefined;
    const configKey = labelFromDirect || labelFromInner || key;
    return config[configKey];
}
export { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent, ChartStyle, useChart, };
