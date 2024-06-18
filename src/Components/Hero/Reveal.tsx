"use client"
 
import { useInView, useAnimation, motion } from "framer-motion"
import { useEffect, useRef } from "react"
 
export function Reveal({
  config,
  children,
}: {
  children: JSX.Element
  config?: { once: boolean }
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: config?.once })
  const mainControl = useAnimation()
 
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible")
    } else {
      mainControl.start("hidden")
    }
  }, [isInView, mainControl])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
 
export function RevealFromR({
  config,
  children,
}: {
  children: JSX.Element
  config?: { once: boolean }
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: config?.once })
  const mainControl = useAnimation()
 
  useEffect(() => {
    if (isInView) {
      console.log("🚀 ~ useEffect ~ isInView:", isInView)
      mainControl.start("visible")
    } else {
      mainControl.start("hidden")
    }
  }, [isInView, mainControl])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: 75 },
 
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full"
    >
      {children}
    </motion.div>
  )
}
 
export function RevealFromL({
  config,
  children,
}: {
  children: JSX.Element
  config?: { once: boolean }
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: config?.once })
  const mainControl = useAnimation()
 
  useEffect(() => {
    if (isInView) {
      mainControl.start("visible")
    } else {
      mainControl.start("hidden")
    }
  }, [isInView, mainControl])
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      }}
      initial="hidden"
      animate={mainControl}
      transition={{ duration: 0.5, delay: 0.25 }}
      className="w-full leftwal"
    >
      {children}
    </motion.div>
  )
}