'use client'

import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const flashCardsTotal = 12

export default function Flash() {
  const [flashCardsCount, setFlashCardsCount] = useState(0)
  const [shouldShowAnswer, setShouldShowAnswer] = useState(false)

  return (
    <div className="bg-gradient-to-t from-marine-600 to-marine-500 h-screen text-mirage-50 flex flex-col md:items-center">
      <div className="flex-1 flex flex-col self-stretch items-center py-20">
        <div className="space-y-4">
          <span className="text-xl line-heading font-bold">
            Fundamentos do JavaScript
          </span>

          <div className="flex items-center gap-3">
            <div className="h-3 flex-1 bg-marine-800 rounded-md">
              <div
                className="h-3 rounded-md bg-marine-300 transition-all"
                style={{
                  width: `${Math.round(
                    (flashCardsCount * 100) / flashCardsTotal,
                  )}%`,
                }}
              />
            </div>
            <span className="text-sm font-mono font-bold">
              {String(flashCardsCount).padStart(2, '0')}/{flashCardsTotal}
            </span>
          </div>
        </div>

        <div className="relative mt-20 w-full max-w-[420px] min-h-[416px] ">
          <motion.div
            className="rounded-lg relative inset-0 h-full bg-mirage-50 w-full px-6 py-6 z-20"
            transition={{ duration: 0.4 }}
            animate={
              shouldShowAnswer
                ? {
                    rotateY: 180,
                  }
                : {}
            }
          />

          <div className="absolute z-30 top-1/2 -translate-y-1/2 w-full text-center">
            <AnimatePresence>
              {shouldShowAnswer ? (
                <motion.p
                  // layoutId="card-text"
                  className="text-smoke-950 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  .map
                </motion.p>
              ) : (
                <motion.p
                  // layoutId="card-text"
                  className="text-smoke-950 leading-base text-center flex justify-center items-center"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2 }}
                >
                  Método utilizado para percorrer um array e criar um novo array
                  a partir do original com possíveis modificações.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
          <div className="z-10 rounded-lg bg-mirage-50/60 mx-6 left-4 right-4 absolute h-20 -bottom-4"></div>
        </div>
      </div>
      <button
        onClick={() => setShouldShowAnswer(true)}
        className="bg-mirage-50 text-marine-500 py-8 w-full font-bold uppercase hover:bg-mirage-50/80 md:w-[320px] md:mb-16 md:rounded-full md:py-6"
      >
        Revelar resposta
      </button>
    </div>
  )
}
