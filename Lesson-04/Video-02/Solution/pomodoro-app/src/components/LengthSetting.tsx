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
                <Button onClick={onIncrease} disabled={isDisabled} data-testid="plus" variant="default">
                    +
                </Button>
                <p className="text-lg">{length}</p>
                <Button onClick={onDecrease} disabled={isDisabled} data-testid="minus" variant="default">
                    -
                </Button>
            </div>
        </div>
    );
};

export default LengthSetting;