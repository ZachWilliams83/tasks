import React, { useState } from "react";
import { Button } from "react-bootstrap";

export enum Holiday {
    DragonBoat = "🎏",
    Diwali = "🪔",
    Halloween = "🎃",
    Christmas = "🎄",
    NewYear = "🎉"
}

// Define the transitions
const alphabeticalTransitions: Record<Holiday, Holiday> = {
    [Holiday.Christmas]: Holiday.Diwali,
    [Holiday.Diwali]: Holiday.DragonBoat,
    [Holiday.DragonBoat]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.NewYear,
    [Holiday.NewYear]: Holiday.Christmas
};

const yearlyTransitions: Record<Holiday, Holiday> = {
    [Holiday.DragonBoat]: Holiday.Diwali,
    [Holiday.Diwali]: Holiday.Halloween,
    [Holiday.Halloween]: Holiday.Christmas,
    [Holiday.Christmas]: Holiday.NewYear,
    [Holiday.NewYear]: Holiday.DragonBoat
};

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState(Holiday.DragonBoat);

    const advanceAlphabetically = () => {
        setCurrentHoliday(alphabeticalTransitions[currentHoliday]);
    };

    const advanceByYear = () => {
        setCurrentHoliday(yearlyTransitions[currentHoliday]);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <Button onClick={advanceAlphabetically}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
        </div>
    );
}
