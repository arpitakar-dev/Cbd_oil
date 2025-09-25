import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const useHandleScroller = () => {
     const targetSec = useRef(null)
          const navigate = useNavigate();
          const location = useLocation();
     const handleScroll = () => {
          if (location.pathname === '/') {
               if (targetSec.current) {
                    targetSec.current?.scrollIntoView({ behavior: 'smooth' });
               }
          }
          else {
               navigate('/shop')
          }
     }
     return { handleScroll, targetSec }
}