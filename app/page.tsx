export default function Home() {
  return (
    <main style={{fontFamily: 'Cormorant Garamond, serif', backgroundColor: '#f5f0e8', color: '#2c2c2c'}}>

      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(245,240,232,0.95)'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,36 2,36" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
            <polygon points="20,10 31,33 9,33" stroke="#b8960c" strokeWidth="1" fill="none"/>
          </svg>
          <span style={{fontSize: '13px', letterSpacing: '6px', color: '#2c2c2c'}}>THRIWANA</span>
        </div>
        <div style={{display: 'flex', gap: '40px'}}>
          <a href="#collection" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>COLLECTION</a>
          <a href="#story" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>STORY</a>
          <a href="#contact" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>CONTACT</a>
        </div>
      </nav>

      <section style={{height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '80px'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.55)'}}></div>
        <div style={{position: 'relative', zIndex: 2, maxWidth: '700px', padding: '0 24px'}}>
          <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>ARUGAM BAY, SRI LANKA</p>
          <h1 style={{fontSize: '64px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.1', marginBottom: '24px'}}>Crafted in Sri Lanka.<br/>Worn Around The World.</h1>
          <p style={{fontSize: '15px', color: '#d4cfc7', lineHeight: '1.8', marginBottom: '48px', fontStyle: 'italic'}}>Small-batch resort wear handcrafted by women artisans<br/>using premium natural fabrics.</p>
          <a href="#collection" style={{backgroundColor: '#b8960c', color: '#f5f0e8', padding: '16px 48px', fontSize: '11px', letterSpacing: '4px', textDecoration: 'none', display: 'inline-block'}}>SHOP COLLECTION</a>
        </div>
      </section>

      <section id="story" style={{padding: '120px 48px', maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>THE STORY</p>
        <h2 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c', lineHeight: '1.2', marginBottom: '40px'}}>Not Fast. Not Mass.<br/>Just Made Well.</h2>
        <p style={{fontSize: '16px', color: '#666', lineHeight: '2', maxWidth: '600px', margin: '0 auto 24px'}}>Thriwana was born in the coastal workshops of Arugam Bay. Every shirt is cut, printed, and finished by hand - by women artisans who have spent years perfecting their craft.</p>
        <p style={{fontSize: '16px', color: '#666', lineHeight: '2', maxWidth: '600px', margin: '0 auto 24px'}}>We work in small batches. We use premium natural fabrics. We never compromise on finish. The result is a shirt that carries the warmth of Sri Lanka wherever you take it.</p>
        <p style={{fontSize: '18px', fontStyle: 'italic', color: '#b8960c', marginTop: '48px'}}>Craftsmanship first. Always.</p>
      </section>

      <section id="collection" style={{padding: '80px 48px', backgroundColor: '#ede8de'}}>
        <div style={{textAlign: 'center', marginBottom: '64px'}}>
          <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '16px'}}>THE COLLECTION</p>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c'}}>Current Season</h2>
          <p style={{fontSize: '13px', letterSpacing: '2px', color: '#888', marginTop: '12px'}}>SMALL BATCH - LIMITED PIECES</p>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px', maxWidth: '1000px', margin: '0 auto'}}>
          {[
            {name: 'The Arugam', desc: 'Black and white triangle block print. Woven from breathable cotton. Made for the coast.'},
            {name: 'The Cinnamon Coast', desc: 'Deep red and charcoal stripe. Hand-blocked with natural dyes. Worn open or buttoned.'},
            {name: 'The Temple Wave', desc: 'Grey wave pattern on ivory cotton. Subtle. Refined. Built for warm evenings.'},
            {name: 'The Ocean Road', desc: 'Sunlit multi-colour print on sand linen. Relaxed fit. Coconut buttons.'},
          ].map((product, i) => (
            <div key={i} style={{backgroundColor: '#f5f0e8'}}>
              <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: `${i === 0 ? '12%' : i === 1 ? '38%' : i === 2 ? '62%' : '88%'} 60%`}}></div>
              <div style={{padding: '28px 24px'}}>
                <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>{product.name}</h3>
                <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>{product.desc}</p>
                <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
                <a href="#contact" style={{display: 'block', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', textDecoration: 'none'}}>ENQUIRE TO ORDER</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding: '120px 48px', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '16px'}}>WHY THRIWANA</p>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c'}}>Built Different.</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px'}}>
          {[
            {title: 'Premium Natural Fabrics', body: 'Breathable cotton and linen. Sourced for quality, not cost.'},
            {title: 'Small-Batch Production', body: 'Never mass produced. Every run is limited. Every piece intentional.'},
            {title: 'Women-Led Craftsmanship', body: 'Made by skilled women artisans in Arugam Bay, Sri Lanka.'},
            {title: 'Designed for Tropical Living', body: 'Resort-ready. Travel-proof. Built for people who move.'},
          ].map((item, i) => (
            <div key={i} style={{borderTop: '1px solid #d4cfc7', paddingTop: '32px'}}>
              <h3 style={{fontSize: '20px', fontWeight: '300', color: '#2c2c2c', marginBottom: '12px'}}>{item.title}</h3>
              <p style={{fontSize: '14px', color: '#888', lineHeight: '1.8'}}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{padding: '120px 48px', backgroundColor: '#2c2c2c', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>OWN A PIECE OF SRI LANKA</p>
        <h2 style={{fontSize: '56px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.2', marginBottom: '48px'}}>Ready to order?</h2>
        <a href="#contact" style={{backgroundColor: '#b8960c', color: '#f5f0e8', padding: '18px 56px', fontSize: '11px', letterSpacing: '4px', textDecoration: 'none', display: 'inline-block'}}>SHOP COLLECTION</a>
      </section>

      <footer id="contact" style={{padding: '64px 48px', backgroundColor: '#1a1a1a', textAlign: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginBottom: '32px'}}>
          <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
            <polygon points="20,2 38,36 2,36" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
            <polygon points="20,10 31,33 9,33" stroke="#b8960c" strokeWidth="1" fill="none"/>
          </svg>
          <span style={{fontSize: '13px', letterSpacing: '6px', color: '#f5f0e8'}}>THRIWANA</span>
        </div>
        <p style={{fontSize: '13px', color: '#888', marginBottom: '8px', letterSpacing: '1px'}}>hello@thriwana.com</p>
        <p style={{fontSize: '11px', color: '#555', letterSpacing: '2px', marginTop: '32px'}}>HANDCRAFTED IN SRI LANKA</p>
      </footer>

    </main>
  );
}