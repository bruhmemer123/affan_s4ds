import { useState,useEffect } from "react";

export default function CountdownTimer({ targetDate,onExpire }) {
    
    const calculateTimeLeft = (targetDate) => {
        const difference = new Date(targetDate).getTime() - new Date().getTime();
        if (difference <= 0) {
            return null;
        }
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    
    useEffect(() => {
        const timer = setInterval(() => {
            const remainingTime = calculateTimeLeft(targetDate);
            setTimeLeft(remainingTime);
            if(!remainingTime&&onExpire){
                onExpire();
            }
        },1000);

        return () => clearInterval(timer);
    }, [targetDate]);
    
    if (!timeLeft) {
        return <span className="text-red-500 font-bold">Submissions Closed</span>;
    }

    return (
    <div className="text-sm font-semibold text-blue-600">
      ⏳ {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s remaining
    </div>
  );
}