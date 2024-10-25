import React from "react";

type ProgressProps = {
    percentage: number;
};

export const Progress: React.FC<ProgressProps> = (props) => {
    const { percentage } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="212"
            height="6"
            fill="none"
            viewBox="0 0 212 6"
        >
            <rect width="100%" height="6" fill="#D7DBF5" rx="3"></rect>
            <rect width={`${percentage}%`} height="6" fill="#4F4FFF" rx="3"></rect>
        </svg>
    );
}
