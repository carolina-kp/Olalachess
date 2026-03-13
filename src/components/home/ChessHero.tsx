import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mouse } from "lucide-react";

const pieces = ["♛", "♞", "♝", "♜", "♚", "♟"];

const ChessHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let animId: number;

    const floatingPieces = Array.from({ length: 12 }, () => ({
      char: pieces[Math.floor(Math.random() * pieces.length)],
      x: Math.random(),
      y: Math.random(),
      speed: 0.15 + Math.random() * 0.15,
      size: 20 + Math.random() * 30,
      opacity: 0.04 + Math.random() * 0.08,
      drift: Math.random() * Math.PI * 2,
    }));

    const waypoints = [
      { x: 0.1, y: 0.7 },
      { x: 0.25, y: 0.55 },
      { x: 0.4, y: 0.4 },
      { x: 0.55, y: 0.5 },
      { x: 0.7, y: 0.35 },
      { x: 0.85, y: 0.25 },
    ];

    const resize = () => {
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (time: number) => {
      const t = time / 1000;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Chessboard
      const sq = w / 8;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if ((r + c) % 2 === 0) {
            ctx.fillStyle = `rgba(255,255,255,${0.01 + Math.random() * 0.02})`;
            ctx.fillRect(c * sq, r * (h / 8), sq, h / 8);
          }
        }
      }

      // Floating pieces
      for (const p of floatingPieces) {
        const px = p.x * w + Math.sin(t * p.speed + p.drift) * 40;
        const py = (p.y * h + t * p.speed * 15) % (h + 60);
        ctx.font = `${p.size}px serif`;
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fillText(p.char, px, py);
      }

      // Knight path
      const progress = (t * 0.3) % waypoints.length;
      const idx = Math.floor(progress);
      const frac = progress - idx;
      const from = waypoints[idx];
      const to = waypoints[(idx + 1) % waypoints.length];
      const kx = (from.x + (to.x - from.x) * frac) * w;
      const ky = (from.y + (to.y - from.y) * frac) * h;

      // Trail dots
      for (let i = 0; i <= idx; i++) {
        ctx.beginPath();
        ctx.arc(waypoints[i].x * w, waypoints[i].y * h, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(96,165,250,0.08)";
        ctx.fill();
      }

      // Glow
      const glow = ctx.createRadialGradient(kx, ky, 0, kx, ky, 60);
      glow.addColorStop(0, "rgba(96,165,250,0.15)");
      glow.addColorStop(1, "transparent");
      ctx.fillStyle = glow;
      ctx.fillRect(kx - 60, ky - 60, 120, 120);

      // Knight
      ctx.font = "48px serif";
      ctx.fillStyle = "rgba(255,255,255,0.25)";
      ctx.fillText("♞", kx - 24, ky + 16);

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-foreground overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-foreground/80" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase font-medium">
            Positive Thinking
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6"
        >
          OLALACHESS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-serif italic text-primary-foreground/60 text-xl md:text-2xl mb-8"
        >
          Make all your pieces smile
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-primary-foreground/50 max-w-2xl mx-auto mb-10 text-base lg:text-lg"
        >
          Master strategy. Elevate your chess. Transform your thinking. A method rooted
          in positive thinking, harmony on the board, and unlimited growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/contact"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Book a Session
          </Link>
          <Link
            to="/about"
            className="px-8 py-3 border border-primary-foreground/20 text-primary-foreground rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-12 text-primary-foreground/30 text-sm"
        >
          GM Arthur Kogan — Grandmaster & Chess Trainer
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <Mouse className="text-primary-foreground/30" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ChessHero;
