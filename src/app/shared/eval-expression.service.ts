import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EvalExpressionService {

    private validExpressionRegex = /[0-9]+-\s/;

    public evalSimpleExpressions(text: string): string {
        return text;
        // const splitedText = this.splitTextByExpressions(text);
        // const evalExpressionsArr = this.evalExpressions(splitedText);
        // const finalEvalSimpleExpressionsText = evalExpressionsArr.join();
        // return finalEvalSimpleExpressionsText;
    }

    private splitTextByExpressions(text: string): string[] {
        const splitedText: string[] = [];

        // while not end
        // loop until regex
        // push to splitedText
        // loop until not regex
        // push to splitedText

        return splitedText;
    }

    private evalExpressions(splitedText: string[]): string[] {
        const evalExpressionsArr: string[] = [];

        for (let text in splitedText) {
            // if expression then reduce and replace
        }

        return evalExpressionsArr;
    }
}
