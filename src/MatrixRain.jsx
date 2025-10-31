import { useEffect, useRef } from 'react'

function MatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Chinese characters
    const chars = '田由甲申甴电甶男甸甹町画甼甽甾甿畀畁畂畃畄畅畆畇畈畉畊畋界畍畎畏畐畑'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    
    // Array to track y position and speed of each column
    const drops = []
    const speeds = []
    const chunkSize = 8 // Characters per chunk
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
      speeds[i] = Math.random() > 0.8 ? 2 : 1 // 20% chance of double speed for chunks
    }

    // Animation
    const draw = () => {
      // Fully opaque black to remove trail effect
      ctx.fillStyle = '#0a0a0a'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.font = fontSize + 'px monospace'
      
      for (let i = 0; i < drops.length; i++) {
        const x = i * fontSize
        let y = drops[i] * fontSize
        
        // Draw chunk of characters
        for (let j = 0; j < chunkSize; j++) {
          const charY = y - (j * fontSize)
          
          if (charY > -fontSize && charY < canvas.height + fontSize) {
            // Random character for this position
            const text = chars[Math.floor(Math.random() * chars.length)]
            
            // Set opacity - characters higher up in chunk are more opaque
            const opacity = Math.min(0.3, Math.max(0.1, 0.25 - (j * 0.02)))
            ctx.fillStyle = `rgba(168, 85, 247, ${opacity})` // Purple with opacity
            ctx.fillText(text, x, charY)
          }
        }
        
        // Reset drop to top randomly with higher frequency
        if (y > canvas.height + (chunkSize * fontSize) && Math.random() > 0.9) {
          drops[i] = Math.random() * -50
          speeds[i] = Math.random() > 0.8 ? 2 : 1
        }
        
        drops[i] += speeds[i]
      }
    }

    const interval = setInterval(draw, 40)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
    />
  )
}

export default MatrixRain
