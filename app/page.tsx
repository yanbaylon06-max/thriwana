export default function Home() {
  return (
    <main className="min-h-screen" style={{backgroundColor: '#f5f0eb', fontFamily: 'Georgia, serif'}}>
      {/* Nav */}
      <nav style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', backgroundColor: '#f5f0eb'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
            <polygon points="20,4 36,34 4,34" stroke="#b8960c" strokeWidth="2.5" fill="none"/>
            <polygon points="20,12 30,30 10,30" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
          </svg>
          <span style={{fontSize: '15px', letterSpacing: '4px', color: '#2c2c2c'}}>THRIWANA</span>
        </div>
        <button style={{fontSize: '22px', background: 'none', border: 'none', cursor: 'pointer'}}>☰</button>
      </nav>

      {/* Hero */}
      <section style={{padding: '60px 24px 40px', textAlign: 'center'}}>
        <h1 style={{fontSize: '38px', fontWeight: '300', color: '#2c2c2c', lineHeight: '1.3', marginBottom: '16px'}}>
          Handcrafted in Sri Lanka
        </h1>
        <p style={{color: '#888', fontSize: '15px', marginBottom: '32px', letterSpacing: '1px'}}>
          Small batches · Local textiles · Women artisans
        </p>
        <a href="#collection" style={{backgroundColor: '#2c2c2c', color: '#fff', padding: '14px 36px', textDecoration: 'none', fontSize: '13px', letterSpacing: '2px'}}>
          DISCOVER THE COLLECTION
        </a>
      </section>

      {/* Hero Image */}
      <div style={{width: '100%', height: '420px', backgroundColor: '#d9d4ce', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{color: '#999', fontSize: '14px', letterSpacing: '2px'}}>PRODUCT PHOTO</span>
      </div>

      {/* Collection */}
      <section id="collection" style={{padding: '64px 24px'}}>
        <h2 style={{fontSize: '32px', fontWeight: '300', textAlign: 'center', color: '#2c2c2c', marginBottom: '8px'}}>The Collection</h2>
        <p style={{textAlign: 'center', color: '#888', marginBottom: '48px', fontSize: '14px'}}>Limited batch. Locally crafted. Each piece unique.</p>
        <div style={{maxWidth: '480px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px'}}>
          {/* Product 1 */}
          <div style={{backgroundColor: '#fff', padding: '16px'}}>
            <div style={{width: '100%', height: '300px', backgroundColor: '#e8e4df', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
              <span style={{color: '#aaa', fontSize: '13px', letterSpacing: '2px'}}>PRODUCT PHOTO</span>
            </div>
            <h3 style={{fontWeight: '300', fontSize: '17px', color: '#2c2c2c', marginBottom: '4px'}}>Olive Geometric</h3>
            <p style={{color: '#aaa', fontSize: '13px', marginBottom: '8px'}}>Hand-block printed · Limited batch</p>
            <p style={{color: '#b8960c', fontSize: '16px', marginBottom: '12px'}}>€85</p>
            <button style={{width: '100%', border: '1px solid #ccc', padding: '10px', backgroundColor: 'transparent', fontSize: '13px', letterSpacing: '1px', cursor: 'pointer'}}>
              VIEW DETAILS
            </button>
          </div>
          {/* Product 2 */}
          <div style={{backgroundColor: '#fff', padding: '16px'}}>
            <div style={{width: '100%', height: '300px', backgroundColor: '#e8e4df', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'}}>
              <span style={{color: '#aaa', fontSize: '13px', letterSpacing: '2px'}}>PRODUCT PHOTO</span>
            </div>
            <h3 style={{fontWeight: '300', fontSize: '17px', color: '#2c2c2c', marginBottom: '4px'}}>Rust Stripe</h3>
            <p style={{color: '#aaa', fontSize: '13px', marginBottom: '8px'}}>Hand-block printed · Limited batch</p>
            <p style={{color: '#b8960c', fontSize: '16px', marginBottom: '12px'}}>€85</p>
            <button style={{width: '100%', border: '1px solid #ccc', padding: '10px', backgroundColor: 'transparent', fontSize: '13px', letterSpacing: '1px', cursor: 'pointer'}}>
              VIEW DETAILS
            </button>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{padding: '64px 24px', textAlign: 'center', backgroundColor: '#fff'}}>
        <h2 style={{fontSize: '32px', fontWeight: '300', color: '#2c2c2c', marginBottom: '24px'}}>The Story</h2>
        <p style={{color: '#888', marginBottom: '16px', lineHeight: '1.8', maxWidth: '480px', margin: '0 auto 16px'}}>
          Born in a coastal town. Built on second chances, local craft, and patience.
        </p>
        <p style={{color: '#888', lineHeight: '1.8', maxWidth: '480px', margin: '0 auto 16px'}}>
          Each piece is made in small batches using Sri Lankan textiles, working with family workshops and women artisans in the Arugam Bay area.
        </p>
        <p style={{color: '#aaa', fontStyle: 'italic', marginTop: '24px'}}>
          We believe clothing should carry meaning — not just noise.
        </p>
      </section>

      {/* Footer */}
      <footer style={{padding: '32px 24px', textAlign: 'center', color: '#aaa', fontSize: '12px', letterSpacing: '1px'}}>
        © 2025 THRIWANA. ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}