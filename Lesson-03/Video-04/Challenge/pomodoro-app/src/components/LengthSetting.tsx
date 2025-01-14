import React from 'react';
import Button from './Button';

interface LengthSettingProps {
    title: string;
    length: number;
    onIncrease: () => void;
    onDecrease: () => void;
    isDisabled: boolean;
}

const LengthSetting: React.FC<LengthSettingProps> = ({ title, length, onIncrease, onDecrease, isDisabled }) => {
    return (
        <div className="flex flex-col items-center">
            <p className="text-xl font-bold mb-3">{title}</p>
            <div className="flex justify-center items-center space-x-2">
                <Button onClick={onIncrease} disabled={isDisabled} variant="default">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </Button>
                <p className="text-lg">{length}</p>
                <Button onClick={onDecrease} disabled={isDisabled} variant="default">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default LengthSetting;