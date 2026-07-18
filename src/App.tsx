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
              <h1 id="hero-title">Endodontic Care,<br />Made <em>Clear.</em></h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-intro">
                A refined dental technology collection that helps clinicians move from diagnosis
                to irrigation with clear controls, balanced handling, and a calm chairside workflow.
              </p>
            </Reveal>
            <Reveal delay={220} className="hero-actions">
              <MagneticButton href="#products" variant="solid">
                Explore Products <ArrowRight size={17} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="text">
                Book a Demo <ArrowUpRight size={16} />
              </MagneticButton>
            </Reveal>
            <Reveal delay={300} className="hero-meta">
              <div><b>04</b><span>Core treatment devices</span></div>
              <div><b>EU</b><span>Design-led engineering</span></div>
              <div><b>01</b><span>Connected clinical flow</span></div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hero-visual-wrap">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <ProductRender
              variant="activator"
              annotation="Controlled Irrigant Activation"
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
              <span className="section-index">Product system</span>
              <h2>Focused tools for<br />modern endodontics.</h2>
            </div>
            <p>
              Every device has a clear place in the treatment flow, helping teams compare purpose,
              handling, setup, and support without unnecessary complexity.
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
            <div className="eyebrow"><span />Clinical product line</div>
            <h2>Designed for the way<br />endodontists work.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Clear product stories make it easier to understand what each device does, where it
              fits, and how it supports a more organized operatory.
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
                    Discuss This Product <ArrowUpRight size={16} />
                  </MagneticButton>
                  <a href="#resources" className="spec-link">
                    Review specifications <MoveRight size={17} />
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
            <span className="section-index">Engineering approach</span>
            <h2>Quiet details.<br />Better control.</h2>
            <p>
              From display contrast to handpiece balance, every interaction is shaped to reduce
              friction and keep attention on the procedure.
            </p>
          </Reveal>

          <div className="engineering-layout">
            <Reveal className="detail-visual">
              <div className="detail-ring ring-one" />
              <div className="detail-ring ring-two" />
              <div className="detail-measure measure-x">42.0 <small>mm*</small></div>
              <div className="detail-measure measure-y">18.5 mm*</div>
              <ProductRender variant="motor" />
              <span className="placeholder-mark">* Confirm final measurements before publication</span>
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
              <span className="section-index">Treatment workflow</span>
              <h2>One sequence,<br />clearly supported.</h2>
            </div>
            <p>
              The product line follows the clinical rhythm of endodontic care, from locating and
              preparation through activation and irrigation support.
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
            <span className="section-index">Practice advantages</span>
            <h2>Simple to adopt.<br />Refined in use.</h2>
            <p>
              Clean controls, thoughtful ergonomics, and organized accessories help dental teams
              evaluate, introduce, and use the collection with confidence.
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
            <div className="eyebrow"><span />Professional support</div>
            <h2>Documentation and service,<br />kept straightforward.</h2>
            <p>
              Product information, service resources, and distributor support are structured so
              practices can review each device with clarity before adoption.
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
                  <small>SUPPORT AREA</small>
                </Reveal>
              );
            })}
          </div>

          <div className="logo-placeholder-row" aria-label="Distributor support areas">
            {["TRAINING", "SERVICE", "CATALOGUE", "COMPLIANCE", "DISTRIBUTION"].map((logo) => (
              <div key={logo}>{logo}<small>SUPPORT AREA</small></div>
            ))}
          </div>

          <Reveal className="testimonial-card">
            <Quote size={70} strokeWidth={0.8} aria-hidden="true" />
            <blockquote>
              "A strong endodontic system should feel organized from the first setup:
              clear information, intuitive controls, and instruments that support confident care."
            </blockquote>
            <div className="testimonial-person">
              <div className="portrait-placeholder"><span>Clinic</span></div>
              <div>
                <b>Clinical workflow insight</b>
                <span>Endodontic practice review</span>
                <small>Use approved clinician feedback before launch</small>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="resources" className="resources-section">
        <div className="container-wide resource-grid">
          <Reveal>
            <span className="section-index">Product resources</span>
            <h2>Everything teams need<br />to evaluate the line.</h2>
          </Reveal>
          <div className="resource-links">
            {[
              ["Product catalogue", "Explore the full collection and product positioning", Download],
              ["Instructions for use", "Review clinical, cleaning, and care documents", ArrowUpRight],
              ["Technical specifications", "Compare device parameters and accessories", ArrowUpRight],
              ["Distributor support", "Request training, service, and regional guidance", ArrowUpRight],
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
            <div className="eyebrow dark"><span />Talk to our team</div>
            <h2>Find the right setup<br />for your clinic.</h2>
            <p>
              Share your clinical priorities and we will help you review the collection, compare
              options, and prepare the right product information for your team.
            </p>
            <div className="final-buttons">
              <MagneticButton href="#demo-form" variant="solid">Book a Product Demo</MagneticButton>
              <MagneticButton href="#resources" variant="outline">
                View Product Resources <Download size={16} />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={100} className="form-panel">
            <div className="form-panel-heading">
              <span>Product consultation</span><b>01-06</b>
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
              Dental technology for endodontic teams that value clarity, control, and a more organized clinical workflow.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <FooterColumn title="Products" links={products.map((product) => product.name)} />
          <FooterColumn title="Resources" links={["Product resources", "Catalogue", "Distributor support", "Service"]} />
          <FooterColumn title="Company" links={["Technology", "About", "Contact", "Partnerships"]} />

          <div className="footer-contact">
            <span>Contact</span>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
            <p>{brand.address}</p>
          </div>
        </div>

        <div className="container-wide footer-bottom">
          <div>
            <span>(c) {new Date().getFullYear()} {brand.name}</span>
            <a href="#">Privacy policy</a>
            <a href="#">Terms</a>
            <a href="#">Medical device disclaimer</a>
          </div>
          <button type="button"><Globe2 size={16} /> Europe / English <ChevronRight size={15} /></button>
        </div>
        <div className="disclaimer container-wide">
          Product information should be reviewed against approved labeling, regulatory statements, and instructions for use before publication.
          This website does not make treatment-outcome claims and should not replace official product documentation.
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
