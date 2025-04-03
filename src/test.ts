// function solution(str: string): string[] | 'error' {
//     const stack: number[] = [];
//     const result: string[] = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === '(') {
//             stack.push(i);
//             console.log(`在位置 ${i} 遇到左括号，当前栈：`, stack);
//         } else if (str[i] === ')') {
//             if (stack.length === 0) {
//                 console.log('遇到右括号但栈为空，括号不匹配，返回 error');
//                 return 'error';
//             }
//             const leftIndex = stack.pop();
//             console.log(`在位置 ${i} 遇到右括号，弹出左括号位置 ${leftIndex}，当前栈：`, stack);
//             if (stack.length === 0) {
//                 const subExpression = str.substring(leftIndex + 1, i);
//                 result.push(subExpression);
//                 console.log(`当前栈为空，提取子表达式：${subExpression}，加入结果数组`);
//             }
//         }
//     }
//     if (stack.length > 0) {
//         console.log('遍历结束，栈中还有未匹配的左括号，返回 error');
//         return 'error';
//     }
//     console.log('最终结果：', result);
//     return result;
// }

// // 测试用例
// const testStr1: string = "((2 + 3) + (3 * 4)) + 2";
// console.log('测试用例 1：', testStr1);
// solution(testStr1);

// const testStr2: string = "()";
// console.log('测试用例 2：', testStr2);
// solution(testStr2);

// const testStr3: string = "(()";
// console.log('测试用例 3：', testStr3);
// solution(testStr3);

function solution(str: string): string[] | string {
    let leftCount = 0;
    const result: string[] = [];
    let current = '';

    for (const char of str) {
        if (char === '(') {
            leftCount++;
            if (leftCount === 1) {
                if (current) {
                    result.push(current);
                    current = '';
                }
            } else {
                current += char;
            }
        } else if (char === ')') {
            if (leftCount === 0) {
                return 'error';
            }
            leftCount--;
            if (leftCount === 0) {
                result.push(current);
                current = '';
            } else {
                current += char;
            }
        } else {
            current += char;
        }
    }

    if (leftCount !== 0) {
        return 'error';
    }

    if (current) {
        result.push(current);
    }

    return result.filter(item => item !== '');
}
console.log(solution("(2+3)+(3 * 4)+2"));