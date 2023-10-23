import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export const QuestionTypeValues = {
    MultipleChoice: "multiple_choice_question",
    ShortAnswer: "short_answer_question"
} as const;

export function ChangeType(): JSX.Element {
    const [currentType, setCurrentType] = useState<QuestionType>(
        QuestionTypeValues.ShortAnswer
    );

    const changeType = () => {
        setCurrentType((prevType) =>
            prevType === QuestionTypeValues.MultipleChoice
                ? QuestionTypeValues.ShortAnswer
                : QuestionTypeValues.MultipleChoice
        );
    };

    return (
        <div>
            <div>
                <Button onClick={changeType}>Change Type</Button>
            </div>
            <div>
                {currentType === QuestionTypeValues.MultipleChoice && (
                    <p>Multiple Choice</p>
                )}
                {currentType === QuestionTypeValues.ShortAnswer && (
                    <p>Short Answer</p>
                )}
            </div>
        </div>
    );
}
