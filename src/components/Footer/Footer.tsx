import { Link } from "react-router";
import { Instagram, Youtube, MapPin, Mail, ExternalLink } from "lucide-react";
import { useOpcoes } from "../../hooks/useOpcoes";
import s from "./Footer.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();
  const { data } = useOpcoes();
  const parceiros = data?.parceiros ?? [];
  const instagramUrl =
    data?.instagram_url || "https://www.instagram.com/grupocomunitarioac/";
  const youtubeUrl = data?.youtube_url || "https://youtube.com";
  const email = data?.email || "contato@memorialaltodocabrito.org";
  const endereco = data?.endereco || "Alto do Cabrito, Salvador, Bahia, Brasil";

  return (
    <footer className={s.footer}>
      <div className={s.container}>
        {/* Main grid — 4 colunas desktop / 1 coluna mobile */}
        <div className={s.grid}>
          {/* Col 1: Sobre */}
          <div className={s.about}>
            <h3 className={s.colTitle}>
              Memorial
              <br />
              Alto do Cabrito
            </h3>
            <p>
              Um espaço para preservar e celebrar a história da comunidade do
              Alto do Cabrito, Salvador, Bahia.
            </p>
            <div className={s.socials}>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram do Memorial"
                className={s.socialBtn}
              >
                <Instagram size={18} />
              </a>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube do Memorial"
                className={s.socialBtn}
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Explorar */}
          <div>
            <h4 className={s.label}>Explorar</h4>
            <ul className={s.navList}>
              {[
                { to: "/historia", label: "Nossa História" },
                { to: "/acervo", label: "Acervo Digital" },
                { to: "/figuras-notaveis", label: "Figuras Notáveis" },
                { to: "/midia", label: "Mídia" },
                { to: "/projetos", label: "Projetos" },
                { to: "/noticias", label: "Notícias" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={s.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Institucional */}
          <div>
            <h4 className={s.label}>Institucional</h4>
            <ul className={s.navList}>
              {[
                { to: "/sobre", label: "Quem Somos" },
                { to: "/projetos", label: "Projetos Realizados" },
                { to: "/acervo", label: "Contribuir com o Acervo" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className={s.navLink}>
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://pinacoteca.org.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={s.navLink}
                >
                  Pinacoteca (inspiração)
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div>
            <h4 className={s.label}>Contato</h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div className={s.contactItem}>
                <MapPin size={16} />
                <span>{endereco}</span>
              </div>
              <div className={s.contactItem}>
                <Mail size={16} />
                <a href={`mailto:${email}`} className={s.contactLink}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={s.divider} />

        {/* Parceiros */}
        {parceiros.length > 0 && (
          <div>
            <p className={s.partnersLabel}>Parceiros & Apoiadores</p>
            <div className={s.partnersGrid}>
              {parceiros.map((p: { nome: string; url?: string }, i: number) => (
                <div
                  key={p.url || p.nome || i}
                  title={p.nome}
                  className={s.partnerCard}
                >
                  <span>{p.nome}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom bar */}
        <div className={s.bottomBar}>
          <p className={s.bottomText}>
            © {year} Memorial Alto do Cabrito. Todos os direitos reservados.
          </p>
          <p className={s.bottomText}>
            &#128394; por <a href="https://www.instagram.com/_hirlab/" target="_blank" rel="noopener noreferrer">@_hirlab</a>
          </p>
          <p className={s.bottomText}>Salvador, Bahia, Brasil</p>
        </div>
      </div>
    </footer>
  );
}
