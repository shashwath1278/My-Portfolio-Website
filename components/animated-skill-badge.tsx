"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface AnimatedSkillBadgeProps {
  name: string
  icon: string
  index: number
}

export default function AnimatedSkillBadge({ name, icon, index }: AnimatedSkillBadgeProps) {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative h-24 w-24 rounded-lg bg-card border border-border p-4 shadow-md group overflow-hidden transition-all hover:border-primary hover:shadow-lg">
        <div className="relative h-full w-full">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain dark:invert dark:brightness-[100] dark:contrast-[100] transition-all duration-300"
            sizes="96px"
          />
        </div>
        <motion.div
          className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}

