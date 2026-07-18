import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Download,
  Globe2,
  Instagram,
  Linkedin,
  MoveRight,
  Quote,
} from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { MagneticButton } from "@/components/magnetic-button";
import { ProductRender } from "@/components/product-render";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";
import { benefits, brand, principles, products, trustItems, workflow } from "@/data/site";

export default function HomePage() {
  return (
    <main id="top">
      <SiteHeader />

      <section className="hero section-grid" aria-labelledby="hero-title">
        <div className="hero-noise" />
        <div className="container-wide hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="eyebrow"><span />{brand.descriptor}</div>
            </Reveal>
            <Reveal delay={80}>
              <h1 id="hero-title">Precision<br />You Can <em>Feel.</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-intro">
                A considered collection of endodontic technologies designed to support controlled,
                efficient, and modern clinical workflows.
              </p>
            </Reveal>
            <Reveal delay={220} className="hero-actions">
              <MagneticButton href="#products" variant="solid">
                Explore the Collection <ArrowRight size={17} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="text">
                Request a Demonstration <ArrowUpRight size={16} />
              </MagneticButton>
            </Reveal>
            <Reveal delay={300} className="hero-meta">
              <div><b>04</b><span>Integrated products</span></div>
              <div><b>EU</b><span>European design direction</span></div>
              <div><b>01</b><span>Coherent workflow</span></div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hero-visual-wrap">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <ProductRender
              variant="activator"
              annotation="Precision-Controlled Activation"
              className="hero-product"
            />
            <div className="hero-product-caption">
              <span>01 / 04</span>
              <p>dp A1 Pro</p>
            </div>
          </Reveal>
        </div>
        <a href="#collection-overview" className="scroll-cue" aria-label="Scroll to collection overview">
          <span>Scroll to explore</span><ArrowDown size={16} />
        </a>
      </section>

      <section id="collection-overview" className="overview-section">
        <div className="container-wide">
          <Reveal className="section-heading split-heading">
            <div>
              <span className="section-index">Collection / 2026</span>
              <h2>Four instruments.<br />One composed system.</h2>
            </div>
            <p>
              Each product is presented in the same dark studio language as the DP A1 Pro image,
              ready for approved assets and technical data.
            </p>
          </Reveal>

          <div className="overview-grid">
            {products.map((product, index) => (
              <Reveal key={product.key} delay={index * 70} className="overview-card">
                <div className="overview-card-top">
                  <span>{product.category}</span><b>{product.number}</b>
                </div>
                <ProductRender variant={product.key} compact />
                <div className="overview-card-copy">
                  <h3>{product.name}</h3>
                  <p>{product.overview}</p>
                  <div className="overview-reveal">
                    <span>{product.features[0]}</span>
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="products-editorial">
        <div className="container-wide products-intro">
          <Reveal>
            <div className="eyebrow"><span />Product collection</div>
            <h2>Built around the<br />clinical sequence.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              A flexible editorial structure for presenting approved product benefits,
              documentation, and specifications without unsupported claims.
            </p>
          </Reveal>
        </div>

        {products.map((product, index) => (
          <article key={product.key} className={`product-story ${index % 2 ? "is-reversed" : ""}`}>
            <div className="product-story-visual">
              <div className="sticky-product">
                <ProductRender variant={product.key} />
                <div className="technical-coordinate coordinate-a">X / {12 + index * 7}.0</div>
                <div className="technical-coordinate coordinate-b">REF. {product.number}-A</div>
              </div>
            </div>
            <div className="product-story-copy">
              <Reveal>
                <div className="product-number">{product.number}</div>
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}><span />{feature}</li>
                  ))}
                </ul>
                <div className="product-story-actions">
                  <MagneticButton href="#contact" variant="outline">
                    View Product <ArrowUpRight size={16} />
                  </MagneticButton>
                  <a href="#resources" className="spec-link">
                    Technical specifications <MoveRight size={17} />
                  </a>
                </div>
                <div className="spec-strip">
                  {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </section>

      <section id="technology" className="engineering-section section-grid">
        <div className="engineering-lines" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="container-wide">
          <Reveal className="engineering-heading">
            <span className="section-index">European engineering / placeholder narrative</span>
            <h2>Engineered Around<br />Every Detail.</h2>
            <p>
              A visual language of disciplined geometry, resolved interfaces, and material contrast.
              Replace this narrative with validated engineering and quality information.
            </p>
          </Reveal>

          <div className="engineering-layout">
            <Reveal className="detail-visual">
              <div className="detail-ring ring-one" />
              <div className="detail-ring ring-two" />
              <div className="detail-measure measure-x">42.0 <small>mm*</small></div>
              <div className="detail-measure measure-y">Ø 18.5*</div>
              <ProductRender variant="motor" />
              <span className="placeholder-mark">* Editable placeholder measurement</span>
            </Reveal>

            <div className="principles-list">
              {principles.map((principle, index) => {
                const Icon = principle.icon;
                return (
                  <Reveal key={principle.title} delay={index * 80} className="principle-row">
                    <div className="principle-icon"><Icon size={20} strokeWidth={1.5} /></div>
                    <div><span>0{index + 1}</span><h3>{principle.title}</h3></div>
                    <p>{principle.text}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="workflow-section">
        <div className="container-wide">
          <Reveal className="section-heading split-heading">
            <div>
              <span className="section-index">Integrated workflow</span>
              <h2>From location<br />to completion.</h2>
            </div>
            <p>
              A clear four-step framework shows how the collection may be positioned within an
              endodontic workflow. Final copy should align with approved indications and instructions for use.
            </p>
          </Reveal>

          <div className="workflow-track">
            <div className="workflow-line"><i /></div>
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100} className="workflow-step">
                  <div className="workflow-node"><span>{item.step}</span></div>
                  <ProductRender variant={item.key} compact />
                  <div className="workflow-title"><Icon size={18} strokeWidth={1.5} /><h3>{item.title}</h3></div>
                  <b>{item.product}</b>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container-wide benefits-grid">
          <Reveal className="benefits-heading">
            <span className="section-index">Designed for practice</span>
            <h2>Quiet confidence,<br />at every touchpoint.</h2>
            <p>
              Use this section for verified product and service advantages. All current language is intentionally general.
            </p>
          </Reveal>
          <div className="benefits-list">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Reveal key={benefit.title} delay={index * 55} className="benefit-item">
                  <Icon size={25} strokeWidth={1.25} />
                  <span>0{index + 1}</span>
                  <h3>{benefit.title}</h3>
                  <ChevronRight size={18} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="trust-section section-grid">
        <div className="container-wide">
          <Reveal className="trust-heading">
            <div className="eyebrow"><span />Trust architecture</div>
            <h2>Evidence, service,<br />and responsible clarity.</h2>
            <p>
              All figures, marks, logos, and quotations below are clearly labeled placeholders.
              Replace only with verified, approved information.
            </p>
          </Reveal>

          <div className="trust-grid">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.label} delay={index * 75} className="trust-item">
                  <Icon size={21} strokeWidth={1.4} />
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                  <small>EDITABLE PLACEHOLDER</small>
                </Reveal>
              );
            })}
          </div>

          <div className="logo-placeholder-row" aria-label="Distributor logo placeholders">
            {["DISTRIBUTOR 01", "DISTRIBUTOR 02", "DISTRIBUTOR 03", "DISTRIBUTOR 04", "DISTRIBUTOR 05"].map((logo) => (
              <div key={logo}>{logo}<small>PLACEHOLDER</small></div>
            ))}
          </div>

          <Reveal className="testimonial-card">
            <Quote size={70} strokeWidth={0.8} aria-hidden="true" />
            <blockquote>
              “Insert an approved testimonial describing the clinician’s experience with the product,
              service, or workflow. Avoid unverified performance or treatment-outcome claims.”
            </blockquote>
            <div className="testimonial-person">
              <div className="portrait-placeholder"><span>Portrait</span></div>
              <div>
                <b>[Dentist’s name]</b>
                <span>[Professional title] · [Clinic]</span>
                <small>[Country] — EDITABLE PLACEHOLDER</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="resources" className="resources-section">
        <div className="container-wide resource-grid">
          <Reveal>
            <span className="section-index">Clinical resources</span>
            <h2>Documentation,<br />clearly organized.</h2>
          </Reveal>
          <div className="resource-links">
            {[
              ["Product catalogue", "Editable PDF placeholder", Download],
              ["Instructions for use", "Add approved document links", ArrowUpRight],
              ["Technical specifications", "Replace placeholder data", ArrowUpRight],
              ["Distributor resources", "Authorized access placeholder", ArrowUpRight],
            ].map(([title, note, Icon]) => {
              const ResourceIcon = Icon as typeof Download;
              return (
                <a href="#contact" key={String(title)} className="resource-link">
                  <div><b>{String(title)}</b><span>{String(note)}</span></div>
                  <ResourceIcon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="final-cta">
        <div className="oversized-gold" aria-hidden="true">PRECISION</div>
        <div className="container-wide final-grid">
          <Reveal className="final-copy">
            <div className="eyebrow dark"><span />Start a conversation</div>
            <h2>Bring Greater Precision<br />to Your Practice.</h2>
            <p>
              Request a tailored product presentation or receive the editable collection catalogue.
            </p>
            <div className="final-buttons">
              <MagneticButton href="#demo-form" variant="solid">Request a Demonstration</MagneticButton>
              <MagneticButton href="#resources" variant="outline">
                Download the Product Catalogue <Download size={16} />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={100} className="form-panel">
            <div className="form-panel-heading">
              <span>Demonstration request</span><b>01—06</b>
            </div>
            <div id="demo-form"><ContactForm /></div>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container-wide footer-grid">
          <div className="footer-brand">
            <div className="wordmark footer-wordmark">
              <span>dp</span><div><b>{brand.shortName}</b><small>DENTAL TECHNOLOGIES</small></div>
            </div>
            <p>
              Premium placeholder website concept for an endodontic technology brand.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <FooterColumn title="Products" links={products.map((product) => product.name)} />
          <FooterColumn title="Resources" links={["Clinical resources", "Product catalogue", "Distributor portal", "Support"]} />
          <FooterColumn title="Company" links={["Technology", "About", "Contact", "Careers"]} />

          <div className="footer-contact">
            <span>Contact</span>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
            <p>{brand.address}</p>
          </div>
        </div>

        <div className="container-wide footer-bottom">
          <div>
            <span>© {new Date().getFullYear()} {brand.name}</span>
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
            <a href="#">Medical device disclaimer</a>
          </div>
          <button type="button"><Globe2 size={16} /> Europe / English <ChevronRight size={15} /></button>
        </div>
        <div className="disclaimer container-wide">
          Website content, product names, specifications, regulatory statements, metrics, logos, and testimonials are editable placeholders.
          This concept does not make medical claims and is not a substitute for approved labeling or instructions for use.
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div className="footer-column">
      <span>{title}</span>
      {links.map((link) => <a key={link} href="#">{link}</a>)}
    </div>
  );
}
