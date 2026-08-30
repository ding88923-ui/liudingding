import React from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'

const projects = [
  { no:'01', title:'AFTER THE RAIN', type:'Narrative / Short Film', image:'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90', className:'project-large' },
  { no:'02', title:'WARM SILENCE', type:'Commercial / Lifestyle', image:'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&w=1600&q=90', className:'project-small' },
  { no:'03', title:'THE LAST LIGHT', type:'Music / Visual', image:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1600&q=90', className:'project-small' }
]
const strengths=[
  ['01','色彩感知','从肤色、环境到情绪层次，建立自然且统一的画面色彩关系。'],
  ['02','审美与克制','不过度堆叠风格，让每一次色彩变化都服务于内容本身。'],
  ['03','学习能力','作为新人，保持对不同工作流、参考体系和项目需求的快速吸收。'],
  ['04','沟通协作','理解导演、摄影与后期团队的表达需求，让创意更顺畅地落地。']
]
function App(){return <main>
<header className="nav-shell"><nav className="nav container"><a className="brand" href="#top">LIU / COLOR</a><div className="nav-links"><a href="#work">WORK</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></div><a className="nav-contact" href="mailto:hello@example.com">LET'S TALK <span>↗</span></a></nav></header>
<section id="top" className="hero"><div className="hero-noise"/><div className="hero-image"/><div className="container hero-content"><div className="hero-meta"><span>PORTFOLIO / 2026</span><span>TAICHUNG · TAIWAN</span></div><div className="hero-center"><p className="eyebrow">EMERGING COLORIST</p><h1>COLOR<br/><em>WITH</em> FEELING.</h1></div><div className="hero-bottom"><p>刚从校园走进片场与调色间。<br/>正在用耐心寻找属于每个画面的温度。</p><a href="#work" className="scroll-link">SCROLL TO EXPLORE <span>↓</span></a></div></div></section>
<section id="work" className="section work-section"><div className="container"><div className="section-heading"><div><span className="index">01</span><span className="eyebrow">SELECTED WORK</span></div><h2>精选项目<span>，</span><br/>正在持续生长。</h2><p>目前的作品集记录了我对暖调、自然光线与人物情绪的探索。每一个项目都是一次关于色彩关系的练习。</p></div><div className="project-grid">{projects.map(project=><article className={`project-card ${project.className}`} key={project.no}><div className="project-image" style={{backgroundImage:`url(${project.image})`}}/><div className="project-overlay"/><div className="project-top"><span>{project.no}</span><span>{project.type}</span></div><div className="project-bottom"><h3>{project.title}</h3><span className="arrow">↗</span></div></article>)}</div></div></section>
<section id="about" className="section about-section"><div className="container about-grid"><div className="about-photo"><div className="photo-label">LIU DINGDING<br/>COLORIST / INTERN</div></div><div className="about-content"><div className="section-kicker"><span className="index">02</span><span className="eyebrow">ABOUT ME</span></div><h2>还在成为<br/><em>调色师的路上。</em></h2><p className="about-intro">我是一名刚从大专毕业的实习调色师。相比急着定义自己的风格，我更希望先把观察做好：理解光线、人物、空间，以及画面真正需要表达的情绪。</p><p className="about-copy">我喜欢有温度但不黏腻的色彩，也相信高级感往往来自于克制。现在的我仍在积累项目与经验，但已经开始认真建立属于自己的视觉判断。</p><div className="data-grid"><div><strong>2026</strong><span>毕业 / 开始实习</span></div><div><strong>04+</strong><span>作品方向探索</span></div><div><strong>∞</strong><span>持续学习与打磨</span></div></div><div className="about-contact"><a href="mailto:hello@example.com">hello@example.com</a><span>+86 000 0000 0000</span></div></div></div></section>
<section className="section strengths-section"><div className="container"><div className="section-heading strengths-heading"><div><span className="index">03</span><span className="eyebrow">WHAT I BRING</span></div><h2>现在的我<br/>能带来什么？</h2></div><div className="strength-grid">{strengths.map(([no,title,text])=><article className="strength-card" key={no}><span className="strength-no">{no}</span><h3>{title}</h3><p>{text}</p><span className="strength-plus">+</span></article>)}</div></div></section>
<section id="contact" className="contact-section"><div className="contact-glow"/><div className="container contact-content"><div className="contact-top"><span className="eyebrow">04 / CONTACT</span><span>AVAILABLE FOR NEW OPPORTUNITIES</span></div><div className="contact-main"><p>如果你正在寻找一位愿意认真观察、认真学习，也愿意长期成长的年轻调色师。</p><a href="mailto:hello@example.com" className="contact-email">LET'S MAKE<br/><em>SOMETHING WARM.</em></a></div><footer><span>LIU DINGDING — COLORIST PORTFOLIO</span><span>© 2026</span><a href="#top">BACK TO TOP ↑</a></footer></div></section>
</main>}
createRoot(document.getElementById('root')).render(<App />)