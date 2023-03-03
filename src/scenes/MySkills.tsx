import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="Skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MIS <span className="text-red">HABILIDADES</span> &{" "}
            <span className="text-red">EXPERIENCIA</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            He trabajado en la industria ecuatoriana de alimentos como asistente
            y analista de calidad, tengo varias certificaciones en BPM, así como
            experiencia en la aplicación de normas ISO
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                src="../assets/ingenieria.jpg"
                alt="ingenieria"
                className="max-w-[600px]"
              />
            </div>
          ) : (
            <div className="flex justify-center">
              <img src="../assets/ingenieria.jpg" alt="ingenieria" />
            </div>
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="flex flex-col md:flex-row md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 ">
                Experiencia
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-1" />
            <p className="mt-8">
              He trabajado como analista de calidad en la empresa Vaco y Vaca en
              Quito - Ecuador desde el 2021. Aquí he demostrado mi capacidad y
              calidad de mi trabajo
            </p>
          </div>
        </motion.div>
        {/* TECHNOLOGIES */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Educación
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-1" />
            <p className="mt-8">
              Me gradué de ingeniera industrial en 2023 en la Universida UTE. He
              tomado varios cursos y certificaciones de aseguramiento de la
              calidad y aplicación de normas ISO.
            </p>
          </div>
        </motion.div>
        {/* SOFT SKILLS */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="relative z-10">
              <p className="font-playfair font-semibold text-5xl ">03</p>
              <p className="font-playfair font-semibold text-2xl mt-3">
                Hablilidades blandas
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-1" />
            <p className="mt-8">
              Tengo una gran capacidad para comunicarme con claridad y eficacia.
              Poseo un alto nivel de inteligencia emocional, lo que me permite
              manejar conflictos de manera constructiva y trabajar de manera
              colaborativa
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
