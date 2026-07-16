// import { useEffect, useState } from "react"

// export  const UseUserOnline = ()=>{
// const [OnlineStatus , SetOnlinestatus] = useState(true);

// useEffect ( ()=>{
    
//    window.addEventListener("online" ,()=>{
//         SetOnlinestatus(true);  
//    })

//     window.addEventListener("offline" ,()=>{
//         SetOnlinestatus(false);  
//    })


// },[])

//   return {OnlineStatus}
// }

import { useEffect, useState } from "react";

export const UseUserOnline = () => {
  const [OnlineStatus, SetOnlinestatus] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => SetOnlinestatus(true);
    const goOffline = () => SetOnlinestatus(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  return { OnlineStatus };
};
