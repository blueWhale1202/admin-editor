import { DiffValue } from "../../types";

type Props = {
    value: DiffValue;
    origin: string;
};

const renderPrimitive = (val: any, color?: string) => (
    <span className={color}>{JSON.stringify(val)}</span>
);

const renderJson = (val: any): React.ReactNode => {
    if (val == null) return <span className="text-gray-500">null</span>;

    if (
        typeof val === "object" &&
        "value" in val &&
        "color" in val &&
        typeof val.value !== "object"
    ) {
        return renderPrimitive(val.value, val.color);
    }

    // 2D array → show line by line
    if (Array.isArray(val) && Array.isArray(val[0])) {
        return (
            <div className="font-mono text-sm whitespace-pre">
                [
                {val.map((row: any[], rowIndex: number) => (
                    <div key={rowIndex} className="pl-4">
                        [
                        {row.map((cell, colIndex) => (
                            <span key={colIndex}>
                                {renderJson(cell)}
                                {colIndex < row.length - 1 && <span>, </span>}
                            </span>
                        ))}
                        ]
                    </div>
                ))}
                ]
            </div>
        );
    }

    if (Array.isArray(val)) {
        return (
            <span>
                [
                {val.map((item, idx) => (
                    <span key={idx}>
                        {renderJson(item)}
                        {idx < val.length - 1 && <span>, </span>}
                    </span>
                ))}
                ]
            </span>
        );
    }

    if (typeof val === "object" && val !== null) {
        const entries = Object.entries(val);
        return (
            <span>
                {"{"}
                {entries.map(([key, child], idx) => (
                    <span key={key}>
                        <span>&quot;{key}&quot;</span>: {renderJson(child)}
                        {idx < entries.length - 1 && <span>, </span>}
                    </span>
                ))}
                {"}"}
            </span>
        );
    }

    return renderPrimitive(val);
};

export const HighlightContent = ({ value, origin }: Props) => {
    if (value) {
        return <>{renderJson(value)}</>;
    }
    return <pre className="whitespace-pre-wrap">{origin}</pre>;
};
