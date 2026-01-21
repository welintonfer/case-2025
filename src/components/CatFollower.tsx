"use client";

import { useEffect, useRef } from "react";

interface CatFollowerProps {
  isDarkMode: boolean;
  className?: string;
  size?: number; // Adicionei um prop opcional para controlar o tamanho total
}

export default function CatFollower({ isDarkMode, className, size = 600 }: CatFollowerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Ajuste de Nitidez (High DPI) ---
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    
    // Define o tamanho lógico e o tamanho real de pixels
    canvas.width = size * dpr;
    canvas.height = (size * 0.83) * dpr; // Mantém a proporção 600x500
    ctx.scale(dpr, dpr);

    // Ajustamos as coordenadas base para o novo tamanho lógico
    const logicalW = size;
    const logicalH = size * 0.83;
    const basePos = { x: logicalW / 2, y: logicalH / 2 + 20 };
    const mouse = { x: basePos.x, y: basePos.y };
    
    let time = 0;
    let rafId: number;

    const catColors = {
      lightModeApp: { 
        cat: "#BFC0ED", 
        shadow: "#E1F7D5", 
        eyes: "#FFFFFF", 
        pupils: "#000000" 
      },
      darkModeApp: { 
        cat: "#000000", 
        shadow: "#D2C9FB", 
        eyes: "#FFFFFF", 
        pupils: "#000000" 
      }
    };

    function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number[]) {
      const [tl, tr, br, bl] = r;
      ctx.beginPath();
      ctx.moveTo(x + tl, y);
      ctx.lineTo(x + w - tr, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + tr);
      ctx.lineTo(x + w, y + h - br);
      ctx.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
      ctx.lineTo(x + bl, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - bl);
      ctx.lineTo(x, y + tl);
      ctx.quadraticCurveTo(x, y, x + tl, y);
      ctx.closePath();
    }

    function drawCat() {
      if (!ctx || !canvas) return;
      const colors = isDarkMode ? catColors.darkModeApp : catColors.lightModeApp;
      
      ctx.clearRect(0, 0, logicalW, logicalH);
      time += 0.04;

      const swayX = Math.sin(time * 0.5) * 4;
      const swayY = Math.cos(time * 0.8) * 2;
      const catPos = { x: basePos.x + swayX, y: basePos.y + swayY };

      // 1. Sombra
      ctx.fillStyle = colors.shadow;
      ctx.beginPath();
      const shadowW = 90 + Math.sin(time * 0.8) * 5;
      ctx.ellipse(basePos.x + (swayX * 0.5), basePos.y + 130, shadowW, 25, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Rabo
      ctx.save();
      ctx.strokeStyle = colors.cat;
      ctx.lineWidth = 18;
      ctx.lineCap = "round";
      ctx.beginPath();
      const tailX = catPos.x + 60;
      const tailY = catPos.y + 100;
      ctx.moveTo(tailX, tailY);
      const tailSway = Math.sin(time) * 25;
      ctx.bezierCurveTo(tailX + 40, tailY - 10, tailX + 60 + tailSway, tailY + 20, tailX + 50 + tailSway, tailY - 40);
      ctx.stroke();
      ctx.restore();

      // 3. Corpo
      ctx.fillStyle = colors.cat;
      roundRect(ctx, catPos.x - 70, catPos.y + 30, 140, 105, [50, 50, 45, 45]);
      ctx.fill();

      // 4. Orelhas
      const drawEar = (side: number) => {
        ctx.beginPath();
        ctx.moveTo(catPos.x + (side * 110), catPos.y - 40);
        ctx.lineTo(catPos.x + (side * 95), catPos.y - 130);
        ctx.lineTo(catPos.x + (side * 30), catPos.y - 60);
        ctx.fill();
      };
      drawEar(-1); 
      drawEar(1);  

      // 5. Cabeça
      ctx.beginPath();
      ctx.ellipse(catPos.x, catPos.y - 10, 130, 105, 0, 0, Math.PI * 2);
      ctx.fill();

      // 6. Olhos
      const drawEye = (ox: number) => {
        const eyeX = catPos.x + ox;
        const eyeY = catPos.y - 20;
        ctx.fillStyle = colors.eyes;
        ctx.beginPath();
        ctx.ellipse(eyeX, eyeY, 40, 50, 0, 0, Math.PI * 2);
        ctx.fill();

        const dx = mouse.x - eyeX;
        const dy = mouse.y - eyeY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxMove = 14;
        const moveX = (dx / (dist || 1)) * Math.min(dist / 10, maxMove);
        const moveY = (dy / (dist || 1)) * Math.min(dist / 10, maxMove);

        ctx.fillStyle = colors.pupils;
        ctx.beginPath();
        ctx.arc(eyeX + moveX, eyeY + moveY, 13, 0, Math.PI * 2);
        ctx.fill();
      };
      drawEye(-45); 
      drawEye(45);  

      // 7. Nariz
      ctx.fillStyle = "#FEA1A1";
      ctx.beginPath();
      ctx.ellipse(catPos.x, catPos.y + 25, 16, 11, 0, 0, Math.PI * 2);
      ctx.fill();

      // 8. Bigodes
      ctx.strokeStyle = colors.cat;
      ctx.lineWidth = 7;
      ctx.lineCap = "round";
      [-15, 5, 25].forEach((offset, i) => {
        ctx.beginPath();
        ctx.moveTo(catPos.x - 120, catPos.y + offset);
        ctx.lineTo(catPos.x - 175, catPos.y + offset + (i - 1) * 5);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(catPos.x + 120, catPos.y + offset);
        ctx.lineTo(catPos.x + 175, catPos.y + offset + (i - 1) * 5);
        ctx.stroke();
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Ajusta o cálculo do mouse para o novo tamanho do canvas
      mouse.x = (e.clientX - rect.left) * (logicalW / rect.width);
      mouse.y = (e.clientY - rect.top) * (logicalH / rect.height);
    };

    const loop = () => {
      drawCat();
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [isDarkMode, size]);

  return (
    <div className={className}>
      <canvas
        ref={canvasRef}
        style={{
          width: `${size}px`,
          height: `${size * 0.83}px`,
          background: "transparent",
          display: "block"
        }}
      />
    </div>
  );
}