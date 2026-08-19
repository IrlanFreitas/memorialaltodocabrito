import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Heart, Target, Eye, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { BotaoExplore } from "../components/BotaoExplore";
import { useGrupoComunitario } from "../hooks/useGrupoComunitario";

export default function SobrePage() {
  const { data } = useGrupoComunitario();
  const foto = data?.acf.foto?.url ?? "";
  const descricao = data?.acf.descricao ?? "";
  const missao = data?.acf.missao ?? "";
  const visao = data?.acf.visao ?? "";
  const valores = (data?.acf.valores ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const equipeTexto = (data?.acf.equipe_texto ?? "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);
  const equipeFoto = data?.acf.equipe_foto?.url ?? "";

  return (
    <div
      style={{
        backgroundColor: "var(--preto)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      {/* Page header */}
      <div
        style={{
          backgroundColor: "var(--preto-soft)",
          borderBottom: "1px solid var(--cinza-borda)",
          padding: "40px 16px",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--cinza-medio)",
                fontFamily: "var(--font-primary)",
                marginBottom: "8px",
              }}
            >
              <Link
                to="/"
                style={{ color: "var(--cinza-medio)", textDecoration: "none" }}
              >
                Início
              </Link>{" "}
              /{" "}
              <Link
                to="/historia"
                style={{ color: "var(--cinza-medio)", textDecoration: "none" }}
              >
                Nossa História
              </Link>{" "}
              / <span style={{ color: "var(--laranja)" }}>Grupo Comunitário</span>
            </p>
            <h1
              className="text-section"
              style={{ color: "var(--white)", marginBottom: "8px" }}
            >
              Grupo Comunitário
            </h1>
            <p
              className="text-body"
              style={{ color: "var(--cinza-texto)", maxWidth: "480px" }}
            >
              Conheça a equipe e a missão por trás do Memorial Alto do Cabrito.
            </p>
          </motion.div>
        </div>
      </div>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 16px" }}
      >
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            marginBottom: "48px",
            aspectRatio: "21/9",
          }}
        >
          <ImageWithFallback
            src={foto}
            alt="Equipe do Grupo Comunitário"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>

        {/* About text */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            marginBottom: "48px",
          }}
          className="lg:grid-cols-2"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--laranja)",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "12px",
              }}
            >
              Quem somos
            </p>
            <h2
              className="text-section"
              style={{ color: "var(--white)", marginBottom: "16px" }}
            >
              Grupo Comunitário Memorial Alto do Cabrito
            </h2>
            <p
              className="text-body"
              style={{ color: "var(--cinza-texto)", lineHeight: 1.8 }}
            >
              {descricao}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            style={{ display: "flex", gap: "16px" }}
          >
            {/* Missão */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "var(--preto-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--cinza-borda)",
                display: "flex",
                gap: "16px",
              }}
            >
              <Target
                size={22}
                style={{
                  color: "var(--laranja)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--laranja)",
                    fontFamily: "var(--font-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  Missão
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--cinza-texto)",
                    fontFamily: "var(--font-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  {missao}
                </p>
              </div>
            </div>

            {/* Visão */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "var(--preto-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--cinza-borda)",
                display: "flex",
                gap: "16px",
              }}
            >
              <Eye
                size={22}
                style={{
                  color: "var(--laranja)",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              />
              <div>
                <h3
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "var(--laranja)",
                    fontFamily: "var(--font-primary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "8px",
                  }}
                >
                  Visão
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--cinza-texto)",
                    fontFamily: "var(--font-primary)",
                    lineHeight: 1.6,
                  }}
                >
                  {visao}
                </p>
              </div>
            </div>

            {/* Valores */}
            <div
              style={{
                padding: "20px",
                backgroundColor: "var(--preto-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--cinza-borda)",
              }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "11px",
                  fontWeight: 700,
                  color: "var(--laranja)",
                  fontFamily: "var(--font-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "12px",
                }}
              >
                <Heart size={14} />
                Valores
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                {valores.map((v) => (
                  <li
                    key={v}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "14px",
                      color: "var(--cinza-texto)",
                      fontFamily: "var(--font-primary)",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--laranja)",
                        flexShrink: 0,
                      }}
                    />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Nossa Equipe */}
        {(equipeTexto.length > 0 || equipeFoto) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{ marginBottom: "48px" }}
          >
            <p
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--laranja)",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "24px",
              }}
            >
              <Users size={14} />
              Nossa equipe
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "32px",
                alignItems: "start",
              }}
              className="lg:grid-cols-2"
            >
              {equipeFoto && (
                <div
                  style={{
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                >
                  <ImageWithFallback
                    src={equipeFoto}
                    alt="Nossa equipe"
                    style={{
                      width: "100%",
                      height: "auto",
                      // objectFit: "cover",
                      // display: "block",
                    }}
                  />
                </div>
              )}

              {equipeTexto.length > 0 && (
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {equipeTexto.map((linha, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07, duration: 0.4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "14px 16px",
                        backgroundColor: "var(--preto-card)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--cinza-borda)",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "var(--radius-full)",
                          backgroundColor: "var(--laranja)",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "14px",
                          color: "var(--cinza-texto)",
                          fontFamily: "var(--font-primary)",
                          lineHeight: 1.4,
                        }}
                      >
                        {linha}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center" }}
        >
          <p
            style={{
              fontSize: "22px",
              fontWeight: 700,
              color: "var(--white)",
              fontFamily: "var(--font-primary)",
              marginBottom: "24px",
            }}
          >
            Quer contribuir com o memorial?
          </p>
          <div style={{ maxWidth: "340px", margin: "0 auto" }}>
            <BotaoExplore to="/acervo" label="explorar o acervo" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
