import React from "react";
import { motion } from "motion/react";
import { Heart, Target, Eye } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BotaoExplore } from "./BotaoExplore";
import { useGrupoComunitario } from "../hooks/useGrupoComunitario";

const FADE_UP = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

const FADE_X = (dir: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: dir === "left" ? -28 : 28 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function GrupoComunitario() {
  const { data } = useGrupoComunitario();
  const descricao = data?.acf.descricao ?? "";
  const missao = data?.acf.missao ?? "";
  const visao = data?.acf.visao ?? "";
  const valores = (data?.acf.valores ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const foto = data?.acf.foto?.url ?? "";

  return (
    <section
      style={{
        backgroundColor: "var(--preto)",
        padding: "2rem 0",
        borderTop: "1px solid var(--cinza-borda)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Section header */}
        <motion.div
          {...FADE_UP()}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          <p
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "var(--laranja)",
              fontFamily: "var(--font-primary)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: "6px",
            }}
          >
            Quem somos
          </p>
          <h2 className="text-section" style={{ color: "var(--white)" }}>
            Grupo Comunitário
          </h2>
        </motion.div>

        {/* Image + description */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            alignItems: "center",
            marginBottom: "1.5rem",
          }}
          className="lg:grid-cols-2"
        >
          <motion.div
            {...FADE_X("left")}
            style={{
              borderRadius: "var(--radius-xl)",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <ImageWithFallback
              src={foto}
              alt="Equipe do Grupo Comunitário Memorial Alto do Cabrito"
              style={{
                width: "100%",
                aspectRatio: "21/9",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,157,0,0.1) 0%, transparent 50%)",
                pointerEvents: "none",
              }}
            />
          </motion.div>

          <motion.div {...FADE_X("right", 0.1)}>
            <p
              style={{
                fontSize: "13px",
                color: "var(--cinza-texto)",
                fontFamily: "var(--font-primary)",
                lineHeight: 1.7,
              }}
            >
              {descricao}
            </p>
          </motion.div>
        </div>

        {/* Missão / Visão / Valores — 3 columns */}
        <div
          style={{
            display: "grid",
            // gridTemplateColumns: '1fr',
            gap: "1rem",
            marginBottom: "1.5rem",
          }}
          className="sm:grid-cols-3"
        >
          {/* Missão */}
          <motion.div
            {...FADE_UP(0.05)}
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--cinza-card-bg)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--cinza-borda)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Target size={26} style={{ color: "var(--laranja)" }} />
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--laranja)",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Missão
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--cinza-texto)",
                fontFamily: "var(--font-primary)",
                lineHeight: 1.55,
              }}
            >
              {missao}
            </p>
          </motion.div>

          {/* Visão */}
          <motion.div
            {...FADE_UP(0.12)}
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--cinza-card-bg)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--cinza-borda)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Eye size={26} style={{ color: "var(--laranja)" }} />
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--laranja)",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Visão
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--cinza-texto)",
                fontFamily: "var(--font-primary)",
                lineHeight: 1.55,
              }}
            >
              {visao}
            </p>
          </motion.div>

          {/* Valores */}
          <motion.div
            {...FADE_UP(0.19)}
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--cinza-card-bg)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--cinza-borda)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Heart size={26} style={{ color: "var(--laranja)" }} />
            <p
              style={{
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--laranja)",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              Valores
            </p>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {valores.map((v) => (
                <li
                  key={v}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "13px",
                    color: "var(--cinza-texto)",
                    fontFamily: "var(--font-primary)",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      borderRadius: "var(--radius-full)",
                      backgroundColor: "var(--laranja)",
                      flexShrink: 0,
                    }}
                  />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Button */}
        <motion.div
          {...FADE_UP(0.25)}
          style={{
            marginTop: "32px",
            maxWidth: "412px",
            margin: "32px auto 0",
          }}
        >
          <BotaoExplore to="/historia/grupo-comunitario" label="conheça o grupo" />
        </motion.div>
      </div>
    </section>
  );
}
