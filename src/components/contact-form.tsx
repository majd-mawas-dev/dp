import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { products } from "@/data/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="form-grid">
        <label>
          <span>Your name</span>
          <input required name="name" autoComplete="name" placeholder="Dr. or team contact" />
        </label>
        <label>
          <span>Clinic name</span>
          <input required name="clinic" autoComplete="organization" placeholder="Practice or distributor" />
        </label>
        <label>
          <span>Email address</span>
          <input required name="email" type="email" autoComplete="email" placeholder="name@practice.com" />
        </label>
        <label>
          <span>Country</span>
          <input required name="country" autoComplete="country-name" placeholder="Country" />
        </label>
        <label className="form-wide">
          <span>Product of interest</span>
          <select name="product" defaultValue="">
            <option value="" disabled>Choose a product</option>
            {products.map((product) => <option key={product.key}>{product.name}</option>)}
          </select>
        </label>
        <label className="form-wide">
          <span>Clinical needs</span>
          <textarea name="message" rows={4} placeholder="Tell us what you want to evaluate, compare, or introduce." />
        </label>
      </div>
      <button className="submit-button" type="submit">
        <span>{sent ? "Consultation request received" : "Send consultation request"}</span>
        {sent ? <Check size={18} /> : <ArrowUpRight size={18} />}
      </button>
      <p className="form-note">
        We will use these details to prepare the right product information for your clinic or distribution team.
      </p>
    </form>
  );
}
