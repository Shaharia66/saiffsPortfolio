import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const personal = {
  name: "Gazi Shahariar Hasan",
  roles: ["Full Stack Developer", "AI Engineer", "LLM Integration Specialist", "Agentic AI Developer", "Spring Boot Engineer"],
  email: "gssaif.tm@gmail.com",
  phone: "+880 1714374806",
  linkedin: "https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/",
  github: "https://github.com/Shaharia66",
  objective: "Software Engineer specializing in full-stack development and applied AI, with hands-on experience buildin gproduction-style applications using Java, Spring Boot, React.js, Python, and FastAPI. Skilled in LLM integration, RAG pipelines, vector databases, and agentic AI frameworks (LangChain, LangGraph, Crew AI). Completed B.Sc from SUST.Seeking an entry-level Software/AI Engineer role to apply strong fundamentals in DSA and system design to real-world products.",
  objective2: "I'm a Software Engineer specializing in full-stack development and applied AI, with hands-on experience buildin gproduction-style applications using Java, Spring Boot, React.js, Python, and FastAPI. Skilled in LLM integration, RAG pipelines, vector databases, and agentic AI frameworks (LangChain, LangGraph, Crew AI).\n\nComfortable across the stack: REST API design, authentication/authorization (OAuth2, JWT), relational databases (MySQL), Docker, CI/CD (GitHub Actions), and Git-based collaborative workflows. Seeking an entry-level Software/AI Engineer role to apply strong fundamentals in DSA and system design to real-world products."
};

const navLinks = ["Home","About","Education","Experience","Research","Projects","Skills","Certifications","References","Contact"];

// Tech logos shown in the scrolling marquee at the top of the hero.
// type:"icon" pulls a real brand mark from Simple Icons (cdn.simpleicons.org/<slug>/<hexcolor>).
// type:"badge" is used for tools without a public brand icon (rendered as a colored text chip instead).
const techStack = [
  { name:"Java", type:"icon", slug:"openjdk", color:"F8981D" },
  { name:"Spring Boot", type:"icon", slug:"springboot", color:"6DB33F" },
  { name:"React", type:"icon", slug:"react", color:"61DAFB" },
  { name:"Python", type:"icon", slug:"python", color:"3776AB" },
  { name:"FastAPI", type:"icon", slug:"fastapi", color:"009688" },
  { name:"JavaScript", type:"icon", slug:"javascript", color:"F7DF1E" },
  { name:"Docker", type:"icon", slug:"docker", color:"2496ED" },
  { name:"MySQL", type:"icon", slug:"mysql", color:"4479A1" },
  { name:"MongoDB", type:"icon", slug:"mongodb", color:"47A248" },
  { name:"Redis", type:"icon", slug:"redis", color:"DC382D" },
  { name:"Memcached", type:"badge", fallback:"MC", color:"824998" },
  { name:"CI/CD", type:"icon", slug:"githubactions", color:"2088FF" },
  { name:"Git", type:"icon", slug:"git", color:"F05032" },
  { name:"GitHub", type:"icon", slug:"github", color:"181717" },
  { name:"HTML5", type:"icon", slug:"html5", color:"E34F26" },
  { name:"CSS3", type:"icon", slug:"css3", color:"1572B6" },
  { name:"LangChain", type:"badge", fallback:"LC", color:"1C3C3C" },
  { name:"RAG", type:"badge", fallback:"RAG", color:"0284C7" },
  { name:"ChromaDB", type:"badge", fallback:"DB", color:"7C3AED" },
  { name:"Groq API", type:"badge", fallback:"Gq", color:"F97316" },
];

const education = [
  { degree:"B.Sc Engineering in EEE", inst:"Shahjalal University of Science and Technology, Sylhet", period:"Feb 2020 – July 2025", grade:"CGPA 3.34/4.00", icon:"🎓" },
  { degree:"Higher Secondary Certificate", inst:"Khulna Public College, Khulna", period:"July 2017 – May 2019", grade:"GPA 5.00/5.00", icon:"🏫" },
  { degree:"Secondary School Certificate", inst:"Tala B Dey Govt High School, Satkhira", period:"Jan 2012 – March 2017", grade:"GPA 5.00/5.00", icon:"📚" }
];

const experience = [
  { title:"Generative AI & Agentic AI Engineer", company:"Self-employed", location:"Remote", period:"Dec 2025 – Present",
    bullets:[
      "Developed AI-powered applications using LangChain, RAG architecture, ChromaDB, and Groq LLM API.",
      "Built InsightForge — an Agentic AI research assistant with autonomous 4-step intelligent pipeline and PDF export.",
      "Implemented semantic search over vector knowledge bases using ChromaDB, Pinecone, and RAG pipelines.",
      "Explored multi-agent frameworks including LangGraph, Crew AI, Agno, and Autogen for Agentic AI development."
    ]
  },
  { title:"Full Stack Web Development", company:"Self-paced / Online", location:"Remote", period:"Jun 2023 – Oct 2024",
    bullets:[
      "Completed course covering HTML, CSS, JavaScript, React, Java, Spring Boot, MySQL, Git and GitHub.",
      "Implemented secure OAuth2 authentication and role-based access control with Spring Boot Security.",
      "Integrated AI/LLM capabilities into production workflows using OpenAI API.",
      "Gained end-to-end development experience from UI design to database management and API integration."
    ]
  },
  { title:"Industrial Trainee", company:"Training Institute for Chemical Industries (TICI)", location:"Palash, Narsingdi", period:"29 Nov – 19 Dec 2024",
    bullets:[
      "Operated industrial electrical systems: switching gear, safety relays, motor protection devices; programmed and debugged PLCs.",
      "Conducted fault diagnosis on process control loops and practiced industrial safety protocols."
    ]
  }
];

const research = {
  paper:"Analytical Modeling and Validation of Vth in P-Channel DGJLFETs with and without Stack Oxide",
  link:"https://www.researchgate.net/publication/401254609",
  supervisors:[
    { name:"Dr. Md. Mohsinur Rahman Adnan", role:"Asst. Prof., EEE, BUET", period:"Sept 2024 – Feb 2025", link:"https://eee.buet.ac.bd/people/faculty/dr-md-mra" },
    { name:"Md. Shariful Islam", role:"Lecturer, EEE, SUST", period:"Feb 2025 – May 2025", link:"https://www.sust.edu/departments/eee/faculty/shariful-eee@sust.edu" }
  ],
  bullets:[
    "Developed a 1-D analytical model for threshold voltage in DGJLFET and DGSJLFET with p-type channel.",
    "Applied Poisson's equation with electrostatic boundary conditions considering key device parameters.",
    "Analyzed impact of stacked oxide (HfO₂) on threshold voltage and validated through TCAD simulation."
  ]
};

const projects = [
  { title:"InsightForge", sub:"Agentic AI Research Assistant", date:"Jun 2026", link:"https://aireserchagent.netlify.app/", tech:["Python","FastAPI","LangChain","Groq API","LLaMA 3.3 70B","React.js","Tailwind CSS"], color:"#a855f7", icon:"🤖",
    bullets:[
      "Autonomous 4-step intelligent pipeline: topic analysis, deep research, insight extraction, and professional report generation.",
      "Powered by Groq API (LLaMA 3.3 70B) and LangChain for fast, intelligent agentic reasoning.",
      "React.js + Tailwind CSS frontend with one-click PDF export of fully formatted research reports."
    ]
  },
  { title:"AI Code Reviewer", sub:"RAG-Powered Code Analysis", date:"Jun 2026", link:"https://aicoderevieweru.netlify.app/", tech:["LangChain","RAG","ChromaDB","Groq LLM","FastAPI","React"], color:"#3b82f6", icon:"🔍",
    bullets:[
      "Built with LangChain, RAG architecture, and ChromaDB vector database for semantic code analysis.",
      "Integrated Groq LLM for fast intelligent code review with semantic search over a security knowledge base.",
      "FastAPI backend and React frontend with rate limiting, input sanitization, and CORS protection."
    ]
  },
  { title:"AI-Powered News Aggregator", sub:"Real-time News Platform", date:"Apr 2026", link:"https://newsbd-frontend1.vercel.app/", tech:["React","Spring Boot","MySQL","OAuth2","OpenAI API"], color:"#0ea5e9", icon:"📰",
    bullets:[
      "AI-powered news aggregation fetching, categorizing and displaying real-time news from trusted sources.",
      "AI-based summarization and smart filtering by category, section and publication date.",
      "OAuth2 authentication, bookmarking, sharing, and admin dashboard for content moderation."
    ]
  },
  { title:"Kundokoli", sub:"Handmade Artisan E-Commerce", date:"Mar 2026", link:"https://newsbd-frontend1.vercel.app/", tech:["React.js","Spring Boot","MySQL","JWT"], color:"#f97316", icon:"🛒",
    bullets:[
      "Full-stack handmade artisan e-commerce platform built with React.js, Spring Boot and MySQL.",
      "Product management, customer ordering system and JWT-based authentication.",
      "Admin dashboard for managing products, orders and platform operations."
    ]
  },
  { title:"Hostel Management System", sub:"Spring Boot REST API", date:"Dec 2025", link:"https://hostelmanagementwithsecurity-production.up.railway.app/swagger-ui.html", tech:["Spring Boot","JWT","MySQL","REST API"], color:"#06b6d4", icon:"🏢",
    bullets:[
      "Full hostel management backend using Spring Boot, JWT and MySQL.",
      "Role-based access control for admins, staff and students.",
      "REST APIs for user management, booking and authentication."
    ]
  },
  { title:"E-Commerce Frontend", sub:"React + Redux Application", date:"Sep 2025", link:"https://quickshoppingsaif.netlify.app/", tech:["React","Redux Toolkit","CSS"], color:"#f59e0b", icon:"🛍️",
    bullets:[
      "Responsive e-commerce frontend with React and Redux Toolkit for state management.",
      "Product listing, cart management and dynamic UI updates."
    ]
  }
];

const skillGroups = [
  { cat:"AI & LLM", items:[{n:"LangChain / LangGraph",v:82},{n:"RAG Architecture",v:80},{n:"Groq API / OpenAI API",v:85},{n:"Hugging Face",v:72},{n:"ChromaDB / Pinecone",v:78},{n:"Fine-Tuning (QLORA,LORA)",v:68}] },
  { cat:"Languages & Frameworks", items:[{n:"Python / FastAPI",v:80},{n:"Java / Spring Boot",v:82},{n:"React.js / Redux",v:85},{n:"JavaScript",v:83},{n:"MySQL",v:78},{n:"Spring Security",v:74}] },
  { cat:"Databases & Caching", items:[{n:"MongoDB",v:72},{n:"Redis",v:70},{n:"Memcached",v:62},{n:"MySQL",v:78},{n:"ChromaDB / Pinecone",v:78},{n:"REST API Design",v:85}] },
  { cat:"Tools & DevOps", items:[{n:"OAuth2 / JWT",v:82},{n:"Git & GitHub",v:88},{n:"Docker",v:76},{n:"CI/CD (GitHub Actions)",v:74},{n:"CORS / Rate Limiting",v:75},{n:"System Design & DSA",v:75}] }
];

const certs = [
  { title:"Electrical & Instrumentation Training", issuer:"TICI", link:"https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/overlay/Position/2702449792/treasury/?profileId=ACoAAFxhbswBnT0UnRGXCVVZJQfp0EMxZxnX01o" },
  { title:"IEEE International Conference (QPAIN)", issuer:"IEEE", link:"https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/overlay/Certifications/23933598/treasury/?profileId=ACoAAFxhbswBnT0UnRGXCVVZJQfp0EMxZxnX01o" }
];

const refs = [
  { name:"Dr. Md Rasedujjaman", role:"Associate Professor", dept:"EEE, SUST", email:"mrased-eee@sust.edu", link:"https://www.sust.edu/departments/eee/faculty/mrased-eee@sust.edu" },
  { name:"Dr. Md. Mohsinur Rahman Adnan", role:"Assistant Professor", dept:"EEE, BUET", email:"mmradnan@eee.buet.ac.bd", link:"https://eee.buet.ac.bd/people/faculty/dr-md-mra" },
  { name:"Md. Shariful Islam", role:"Lecturer", dept:"EEE, SUST", email:"shariful-eee@sust.edu", link:"https://www.sust.edu/departments/eee/faculty/shariful-eee@sust.edu" }
];

// ─── PARTICLES ───────────────────────────────────────────────────────────────
function Particles() {
  const cvs = useRef(null);
  useEffect(() => {
    const c = cvs.current; if (!c) return;
    const ctx = c.getContext("2d");
    let W = c.width = window.innerWidth, H = c.height = window.innerHeight;
    const isSmall = W < 640;
    const count = isSmall ? 40 : 80;
    const pts = Array.from({length:count}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.4, vy: (Math.random()-.5)*.4,
      r: Math.random()*1.5+.5
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0,0,W,H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x<0||p.x>W) p.vx*=-1;
        if (p.y<0||p.y>H) p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(59,130,246,0.5)"; ctx.fill();
      });
      pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if (d<120) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(59,130,246,${.15*(1-d/120)})`; ctx.lineWidth=.5; ctx.stroke(); }
      }));
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W=c.width=window.innerWidth; H=c.height=window.innerHeight; };
    window.addEventListener("resize",resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize",resize); };
  },[]);
  return <canvas ref={cvs} style={{position:"fixed",top:0,left:0,zIndex:0,pointerEvents:"none",opacity:.6}} />;
}

// ─── TECH MARQUEE (top-of-hero scrolling skills strip) ──────────────────────
function TechMarquee({ sub }) {
  const track = [...techStack, ...techStack]; // duplicated for a seamless infinite loop
  return (
    <div className="tech-marquee-wrap">
      <div className="tech-marquee-track">
        {track.map((t, i) => (
          <div className="tech-chip" key={i}>
            <div className="tech-icon-box">
              {t.type === "icon" ? (
                <img
                  src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
                  alt={t.name}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <span
                className="tech-icon-fallback"
                style={{
                  display: t.type === "icon" ? "none" : "flex",
                  background: `#${t.color}`
                }}
              >
                {t.fallback || t.name.slice(0,2).toUpperCase()}
              </span>
            </div>
            <span className="tech-chip-label" style={{ color: sub }}>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── HOOKS ───────────────────────────────────────────────────────────────────
function useInView(ref) {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, {threshold:.12});
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  },[ref]);
  return vis;
}

function useTyping(words, speed=80, pause=1800) {
  const [text, setText] = useState(""); const [wi, setWi] = useState(0); const [ci, setCi] = useState(0); const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[wi];
    const t = setTimeout(() => {
      if (!del) { setText(w.slice(0,ci+1)); if (ci+1===w.length) { setTimeout(()=>setDel(true),pause); } else setCi(ci+1); }
      else { setText(w.slice(0,ci-1)); if (ci-1===0) { setDel(false); setWi((wi+1)%words.length); setCi(0); } else setCi(ci-1); }
    }, del?40:speed);
    return ()=>clearTimeout(t);
  },[text,ci,del,wi]);
  return text;
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({id,children,className=""}) {
  const ref=useRef(null); const vis=useInView(ref);
  return (
    <section id={id} ref={ref} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto ${className}`}
      style={{opacity:vis?1:0,transform:vis?"translateY(0)":"translateY(30px)",transition:"all .7s cubic-bezier(.4,0,.2,1)"}}>
      {children}
    </section>
  );
}

function SectionTitle({label,title}) {
  return (
    <div className="mb-12">
      <p style={{color:"#3b82f6",fontFamily:"JetBrains Mono,monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>// {label}</p>
      <h2 style={{fontFamily:"Syne,sans-serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:800,color:"#f1f5f9",lineHeight:1.15}}>{title}</h2>
      <div style={{width:"48px",height:"3px",background:"linear-gradient(90deg,#3b82f6,transparent)",marginTop:"12px",borderRadius:"2px"}} />
    </div>
  );
}

// ─── SKILL BAR ───────────────────────────────────────────────────────────────
function SkillBar({name,value,delay=0}) {
  const ref=useRef(null); const vis=useInView(ref);
  return (
    <div ref={ref} style={{marginBottom:"14px"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:"5px"}}>
        <span style={{color:"#cbd5e1",fontSize:"13px",fontWeight:500}}>{name}</span>
        <span style={{color:"#3b82f6",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>{value}%</span>
      </div>
      <div style={{background:"rgba(255,255,255,.06)",borderRadius:"99px",height:"6px",overflow:"hidden"}}>
        <div style={{height:"100%",background:"linear-gradient(90deg,#2563eb,#60a5fa)",borderRadius:"99px",
          width: vis?`${value}%`:"0%",transition:`width 1.2s cubic-bezier(.4,0,.2,1) ${delay}ms`}} />
      </div>
    </div>
  );
}

// ─── MAIN APP ────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [activeNav, setActiveNav] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({name:"",email:"",message:""});
  const [sent, setSent] = useState(false);
  const typed = useTyping(personal.roles);

  const bg = dark ? "#070e1c" : "#f0f4f8";
  const cardBg = dark ? "rgba(13,27,51,.9)" : "rgba(255,255,255,.92)";
  const txt = dark ? "#e2e8f0" : "#0f172a";
  const sub = dark ? "#94a3b8" : "#64748b";
  const border = dark ? "rgba(59,130,246,.15)" : "rgba(59,130,246,.25)";

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY>50);
      navLinks.forEach(n => {
        const el = document.getElementById(n.toLowerCase());
        if (el) { const r=el.getBoundingClientRect(); if (r.top<=120&&r.bottom>=120) setActiveNav(n); }
      });
    };
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);

  const goto = (id) => { setMenuOpen(false); document.getElementById(id.toLowerCase())?.scrollIntoView({behavior:"smooth"}); };

  const handleSubmit = (e) => { e.preventDefault(); setSent(true); setTimeout(()=>setSent(false),4000); setFormData({name:"",email:"",message:""}); };

  const navBg = scrolled ? (dark?"rgba(7,14,28,.97)":"rgba(240,244,248,.97)") : "transparent";

  return (
    <div style={{background:bg,color:txt,minHeight:"100vh",fontFamily:"Outfit,sans-serif",transition:"background .3s,color .3s"}}>
      <Particles />

      {/* ── NAVBAR ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:50,background:navBg,backdropFilter:scrolled?"blur(16px)":"none",borderBottom:scrolled?`1px solid ${border}`:"none",transition:"all .3s"}}>
        <div style={{maxWidth:"1200px",margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",justifyContent:"space-between",height:"64px"}}>
          <button onClick={()=>goto("home")} style={{fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:"20px",color:"#3b82f6",background:"none",border:"none",cursor:"pointer"}}>
            &lt;GSH /&gt;
          </button>
          <div style={{display:"flex",gap:"4px",alignItems:"center"}} className="hidden-mobile">
            {navLinks.map(n=>(
              <button key={n} onClick={()=>goto(n)} style={{background:activeNav===n?"rgba(59,130,246,.1)":"none",color:activeNav===n?"#3b82f6":sub,border:"none",borderRadius:"8px",padding:"6px 12px",cursor:"pointer",fontSize:"13px",fontFamily:"Outfit,sans-serif",fontWeight:500,transition:"all .2s"}}>
                {n}
              </button>
            ))}
          </div>
          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <button onClick={()=>setDark(!dark)} style={{background:"rgba(59,130,246,.08)",border:`1px solid ${border}`,color:"#3b82f6",borderRadius:"8px",padding:"7px 10px",cursor:"pointer",fontSize:"13px"}}>
              {dark?"☀️":"🌙"}
            </button>
            <a href="/Shahariar_CV_SWE.pdf" download style={{background:"#3b82f6",color:"#000",borderRadius:"8px",padding:"7px 16px",textDecoration:"none",fontSize:"13px",fontWeight:700,fontFamily:"Outfit,sans-serif"}}>
              ↓ CV
            </a>
            <button onClick={()=>setMenuOpen(!menuOpen)} className="menu-btn" style={{background:"none",border:"none",color:sub,cursor:"pointer",fontSize:"20px"}}>
              {menuOpen?"✕":"☰"}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{background:dark?"#0d1b33":"#fff",borderTop:`1px solid ${border}`,padding:"12px 24px"}}>
            {navLinks.map(n=>(
              <button key={n} onClick={()=>goto(n)} style={{display:"block",width:"100%",textAlign:"left",padding:"10px 12px",background:"none",border:"none",color:activeNav===n?"#3b82f6":sub,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontFamily:"Outfit,sans-serif"}}>
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,padding:"96px 16px 40px"}}>
        <div style={{textAlign:"center",maxWidth:"800px",width:"100%"}}>
          <TechMarquee sub={sub} />
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(59,130,246,.08)",border:"1px solid rgba(59,130,246,.2)",borderRadius:"99px",padding:"6px 16px",marginBottom:"28px"}}>
            <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",display:"inline-block",boxShadow:"0 0 8px #3b82f6"}}></span>
            <span style={{color:"#3b82f6",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",letterSpacing:"1px"}}>Available for opportunities</span>
          </div>
          <h1 style={{fontFamily:"Syne,sans-serif",fontSize:"clamp(36px,6vw,72px)",fontWeight:800,lineHeight:1.1,marginBottom:"16px"}}>
            Hi, I'm <span style={{color:"#3b82f6"}}>Shahariar</span>
          </h1>
          <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:"clamp(16px,2.5vw,24px)",color:"#64748b",marginBottom:"24px",minHeight:"36px"}}>
            <span style={{color:"#3b82f6"}}>{">"}</span> <span style={{color:dark?"#cbd5e1":"#334155"}}>{typed}</span>
            <span style={{color:"#3b82f6",animation:"blink 1s infinite"}}>|</span>
          </div>
          <p style={{color:sub,fontSize:"16px",lineHeight:1.8,maxWidth:"600px",margin:"0 auto 40px",fontWeight:300}}>
            {personal.objective}
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>goto("projects")} style={{background:"#3b82f6",color:"#000",border:"none",borderRadius:"10px",padding:"13px 28px",fontSize:"15px",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",boxShadow:"0 4px 24px rgba(59,130,246,.35)"}}>
              View Projects →
            </button>
            <button onClick={()=>goto("contact")} style={{background:"transparent",color:"#3b82f6",border:"1px solid rgba(59,130,246,.4)",borderRadius:"10px",padding:"13px 28px",fontSize:"15px",fontWeight:600,cursor:"pointer",fontFamily:"Outfit,sans-serif"}}>
              Contact Me
            </button>
          </div>
          <div style={{display:"flex",gap:"20px",justifyContent:"center",marginTop:"36px"}}>
            {[["https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/","in","LinkedIn"],["https://github.com/Shaharia66","gh","GitHub"],["mailto:gssaif.tm@gmail.com","@","Email"]].map(([href,icon,label])=>(
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{color:sub,textDecoration:"none",fontSize:"13px",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",transition:"color .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.color="#3b82f6"}}
                onMouseLeave={e=>{e.currentTarget.style.color=sub}}>
                <span style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(59,130,246,.08)",border:`1px solid ${border}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"JetBrains Mono,monospace",fontWeight:700,fontSize:"12px"}}>{icon}</span>
                <span style={{fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase"}}>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div style={{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",color:"rgba(148,163,184,.4)"}}>
          <span style={{fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase"}}>scroll</span>
          <div style={{width:"1px",height:"40px",background:"linear-gradient(to bottom,rgba(59,130,246,.5),transparent)"}} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about">
        <SectionTitle label="01. about me" title="Who I Am" />
        <div className="about-grid">
          <div>
            {personal.objective2.split('\n\n').map((para,i)=>(
              <p key={i} style={{color:sub,lineHeight:1.9,fontSize:"15px",marginBottom:"16px"}}>{para}</p>
            ))}
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"24px"}}>
              {["Python","LangChain","React.js","Spring Boot","FastAPI","RAG","ChromaDB","Java","JWT","OAuth2","MongoDB","Redis"].map(t=>(
                <span key={t} style={{background:"rgba(59,130,246,.08)",border:"1px solid rgba(59,130,246,.2)",color:"#3b82f6",borderRadius:"6px",padding:"5px 12px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
            {[["7+","Projects Built"],["3+","Years Learning"],["5.0","GPA in SSC & HSC"],["2","AI Projects Live"]].map(([v,l])=>(
              <div key={l} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"14px",padding:"24px",textAlign:"center",backdropFilter:"blur(8px)"}}>
                <div style={{fontFamily:"Syne,sans-serif",fontSize:"32px",fontWeight:800,color:"#3b82f6"}}>{v}</div>
                <div style={{color:sub,fontSize:"12px",marginTop:"4px"}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── EDUCATION ── */}
      <Section id="education">
        <SectionTitle label="02. education" title="Academic Journey" />
        <div style={{position:"relative",paddingLeft:"32px"}}>
          <div style={{position:"absolute",left:"10px",top:0,bottom:0,width:"2px",background:"linear-gradient(to bottom,#3b82f6,transparent)"}} />
          {education.map((e,i)=>(
            <div key={i} style={{position:"relative",marginBottom:"32px",paddingLeft:"28px"}}>
              <div style={{position:"absolute",left:"-27px",top:"16px",width:"16px",height:"16px",borderRadius:"50%",background:"#3b82f6",border:"3px solid #070e1c",boxShadow:"0 0 12px rgba(59,130,246,.5)"}} />
              <div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"24px 28px",backdropFilter:"blur(8px)",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,.35)";e.currentTarget.style.transform="translateX(4px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.transform="translateX(0)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"8px"}}>
                  <div>
                    <span style={{fontSize:"22px",marginRight:"10px"}}>{e.icon}</span>
                    <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"17px"}}>{e.degree}</span>
                  </div>
                  <span style={{background:"rgba(59,130,246,.1)",color:"#3b82f6",borderRadius:"6px",padding:"3px 10px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",whiteSpace:"nowrap"}}>{e.grade}</span>
                </div>
                <p style={{color:sub,fontSize:"14px"}}>{e.inst}</p>
                <p style={{color:"#64748b",fontSize:"12px",marginTop:"6px",fontFamily:"JetBrains Mono,monospace"}}>{e.period}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── EXPERIENCE ── */}
      <Section id="experience">
        <SectionTitle label="03. experience" title="Work & Training" />
        <div style={{display:"flex",flexDirection:"column",gap:"24px"}}>
          {experience.map((e,i)=>(
            <div key={i} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)",transition:"all .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,.35)";e.currentTarget.style.boxShadow="0 0 28px rgba(59,130,246,.1)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.boxShadow="none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px"}}>
                <div>
                  <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"18px",marginBottom:"4px"}}>{e.title}</h3>
                  <p style={{color:"#3b82f6",fontSize:"14px"}}>{e.company} · <span style={{color:sub}}>{e.location}</span></p>
                </div>
                <span style={{background:"rgba(59,130,246,.08)",border:"1px solid rgba(59,130,246,.2)",color:"#3b82f6",borderRadius:"6px",padding:"4px 12px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",whiteSpace:"nowrap"}}>{e.period}</span>
              </div>
              <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"8px"}}>
                {e.bullets.map((b,j)=>(
                  <li key={j} style={{display:"flex",gap:"10px",color:sub,fontSize:"14px",lineHeight:1.7}}>
                    <span style={{color:"#3b82f6",marginTop:"2px",flexShrink:0}}>▸</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* ── RESEARCH ── */}
      <Section id="research">
        <SectionTitle label="04. research" title="Research Work" />
        <div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"20px",padding:"36px",backdropFilter:"blur(8px)"}}>
          <div style={{display:"inline-flex",gap:"8px",background:"rgba(59,130,246,.08)",border:"1px solid rgba(59,130,246,.2)",borderRadius:"6px",padding:"4px 12px",marginBottom:"20px"}}>
            <span style={{color:"#3b82f6",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>Undergraduate Thesis</span>
          </div>
          <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"20px",marginBottom:"20px",lineHeight:1.4}}>
            <a href={research.link} target="_blank" rel="noreferrer" style={{color:"#f1f5f9",textDecoration:"none",borderBottom:"1px solid rgba(59,130,246,.4)"}}
              onMouseEnter={e=>e.currentTarget.style.color="#3b82f6"}
              onMouseLeave={e=>e.currentTarget.style.color="#f1f5f9"}>
              {research.paper} ↗
            </a>
          </h3>
          <div style={{display:"flex",gap:"24px",flexWrap:"wrap",marginBottom:"24px"}}>
            {research.supervisors.map((s,i)=>(
              <div key={i} style={{background:"rgba(59,130,246,.04)",border:"1px solid rgba(59,130,246,.1)",borderRadius:"10px",padding:"14px 18px"}}>
                <a href={s.link} target="_blank" rel="noreferrer" style={{color:"#3b82f6",fontSize:"14px",fontWeight:600,textDecoration:"none"}}>{s.name}</a>
                <p style={{color:sub,fontSize:"12px",marginTop:"3px"}}>{s.role}</p>
                <p style={{color:"#64748b",fontSize:"11px",fontFamily:"JetBrains Mono,monospace",marginTop:"2px"}}>{s.period}</p>
              </div>
            ))}
          </div>
          <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"10px"}}>
            {research.bullets.map((b,i)=>(
              <li key={i} style={{display:"flex",gap:"10px",color:sub,fontSize:"14px",lineHeight:1.7}}>
                <span style={{color:"#3b82f6",flexShrink:0}}>▸</span>{b}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── PROJECTS ── */}
      <Section id="projects">
        <SectionTitle label="05. projects" title="Featured Projects" />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))",gap:"24px"}}>
          {projects.map((p,i)=>(
            <div key={i} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"18px",overflow:"hidden",display:"flex",flexDirection:"column",backdropFilter:"blur(8px)",transition:"all .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor=p.color+"55";e.currentTarget.style.transform="translateY(-4px)";e.currentTarget.style.boxShadow=`0 12px 40px ${p.color}18`}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="none"}}>
              <div style={{height:"6px",background:`linear-gradient(90deg,${p.color},${p.color}44)`}} />
              <div style={{padding:"24px",flex:1}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"12px"}}>
                  <div>
                    <span style={{fontSize:"28px"}}>{p.icon}</span>
                    <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"17px",marginTop:"8px"}}>{p.title}</h3>
                    <p style={{color:p.color,fontSize:"12px"}}>{p.sub}</p>
                  </div>
                  <span style={{color:"#64748b",fontSize:"11px",fontFamily:"JetBrains Mono,monospace"}}>{p.date}</span>
                </div>
                <ul style={{listStyle:"none",padding:0,marginBottom:"16px",display:"flex",flexDirection:"column",gap:"6px"}}>
                  {p.bullets.map((b,j)=>(
                    <li key={j} style={{display:"flex",gap:"8px",color:sub,fontSize:"13px",lineHeight:1.6}}>
                      <span style={{color:p.color,flexShrink:0,marginTop:"1px"}}>▸</span>{b}
                    </li>
                  ))}
                </ul>
                <div style={{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"20px"}}>
                  {p.tech.map(t=>(
                    <span key={t} style={{background:p.color+"14",color:p.color,border:`1px solid ${p.color}30`,borderRadius:"4px",padding:"2px 8px",fontSize:"11px",fontFamily:"JetBrains Mono,monospace"}}>{t}</span>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:"6px",color:p.color,fontSize:"13px",fontWeight:600,textDecoration:"none",border:`1px solid ${p.color}40`,borderRadius:"8px",padding:"7px 16px",transition:"all .2s"}}
                  onMouseEnter={e=>{e.currentTarget.style.background=p.color+"18"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="transparent"}}>
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── SKILLS ── */}
      <Section id="skills">
        <SectionTitle label="06. skills" title="Technical Skills" />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"24px"}}>
          {skillGroups.map((g,i)=>(
            <div key={i} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)"}}>
              <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#3b82f6",marginBottom:"20px"}}>{g.cat}</h3>
              {g.items.map((s,j)=><SkillBar key={j} name={s.n} value={s.v} delay={j*80} />)}
            </div>
          ))}
        </div>
        <div style={{marginTop:"32px",background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)"}}>
          <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#3b82f6",marginBottom:"16px"}}>Agentic AI & Other Frameworks</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {["LangGraph","Crew AI","Agno","Autogen","LlamaIndex","Hugging Face","Fine-Tuning (QLORA,LORA)","MCP","Google A2A","MATLAB Simulink","AutoCAD","MS Office","LaTeX","Canva"].map(t=>(
              <span key={t} style={{background:"rgba(59,130,246,.06)",border:"1px solid rgba(59,130,246,.15)",color:sub,borderRadius:"8px",padding:"6px 14px",fontSize:"13px"}}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CERTIFICATIONS ── */}
      <Section id="certifications">
        <SectionTitle label="07. certifications" title="Certifications" />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"20px"}}>
          {certs.map((c,i)=>(
            <div key={i} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)",transition:"all .3s",display:"flex",flexDirection:"column",gap:"12px"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,.35)";e.currentTarget.style.transform="translateY(-3px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{fontSize:"32px"}}>🏅</div>
              <div>
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",marginBottom:"6px"}}>{c.title}</h3>
                <p style={{color:sub,fontSize:"13px"}}>{c.issuer}</p>
              </div>
              <a href={c.link} target="_blank" rel="noreferrer"
                style={{marginTop:"auto",display:"inline-flex",alignItems:"center",gap:"6px",color:"#3b82f6",fontSize:"13px",textDecoration:"none",fontWeight:600}}>
                View Certificate ↗
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── REFERENCES ── */}
      <Section id="references">
        <SectionTitle label="08. references" title="Academic References" />
        <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"20px"}}>
          {refs.map((r,i)=>(
            <div key={i} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)",transition:"all .3s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,.35)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}>
              <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(59,130,246,.1)",border:"1px solid rgba(59,130,246,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",marginBottom:"16px"}}>👨‍🏫</div>
              <a href={r.link} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#3b82f6",marginBottom:"4px"}}>{r.name}</h3>
              </a>
              <p style={{color:sub,fontSize:"13px",marginBottom:"2px"}}>{r.role}</p>
              <p style={{color:"#64748b",fontSize:"12px",marginBottom:"12px"}}>{r.dept}</p>
              <a href={`mailto:${r.email}`} style={{color:"#3b82f6",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",textDecoration:"none",display:"flex",alignItems:"center",gap:"6px"}}>
                ✉ {r.email}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact">
        <SectionTitle label="09. contact" title="Get In Touch" />
        <div className="contact-grid">
          <div>
            <p style={{color:sub,fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>
              I'm currently open to new opportunities in AI Engineering and Full Stack Development. Whether you have a project, question, or just want to say hi — my inbox is always open!
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              {[[`📧`,personal.email,`mailto:${personal.email}`],[`📱`,personal.phone,`tel:${personal.phone}`],[`🔗`,"LinkedIn Profile",personal.linkedin],[`🐙`,"GitHub Profile",personal.github]].map(([icon,label,href])=>(
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 18px",background:cardBg,border:`1px solid ${border}`,borderRadius:"12px",textDecoration:"none",color:txt,transition:"all .2s",backdropFilter:"blur(8px)"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(59,130,246,.35)";e.currentTarget.style.color="#3b82f6"}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.color=txt}}>
                  <span style={{fontSize:"20px"}}>{icon}</span>
                  <span style={{fontSize:"14px"}}>{label}</span>
                </a>
              ))}
            </div>
          </div>
          <div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"20px",padding:"32px",backdropFilter:"blur(8px)"}}>
            {sent ? (
              <div style={{textAlign:"center",padding:"40px 20px"}}>
                <div style={{fontSize:"48px",marginBottom:"16px"}}>✅</div>
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"20px",color:"#3b82f6",marginBottom:"8px"}}>Message Sent!</h3>
                <p style={{color:sub,fontSize:"14px"}}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[["name","Your Name","text"],["email","Your Email","email"]].map(([field,placeholder,type])=>(
                  <div key={field}>
                    <input type={type} placeholder={placeholder} value={formData[field]} required
                      onChange={e=>setFormData({...formData,[field]:e.target.value})}
                      style={{width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid ${border}`,borderRadius:"10px",padding:"12px 16px",color:txt,fontSize:"14px",fontFamily:"Outfit,sans-serif",outline:"none",boxSizing:"border-box"}}
                      onFocus={e=>{e.target.style.borderColor="rgba(59,130,246,.5)"}}
                      onBlur={e=>{e.target.style.borderColor=border}} />
                  </div>
                ))}
                <textarea placeholder="Your Message" value={formData.message} required rows={5}
                  onChange={e=>setFormData({...formData,message:e.target.value})}
                  style={{width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid ${border}`,borderRadius:"10px",padding:"12px 16px",color:txt,fontSize:"14px",fontFamily:"Outfit,sans-serif",outline:"none",resize:"vertical",boxSizing:"border-box"}}
                  onFocus={e=>{e.target.style.borderColor="rgba(59,130,246,.5)"}}
                  onBlur={e=>{e.target.style.borderColor=border}} />
                <button type="submit" style={{background:"#3b82f6",color:"#000",border:"none",borderRadius:"10px",padding:"13px",fontSize:"15px",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"all .2s",boxShadow:"0 4px 20px rgba(59,130,246,.3)"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="#60a5fa"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#3b82f6"}}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{position:"relative",zIndex:1,borderTop:`1px solid ${border}`,padding:"32px 24px",textAlign:"center"}}>
        <p style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"18px",color:"#3b82f6",marginBottom:"8px"}}>&lt;GSH /&gt;</p>
        <p style={{color:"#64748b",fontSize:"13px",fontFamily:"JetBrains Mono,monospace"}}>© 2026 Gazi Shahariar Hasan · Built with React + Love</p>
      </footer>

      {/* ── BACK TO TOP ── */}
      <button onClick={()=>goto("home")}
        style={{position:"fixed",bottom:"28px",right:"28px",zIndex:50,width:"44px",height:"44px",background:"#3b82f6",color:"#000",border:"none",borderRadius:"12px",fontSize:"18px",cursor:"pointer",boxShadow:"0 4px 20px rgba(59,130,246,.4)",transition:"all .2s",display:scrolled?"flex":"none",alignItems:"center",justifyContent:"center"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)"}}
        onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"}}>↑</button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        * { box-sizing: border-box; margin:0; padding:0; }

        html { -webkit-text-size-adjust:100%; }
        body { overflow-x:hidden; }

        /* ── Tech marquee ── */
        .tech-marquee-wrap{
          position:relative;
          width:100%;
          max-width:920px;
          margin:0 auto 28px;
          overflow:hidden;
          -webkit-mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          mask-image:linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        .tech-marquee-track{
          display:flex;
          gap:28px;
          width:max-content;
          animation:marquee-scroll 34s linear infinite;
        }
        .tech-marquee-wrap:hover .tech-marquee-track{ animation-play-state:paused; }
        @keyframes marquee-scroll{ from{ transform:translateX(0); } to{ transform:translateX(-50%); } }
        .tech-chip{
          display:flex;
          flex-direction:column;
          align-items:center;
          gap:6px;
          flex-shrink:0;
          width:64px;
        }
        .tech-icon-box{
          width:48px;
          height:48px;
          border-radius:14px;
          background:#ffffff;
          display:flex;
          align-items:center;
          justify-content:center;
          box-shadow:0 4px 16px rgba(0,0,0,.28);
        }
        .tech-icon-box img{ width:26px; height:26px; object-fit:contain; }
        .tech-icon-fallback{
          width:100%; height:100%; border-radius:14px;
          color:#fff; font-family:'JetBrains Mono',monospace; font-weight:700; font-size:12px;
          align-items:center; justify-content:center;
        }
        .tech-chip-label{ font-size:11px; font-family:'Outfit',sans-serif; white-space:nowrap; }

        /* ── Responsive grids ── */
        .about-grid{ display:grid; grid-template-columns:1fr 1fr; gap:48px; align-items:center; }
        .contact-grid{ display:grid; grid-template-columns:1fr 1fr; gap:40px; align-items:start; }

        @media (prefers-reduced-motion: reduce){
          .tech-marquee-track{ animation:none; }
        }

        @media (max-width:900px){
          .about-grid, .contact-grid{ grid-template-columns:1fr; gap:32px; }
        }

        @media (max-width:768px){
          .hidden-mobile { display:none !important; }
          .menu-btn { display:flex !important; align-items:center; justify-content:center; }
        }
        @media (min-width:769px){
          .menu-btn{ display:none !important; }
        }

        @media (max-width:640px){
          .tech-icon-box{ width:40px; height:40px; border-radius:12px; }
          .tech-icon-box img{ width:22px; height:22px; }
          .tech-chip{ width:52px; }
          .tech-chip-label{ font-size:10px; }
          .tech-marquee-track{ gap:18px; }
          .tech-marquee-wrap{ margin-bottom:20px; }
        }
      `}</style>
    </div>
  );
}