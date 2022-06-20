import React, {
    useState
} from 'react';
 
 
export default function Component() {
 
    const intervalMs = 1000;
 
    // 副作用フック
    React.useEffect(() => {
 
        const intervalId = setInterval(() => {
            
            // 定期実行する関数
            doSomething();
 
            
        }, intervalMs);
        return () => {
            clearInterval(intervalId)
        };
 
    }, []);
 
    return (
        <div></div>
    );
}