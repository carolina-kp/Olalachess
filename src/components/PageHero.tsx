import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="bg-foreground pt-32 pb-20 relative overflow-hidden">
    <div className="absolute inset-0 opacity-[0.03]">
      <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
        {Array.from({ length: 64 }).map((_, i) => (
          <div
            key={i}
            className={`${(Math.floor(i / 8) + i % 8) % 2 === 0 ? "bg-primary-foreground" : ""}`}
          />
        ))}
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-primary-foreground/60 text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  </section>
);

export default PageHero;
