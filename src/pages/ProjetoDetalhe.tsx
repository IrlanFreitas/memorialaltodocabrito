import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, CheckCircle, Loader, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { useProjetoDetalhe } from "../hooks/useProjetos";

export default function ProjetoDetalhe() {
  const { id } = useParams();
  const { data: projeto, isLoading } = useProjetoDetalhe(id ?? "");

  if (isLoading) {
    return (
      <div
        style={{
          backgroundColor: "var(--preto)",
          minHeight: "100vh",
          paddingTop: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p
          style={{
            color: "var(--laranja)",
            fontFamily: "var(--font-primary)",
            fontSize: "16px",
          }}
        >
          Carregando...
        </p>
      </div>
    );
  }

  if (!projeto) {
    return (
      <div
        style={{
          backgroundColor: "var(--preto)",
          minHeight: "100vh",
          paddingTop: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "var(--white)",
            fontFamily: "var(--font-primary)",
          }}
        >
          Projeto não encontrado
        </p>
        <Link
          to="/projetos"
          style={{
            color: "var(--laranja)",
            textDecoration: "none",
            fontSize: "14px",
            fontFamily: "var(--font-primary)",
            fontWeight: 600,
          }}
        >
          ← Voltar para Projetos
        </Link>
      </div>
    );
  }

  const img =
    projeto._embedded?.["wp:featuredmedia"]?.[0]?.source_url ??
    projeto.acf.imagem_capa?.url ??
    "";
  const galeria = (projeto.acf.galeria ?? []).map((g) => g.url).filter(Boolean);
  const nomeParceiros = (projeto.acf.parceiros ?? []).map((p) => p.nome);

  return (
    <div
      style={{
        backgroundColor: "var(--preto)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
    >
      <div
        style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 16px" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ marginBottom: "32px" }}
        >
          <Link
            to="/projetos"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              color: "var(--cinza-medio)",
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "var(--font-primary)",
              fontWeight: 500,
              transition: "color 200ms",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--laranja)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--cinza-medio)")
            }
          >
            <ArrowLeft size={16} />
            Projetos
          </Link>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            borderRadius: "var(--radius-xl)",
            overflow: "hidden",
            marginBottom: "32px",
            aspectRatio: "16/9",
          }}
        >
          <ImageWithFallback
            src={img}
            alt={projeto.title.rendered}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "4px",
                fontSize: "12px",
                fontWeight: 700,
                color:
                  projeto.acf.status === "ativo" ? "var(--laranja)" : "#22c55e",
                fontFamily: "var(--font-primary)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              {projeto.acf.status === "concluido" ? (
                <CheckCircle size={12} />
              ) : (
                <Loader size={12} />
              )}
              {projeto.acf.status === "ativo"
                ? "Em andamento"
                : projeto.acf.status === "concluido"
                  ? "Concluído"
                  : "Pausado"}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "var(--cinza-medio)",
              }}
            >
              <Calendar size={12} />
              <span
                style={{ fontSize: "13px", fontFamily: "var(--font-primary)" }}
              >
                Desde {projeto.acf.ano_inicio}
              </span>
            </div>
          </div>

          <h1
            className="text-section"
            style={{ color: "var(--white)", marginBottom: "20px" }}
          >
            {projeto.title.rendered}
          </h1>

          <p
            className="text-body"
            style={{
              color: "var(--cinza-texto)",
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
            dangerouslySetInnerHTML={{
              __html: projeto.acf.descricao_completa || projeto.acf.resumo,
            }}
          />

          {/* Partners
          <div
            style={{
              padding: '24px',
              backgroundColor: 'var(--preto-card)',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--cinza-borda)',
            }}
          >
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '11px',
                fontWeight: 700,
                color: 'var(--laranja)',
                fontFamily: 'var(--font-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '14px',
              }}
            >
              <Users size={14} />
              Parceiros deste projeto
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {nomeParceiros.map((p) => (
                <span
                  key={p}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(255,157,0,0.1)',
                    border: '1px solid rgba(255,157,0,0.3)',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: 'var(--laranja)',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div> */}

          {/* Gallery */}
          {galeria.length > 0 && (
            <div style={{ marginTop: "32px" }}>
              <h2
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "var(--laranja)",
                  fontFamily: "var(--font-primary)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}
              >
                Galeria
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                }}
              >
                {galeria.map((gImg, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: "var(--radius-md)",
                      overflow: "hidden",
                      aspectRatio: "4/3",
                    }}
                  >
                    <ImageWithFallback
                      src={gImg}
                      alt={`Galeria ${i + 1}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
