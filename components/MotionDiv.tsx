'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionDivProps extends HTMLMotionProps<'div'> {
  children?: ReactNode;
}

export default function MotionDiv({ children, ...props }: MotionDivProps) {
  return <motion.div {...props}>{children}</motion.div>;
}

export function MotionArticle({ children, ...props }: MotionDivProps) {
  return <motion.article {...props}>{children}</motion.article>;
}
