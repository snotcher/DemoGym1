import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

const Counter = ({ from = 0, to, duration = 2 }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          node.textContent = Math.floor(value) + "+";
        },
      });
      return () => controls.stop();
    }
  }, [from, to, isInView, duration]);

  return <span ref={nodeRef} className="stat-number" />;
};

export default Counter;
