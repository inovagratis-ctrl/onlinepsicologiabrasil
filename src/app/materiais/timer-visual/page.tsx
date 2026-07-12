'use client'

import { useState, useEffect, useRef } from 'react'
import { Play, Pause, RotateCcw, Check, Timer, Minus, Plus } from 'lucide-react'

export default function TimerVisualPage() {
  const [totalTime, setTotalTime] = useState(60)
  const [timeLeft, setTimeLeft] = useState(60)
  const [isRunning, setIsRunning] = useState(false)
  const [color, setColor] = useState('green')
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, timeLeft])

  useEffect(() => {
    const percent = (timeLeft / totalTime) * 100
    if (percent > 50) setColor('green')
    else if (percent > 25) setColor('yellow')
    else if (percent > 10) setColor('orange')
    else setColor('red')
  }, [timeLeft, totalTime])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const start = () => setIsRunning(true)
  const pause = () => setIsRunning(false)
  const reset = () => {
    setIsRunning(false)
    setTimeLeft(totalTime)
  }

  const addTime = (sec: number) => {
    setTotalTime((prev) => prev + sec)
    setTimeLeft((prev) => prev + sec)
  }

  const colorMap: Record<string, { ring: string; bg: string; text: string }> = {
    green: { ring: 'stroke-emerald-500', bg: 'bg-emerald-500', text: 'text-emerald-600' },
    yellow: { ring: 'stroke-yellow-400', bg: 'bg-yellow-400', text: 'text-yellow-600' },
    orange: { ring: 'stroke-orange-500', bg: 'bg-orange-500', text: 'text-orange-600' },
    red: { ring: 'stroke-red-500', bg: 'bg-red-500', text: 'text-red-600' },
  }

  const current = colorMap[color]
  const radius = 120
  const circumference = 2 * Math.PI * radius
  const progress = (timeLeft / totalTime) * circumference

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Timer className="w-10 h-10 text-primary-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Timer Visual para Transições</h1>
          <p className="text-gray-600">
            Ajude a criança a entender quanto tempo falta usando uma barra visual colorida
          </p>
        </div>

        {/* Timer Circle */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 flex flex-col items-center">
          <div className="relative w-72 h-72">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 256 256">
              <circle
                cx="128"
                cy="128"
                r={radius}
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="12"
              />
              <circle
                cx="128"
                cy="128"
                r={radius}
                fill="none"
                className={current.ring}
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference - progress}
                style={{ transition: 'stroke-dashoffset 0.5s ease, stroke 0.5s ease' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${current.text}`}>
                {formatTime(timeLeft)}
              </span>
              <span className="text-sm text-gray-500 mt-1">
                {isRunning ? 'Em andamento...' : timeLeft === 0 ? 'Tempo esgotado!' : 'Pausado'}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              onClick={() => addTime(-10)}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              <Minus className="w-5 h-5" />
            </button>
            {!isRunning ? (
              <button
                onClick={start}
                className={`w-16 h-16 rounded-full ${current.bg} text-white flex items-center justify-center hover:opacity-90`}
              >
                <Play className="w-8 h-8 ml-1" />
              </button>
            ) : (
              <button
                onClick={pause}
                className={`w-16 h-16 rounded-full ${current.bg} text-white flex items-center justify-center hover:opacity-90`}
              >
                <Pause className="w-8 h-8" />
              </button>
            )}
            <button
              onClick={reset}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={() => addTime(10)}
              className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Presets */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-800 mb-4">Tempos Prontos</h3>
          <div className="grid grid-cols-4 gap-3">
            {[
              { label: '5 min', time: 300 },
              { label: '10 min', time: 600 },
              { label: '15 min', time: 900 },
              { label: '20 min', time: 1200 },
            ].map((preset) => (
              <button
                key={preset.time}
                onClick={() => {
                  setIsRunning(false)
                  setTotalTime(preset.time)
                  setTimeLeft(preset.time)
                }}
                className="py-3 px-4 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100 font-medium transition"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-gray-800 mb-4">Como Usar</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
              <span>Use para transições entre atividades (brincar → dever de casa)</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
              <span>A cor muda automaticamente para avisar que o tempo está acabando</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
              <span>Clique no botão de pausa se precisar interromper</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent-500 mt-0.5 flex-shrink-0" />
              <span>Use os botões +/- para ajustar 10 segundos</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
