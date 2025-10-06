import React from "react";

export function Card({children}: {children: React.ReactNode}) {
    return (
        <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-lg p-8">
            {children}
        </div>
    );
}   