'use client';
import { useState } from 'react';

// === SHIRT PRICE IDs ===
const PRICES = {
  arugam: 'price_1Tgd05HZMPMitDH8WjG54ZIi',
  cinnamon: 'price_1Tgd3GHZMPMitDH8HS9nGjDd',
  temple: 'price_1Tgd5bHZMPMitDH85cuBjegA',
  ocean: 'price_1Tgd7DHZMPMitDH8CpeklIMu',
  fifth: 'price_1Tgd9SHZMPMitDH8AvnJddCy',
};

export default function Home() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [signupState, setSignupState] = useState<'idle' | 'sending' | 'done' | 'error'>('idle');

  const handleSignup = async () => {
    if (!email || !email.includes('@')) {
      setSignupState('error');
      return;
    }
    setSignupState('sending');
    try {
      const res = await fetch('https://formspree.io/f/xjgdownb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSignupState('done');
        setEmail('');
      } else {
        setSignupState('error');
      }
    } catch {
      setSignupState('error');
    }
  };

  const handleCheckout = async (priceId: string) => {
    setLoadingId(priceId);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Sorry, something went wrong starting checkout. Please try again.');
        setLoadingId(null);
      }
    } catch {
      alert('Sorry, something went wrong starting checkout. Please try again.');
      setLoadingId(null);
    }
  };

  return (
    <main style={{fontFamily: 'Cormorant Garamond, serif', backgroundColor: '#f5f0e8', color: '#2c2c2c'}}>

      <nav style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '24px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(245,240,232,0.95)'}}>
        <a href="#top" style={{display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none', cursor: 'pointer'}}>
          <svg width="36" height="36" viewBox="0 0 40 38" fill="none">
            <polygon points="20,1 39,37 1,37" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
            <polygon points="20,8 35,35 5,35" stroke="#b8960c" strokeWidth="1.3" fill="none"/>
            <polygon points="20,15 31,33 9,33" stroke="#b8960c" strokeWidth="1.1" fill="none"/>
          </svg>
          <span style={{fontSize: '13px', letterSpacing: '6px', color: '#2c2c2c'}}>THRIWANA</span>
        </a>
        <div style={{display: 'flex', gap: '40px'}}>
          <a href="#collection" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>COLLECTION</a>
          <a href="#story" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>STORY</a>
          <a href="#contact" style={{fontSize: '11px', letterSpacing: '3px', color: '#888', textDecoration: 'none'}}>CONTACT</a>
        </div>
      </nav>

      <section id="top" style={{height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '80px'}}>
        <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: 'center top', filter: 'brightness(0.55)'}}></div>
        <div style={{position: 'relative', zIndex: 2, maxWidth: '700px', padding: '0 24px'}}>
          <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>ARUGAM BAY, SRI LANKA</p>
          <h1 style={{fontSize: '64px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.1', marginBottom: '24px'}}>Crafted in Sri Lanka.<br/>Worn Around The World.</h1>
          <p style={{fontSize: '15px', color: '#d4cfc7', lineHeight: '1.8', marginBottom: '48px', fontStyle: 'italic'}}>Small-batch resort wear handcrafted by women artisans using premium natural fabrics.</p>
          <a href="#collection" style={{backgroundColor: '#b8960c', color: '#f5f0e8', padding: '16px 48px', fontSize: '11px', letterSpacing: '4px', textDecoration: 'none', display: 'inline-block'}}>SHOP COLLECTION</a>
        </div>
      </section>

      <section id="story" style={{padding: '120px 48px', maxWidth: '900px', margin: '0 auto', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>THE STORY</p>
        <h2 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c', lineHeight: '1.2', marginBottom: '40px'}}>Not Fast. Not Mass. Just Made Well.</h2>
        <p style={{fontSize: '16px', color: '#666', lineHeight: '2', maxWidth: '600px', margin: '0 auto 24px'}}>Thriwana was born in the coastal workshops of Arugam Bay. Every shirt is cut, printed, and finished by hand by women artisans who have spent years perfecting their craft.</p>
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
          <div style={{backgroundColor: '#f5f0e8'}}>
            <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: '12% 60%'}}></div>
            <div style={{padding: '28px 24px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>The Arugam</h3>
              <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>The first light at Arugam Bay comes in low and gold, and this shirt was made for it. Hand-blocked triangles on breathable woven cotton, cut loose for heat and salt air. Coconut buttons, unlined, made to move. Wear it like you have already got sand on your feet.</p>
              <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
              <button onClick={() => handleCheckout(PRICES.arugam)} disabled={loadingId !== null} style={{display: 'block', width: '100%', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: 'transparent', cursor: 'pointer'}}>{loadingId === PRICES.arugam ? 'LOADING...' : 'BUY NOW'}</button>
            </div>
          </div>
          <div style={{backgroundColor: '#f5f0e8'}}>
            <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: '38% 60%'}}></div>
            <div style={{padding: '28px 24px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>The Cinnamon Coast</h3>
              <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>Named for the spice routes that built the island south. Deep red and charcoal stripes, hand-blocked with natural dyes that soften with every wash. Open or buttoned, it holds its shape from market morning to late dinner. Some shirts you buy; this one you arrive in.</p>
              <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
              <button onClick={() => handleCheckout(PRICES.cinnamon)} disabled={loadingId !== null} style={{display: 'block', width: '100%', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: 'transparent', cursor: 'pointer'}}>{loadingId === PRICES.cinnamon ? 'LOADING...' : 'BUY NOW'}</button>
            </div>
          </div>
          <div style={{backgroundColor: '#f5f0e8'}}>
            <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: '62% 60%'}}></div>
            <div style={{padding: '28px 24px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>The Temple Wave</h3>
              <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>There is a quiet to the inland temples that this print carries with it. A subtle grey wave pattern on ivory cotton, refined enough for evening, easy enough for everything before it. Lightweight, breathable, built for warm nights that run long. Understatement, worn well.</p>
              <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
              <button onClick={() => handleCheckout(PRICES.temple)} disabled={loadingId !== null} style={{display: 'block', width: '100%', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: 'transparent', cursor: 'pointer'}}>{loadingId === PRICES.temple ? 'LOADING...' : 'BUY NOW'}</button>
            </div>
          </div>
          <div style={{backgroundColor: '#f5f0e8'}}>
            <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: '88% 60%'}}></div>
            <div style={{padding: '28px 24px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>The Ocean Road</h3>
              <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>The coast road south is all sun, dust, and colour, and so is this. A multi-colour print on sand-toned linen, relaxed through the body, finished with coconut buttons. The kind of shirt that looks better the longer the day goes. For the road, and whoever you meet on it.</p>
              <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
              <button onClick={() => handleCheckout(PRICES.ocean)} disabled={loadingId !== null} style={{display: 'block', width: '100%', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: 'transparent', cursor: 'pointer'}}>{loadingId === PRICES.ocean ? 'LOADING...' : 'BUY NOW'}</button>
            </div>
          </div>
          <div style={{backgroundColor: '#f5f0e8'}}>
            <div style={{width: '100%', height: '480px', backgroundImage: 'url(/collection.jpg)', backgroundSize: 'cover', backgroundPosition: '50% 60%'}}></div>
            <div style={{padding: '28px 24px'}}>
              <h3 style={{fontSize: '24px', fontWeight: '300', color: '#2c2c2c', marginBottom: '8px'}}>The Fifth Shirt</h3>
              <p style={{fontSize: '13px', color: '#888', lineHeight: '1.7', marginBottom: '16px'}}>Placeholder description. Replace this name, text, and image once you confirm the fifth shirt with your partner.</p>
              <p style={{fontSize: '20px', color: '#b8960c', marginBottom: '20px', fontStyle: 'italic'}}>EUR 95</p>
              <button onClick={() => handleCheckout(PRICES.fifth)} disabled={loadingId !== null} style={{display: 'block', width: '100%', textAlign: 'center', border: '1px solid #2c2c2c', padding: '14px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: 'transparent', cursor: 'pointer'}}>{loadingId === PRICES.fifth ? 'LOADING...' : 'BUY NOW'}</button>
            </div>
          </div>
        </div>
      </section>

      <section style={{padding: '120px 48px', backgroundColor: '#2c2c2c', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>THE LIST</p>
        <h2 style={{fontSize: '44px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.2', marginBottom: '24px', maxWidth: '620px', marginLeft: 'auto', marginRight: 'auto'}}>Be first when the new season lands.</h2>
        <p style={{fontSize: '16px', color: '#d4cfc7', lineHeight: '2', maxWidth: '520px', margin: '0 auto 40px'}}>Small batches sell through fast. Join the list for early access to each new release before it reaches the public.</p>
        <div style={{display: 'flex', gap: '12px', maxWidth: '460px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center'}}>
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (signupState === 'error') setSignupState('idle'); }}
            placeholder="your email"
            style={{flex: '1 1 240px', minWidth: '0', padding: '15px 18px', fontSize: '14px', fontFamily: 'Cormorant Garamond, serif', color: '#2c2c2c', backgroundColor: '#f5f0e8', border: 'none', outline: 'none'}}
          />
          <button onClick={handleSignup} disabled={signupState === 'sending'} style={{flex: '0 0 auto', padding: '15px 36px', fontSize: '11px', letterSpacing: '3px', color: '#2c2c2c', backgroundColor: '#b8960c', border: 'none', cursor: 'pointer'}}>{signupState === 'sending' ? 'JOINING...' : 'JOIN THE LIST'}</button>
        </div>
        {signupState === 'done' && (
          <p style={{fontSize: '14px', color: '#b8960c', marginTop: '24px', fontStyle: 'italic'}}>You&apos;re on the list. We&apos;ll be in touch.</p>
        )}
        {signupState === 'error' && (
          <p style={{fontSize: '14px', color: '#d4cfc7', marginTop: '24px', fontStyle: 'italic'}}>Please enter a valid email and try again.</p>
        )}
      </section>

      <section style={{padding: '120px 48px', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: '80px'}}>
          <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '16px'}}>WHY THRIWANA</p>
          <h2 style={{fontSize: '48px', fontWeight: '300', color: '#2c2c2c'}}>Built Different.</h2>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '48px'}}>
          <div style={{borderTop: '1px solid #d4cfc7', paddingTop: '32px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '300', color: '#2c2c2c', marginBottom: '12px'}}>Premium Natural Fabrics</h3>
            <p style={{fontSize: '14px', color: '#888', lineHeight: '1.8'}}>Breathable cotton and linen. Sourced for quality, not cost.</p>
          </div>
          <div style={{borderTop: '1px solid #d4cfc7', paddingTop: '32px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '300', color: '#2c2c2c', marginBottom: '12px'}}>Small-Batch Production</h3>
            <p style={{fontSize: '14px', color: '#888', lineHeight: '1.8'}}>Never mass produced. Every run is limited. Every piece intentional.</p>
          </div>
          <div style={{borderTop: '1px solid #d4cfc7', paddingTop: '32px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '300', color: '#2c2c2c', marginBottom: '12px'}}>Made By Women Artisans</h3>
            <p style={{fontSize: '14px', color: '#888', lineHeight: '1.8'}}>Skilled hands in Arugam Bay. Fair work, honoured craft.</p>
          </div>
          <div style={{borderTop: '1px solid #d4cfc7', paddingTop: '32px'}}>
            <h3 style={{fontSize: '20px', fontWeight: '300', color: '#2c2c2c', marginBottom: '12px'}}>Shipped Worldwide</h3>
            <p style={{fontSize: '14px', color: '#888', lineHeight: '1.8'}}>From the Sri Lankan coast to your door, wherever that is.</p>
          </div>
        </div>
      </section>

      <section id="contact" style={{padding: '120px 48px', backgroundColor: '#2c2c2c', textAlign: 'center'}}>
        <p style={{fontSize: '11px', letterSpacing: '5px', color: '#b8960c', marginBottom: '24px'}}>CONTACT</p>
        <h2 style={{fontSize: '48px', fontWeight: '300', color: '#f5f0e8', lineHeight: '1.2', marginBottom: '32px'}}>Bring Thriwana To You.</h2>
        <p style={{fontSize: '16px', color: '#d4cfc7', lineHeight: '2', maxWidth: '600px', margin: '0 auto 32px'}}>For orders, wholesale enquiries, or to learn more about our craft, reach out anytime.</p>
        <a href="mailto:yanbaylon06@gmail.com" style={{fontSize: '14px', letterSpacing: '3px', color: '#b8960c', textDecoration: 'none'}}>YANBAYLON06@GMAIL.COM</a>
      </section>

      <footer style={{padding: '48px', backgroundColor: '#2c2c2c', borderTop: '1px solid #444', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div style={{display: 'flex', alignItems: 'center', gap: '14px'}}>
          <svg width="28" height="28" viewBox="0 0 40 38" fill="none">
            <polygon points="20,1 39,37 1,37" stroke="#b8960c" strokeWidth="1.5" fill="none"/>
            <polygon points="20,8 35,35 5,35" stroke="#b8960c" strokeWidth="1.3" fill="none"/>
            <polygon points="20,15 31,33 9,33" stroke="#b8960c" strokeWidth="1.1" fill="none"/>
          </svg>
          <span style={{fontSize: '12px', letterSpacing: '5px', color: '#888'}}>THRIWANA</span>
        </div>
        <p style={{fontSize: '11px', letterSpacing: '2px', color: '#666'}}>HANDCRAFTED IN SRI LANKA</p>
      </footer>

    </main>
  );
}
