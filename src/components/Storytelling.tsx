import React from 'react';
import { Lock, Eye, Crown } from 'lucide-react';
import { motion } from 'framer-motion';

const Storytelling = () => {
  return (
    <section className="py-28 bg-transparent relative overflow-hidden">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent rounded-full" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 px-6 py-3 rounded-full border border-yellow-500/30 mb-8">
            <Lock className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">LA HISTORIA PROHIBIDA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 leading-tight">
            La Venganza del Matemático:
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              El Sistema que Wall Street Quiso Enterrar
            </span>
          </h2>
        </div>
        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="premium-glass flex items-start gap-4 p-8 rounded-2xl border border-yellow-500/10 shadow-xl"
          >
            <Eye className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Creado por un matemático disidente de un fondo de cobertura de élite. Cansado de ver cómo solo los multimillonarios se beneficiaban de modelos predictivos, diseñó su propia arma: un sistema simple, basado en una anomalía matemática que el mercado ignora, para generar ganancias consistentes y silenciosas.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            className="premium-glass flex items-start gap-4 p-8 rounded-2xl border border-yellow-500/10 shadow-xl"
          >
            <Crown className="w-6 h-6 text-yellow-400 mt-1 flex-shrink-0" />
            <span>
              Este sistema fue su 'venganza silenciosa'. Durante años, lo usó para su propio beneficio. Ahora, ha decidido liberarlo para democratizar la riqueza y darle a la gente común la misma ventaja que tienen los titanes de las finanzas. Es su forma de nivelar el campo de juego.
            </span>
          </motion.div>
          <div className="premium-glass bg-gradient-to-r from-gray-800/50 to-gray-900/50 p-8 rounded-2xl border border-yellow-500/20 mt-12">
            <p className="text-2xl font-light text-yellow-400 mb-4 italic">
              "No estás comprando un curso. Estás uniéndote a una revolución silenciosa."
            </p>
            <p className="text-yellow-400 font-bold">
              Esta es tu única oportunidad de acceder a una herramienta que, hasta ahora, era el secreto mejor guardado de un genio de las finanzas.
            </p>
          </div>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Storytelling;