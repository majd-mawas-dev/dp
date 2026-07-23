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
  const product = products[0];

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
              <h1 id="hero-title">A simpler way<br />to clean root canals.</h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="hero-intro">
                A1 Pro helps dentists activate cleaning liquid during root canal treatment.
                It is easy to hold, easy to set, and made to keep the work simple.
              </p>
            </Reveal>
            <Reveal delay={190} className="hero-badges" aria-label="Product highlights">
              <span>Easy controls</span>
              <span>Comfortable handpiece</span>
              <span>Made for daily use</span>
            </Reveal>
            <Reveal delay={220} className="hero-actions">
              <MagneticButton href="#products" variant="solid">
                See the Product <ArrowRight size={17} />
              </MagneticButton>
              <MagneticButton href="#contact" variant="text">
                Ask for a Demo <ArrowUpRight size={16} />
              </MagneticButton>
            </Reveal>
            <Reveal delay={300} className="hero-meta">
              <div><b>01</b><span>One focused device</span></div>
              <div><b>Easy</b><span>Simple button flow</span></div>
              <div><b>Clean</b><span>Clear everyday setup</span></div>
            </Reveal>
          </div>

          <Reveal delay={120} className="hero-visual-wrap">
            <div className="hero-orbit hero-orbit-one" />
            <div className="hero-orbit hero-orbit-two" />
            <ProductRender
              variant="activator"
              image="hero"
              annotation="Root Canal Irrigation Support"
              className="hero-product"
            />
            <div className="hero-product-caption">
              <span>01 / 01</span>
              <p>{product.shortName}</p>
            </div>
          </Reveal>
        </div>
        <a href="#collection-overview" className="scroll-cue" aria-label="Scroll to collection overview">
          <span>See more</span><ArrowDown size={16} />
        </a>
      </section>

      <section id="collection-overview" className="overview-section">
        <div className="container-wide">
          <Reveal className="section-heading split-heading">
            <div>
              <span className="section-index">The product</span>
              <h2>One small device<br />with a clear job.</h2>
            </div>
            <p>
              A1 Pro is made to help with irrigation during root canal treatment.
              The page keeps the details simple so your team can decide if it fits.
            </p>
          </Reveal>

          <div className="overview-grid overview-grid-single">
            <Reveal className="overview-card">
              <div className="overview-card-top">
                <span>{product.category}</span><b>{product.number}</b>
              </div>
              <ProductRender variant={product.key} image="closeup" compact />
              <div className="overview-card-copy">
                <h3>{product.name}</h3>
                <p>{product.overview}</p>
                <div className="overview-reveal">
                  <span>{product.features[0]}</span>
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </Reveal>
            <Reveal delay={90} className="overview-summary">
              {product.specs.map((spec, index) => (
                <div key={spec}>
                  <span>0{index + 1}</span>
                  <strong>{spec}</strong>
                  <p>{product.features[index]}</p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section id="products" className="products-editorial">
        <div className="container-wide products-intro">
          <Reveal>
            <div className="eyebrow"><span />Product focus</div>
            <h2>Easy to hold.<br />Easy to use.</h2>
          </Reveal>
          <Reveal delay={100}>
            <p>
              A1 Pro keeps the main choices close at hand, so the dentist can focus on the
              treatment instead of the device.
            </p>
          </Reveal>
        </div>

        <article className="product-story">
          <div className="product-story-visual">
            <div className="sticky-product">
              <ProductRender variant={product.key} image="studio" />
              <div className="technical-coordinate coordinate-a">X / 12.0</div>
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
                  Ask About This Product <ArrowUpRight size={16} />
                </MagneticButton>
                <a href="#resources" className="spec-link">
                  View details <MoveRight size={17} />
                </a>
              </div>
              <div className="spec-strip">
                {product.specs.map((spec) => <span key={spec}>{spec}</span>)}
              </div>
            </Reveal>
          </div>
        </article>
      </section>

      <section id="technology" className="engineering-section section-grid">
        <div className="engineering-lines" aria-hidden="true">
          <i /><i /><i /><i />
        </div>
        <div className="container-wide">
          <Reveal className="engineering-heading">
            <span className="section-index">How it helps</span>
            <h2>Simple details<br />that make work easier.</h2>
            <p>
              The grip, controls, and accessories are arranged to feel natural during a busy
              dental appointment.
            </p>
          </Reveal>

          <div className="engineering-layout">
            <Reveal className="detail-visual">
              <div className="detail-ring ring-one" />
              <div className="detail-ring ring-two" />
              <div className="detail-measure measure-x">42.0 <small>mm*</small></div>
              <div className="detail-measure measure-y">18.5 mm*</div>
              <ProductRender variant={product.key} image="kit" />
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
              <span className="section-index">Daily workflow</span>
              <h2>Three simple steps.</h2>
            </div>
            <p>
              Choose a setting, place the tip, and activate. The device is built around that
              straightforward routine.
            </p>
          </Reveal>

          <div className="workflow-track">
            <div className="workflow-line"><i /></div>
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100} className="workflow-step">
                  <div className="workflow-node"><span>{item.step}</span></div>
                  <ProductRender
                    variant={item.key}
                    image={index === 0 ? "closeup" : index === 1 ? "studio" : "kit"}
                    compact
                  />
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
            <span className="section-index">Why teams like it</span>
            <h2>Simple to add<br />to the clinic.</h2>
            <p>
              Clear controls and organized accessories make A1 Pro easier to introduce,
              explain, and use during everyday appointments.
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
            <div className="eyebrow"><span />Support</div>
            <h2>Clear information<br />when your team needs it.</h2>
            <p>
              We keep product details, training notes, and support information easy to find
              before your clinic makes a decision.
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
              "A good dental device should be easy to understand from the first setup:
              clear controls, useful information, and support when the team needs it."
            </blockquote>
            <div className="testimonial-person">
              <div className="portrait-placeholder"><span>Clinic</span></div>
              <div>
                <b>Clinic workflow insight</b>
                <span>Dental team review</span>
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
            <h2>Useful details<br />in one place.</h2>
          </Reveal>
          <div className="resource-links">
            {[
              ["Product catalogue", "See the main A1 Pro details", Download],
              ["Instructions for use", "Review cleaning, care, and use documents", ArrowUpRight],
              ["Technical details", "Check device settings and accessories", ArrowUpRight],
              ["Distributor support", "Ask about training, service, and availability", ArrowUpRight],
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
            <h2>Want to see<br />if A1 Pro fits?</h2>
            <p>
              Tell us about your clinic and we will send the right product details,
              answer questions, or help arrange a demo.
            </p>
            <div className="final-buttons">
              <MagneticButton href="#demo-form" variant="solid">Ask for a Demo</MagneticButton>
              <MagneticButton href="#resources" variant="outline">
                View Resources <Download size={16} />
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={100} className="form-panel">
            <div className="form-panel-heading">
              <span>Product question</span><b>01-06</b>
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
              Dental technology that helps clinics keep root canal irrigation simple and organized.
            </p>
            <div className="socials">
              <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
            </div>
          </div>

          <FooterColumn title="Products" links={products.map((product) => product.name)} />
          <FooterColumn title="Resources" links={["Product resources", "Catalogue", "Support", "Service"]} />
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
