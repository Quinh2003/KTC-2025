import React, { useEffect } from 'react'

type Props = {}

export default function SubscriptionExamples({}: Props) {
    const [time, setTime] = React.useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Timer tick");
            setTime(new Date());
        }, 1000);
        return () => {
            console.log("Timer stopped");
            clearInterval(timer);
        };
    }, []);
    return <div>{time.toLocaleTimeString()}</div>
}