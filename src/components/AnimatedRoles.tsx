'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedRolesProps {
  roles: string[];
}

export default function AnimatedRoles({ roles }: AnimatedRolesProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="relative h-5 w-48 overflow-hidden flex items-center justify-end">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={roles[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="text-zinc-200 absolute right-0 whitespace-nowrap"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
