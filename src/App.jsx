import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────
const personal = {
  name: "Gazi Shahariar Hasan",
  roles: ["FullStack Developer", "React Developer", "Spring Boot Engineer", "AI Integration Specialist"],
  email: "gssaif.tm@gmail.com",
  phone: "+880 1714374806",
  linkedin: "https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/",
  github: "https://github.com/Shaharia66",
  objective: "FullStack Developer with a strong foundation in Java, SpringBoot, JavaScript, React.js, HTML, CSS, MySQL, and AI Integration. Major in EEE, now fully focused on building efficient, responsive web applications. Passionate about continuous learning, problem solving, and applying analytical skills to real-world software development.",
  objective2:"I'm a Full Stack Developer with a B.Sc in Electrical and Electronic Engineering from SUST. My academic background in EEE has given me a strong analytical foundation that I now channel into building modern, scalable web applications.I specialize in Java, Spring Boot, React.js, MySQL, and AI Integration. I've built production-grade platforms including an AI-powered news aggregator,e-commerce systems, and a hostel management system with full authentication flows.I'm passionate about continuous learning and believe in writing clean, maintainable code that solves real-world problems efficiently."
};

const navLinks = ["Home","About","Education","Experience","Research","Projects","Skills","Certifications","References","Contact"];

const education = [
  { degree:"B.Sc Engineering in EEE", inst:"Shahjalal University of Science and Technology, Sylhet", period:"Feb 2020 – July 2025", grade:"CGPA 3.34/4.00", icon:"🎓" },
  { degree:"Higher Secondary Certificate", inst:"Khulna Public College, Khulna", period:"July 2017 – May 2019", grade:"GPA 5.00/5.00", icon:"🏫" },
  { degree:"Secondary School Certificate", inst:"Tala B Dey Govt High School, Satkhira", period:"Jan 2012 – March 2017", grade:"GPA 5.00/5.00", icon:"📚" }
];

const experience = [
  { title:"Industrial Trainee", company:"Training Institute for Chemical Industries (TICI)", location:"Palash, Narsingdi", period:"29 Nov – 19 Dec 2024",
    bullets:["Operated industrial electrical systems: switching gear, safety relays, motor protection devices; programmed and debugged PLCs.","Conducted fault diagnosis on process control loops and practiced safety protocols."] },
  { title:"Full Stack Web Development Training", company:"Self-paced / Online", location:"Remote", period:"Jun 2023 – Oct 2024",
    bullets:["Completed course covering HTML, CSS, JavaScript, React, Java, Spring Boot, MySQL, Git and GitHub.","Built full-stack apps using React, Spring Boot, and MySQL with hands-on projects.","Implemented OAuth2 authentication and role-based access control with Spring Security.","Practiced collaborative Git workflows; gained end-to-end development experience."] }
];

const research = {
  paper:"Analytical Modeling and Validation of Vth in P-Channel DGJLFETs with and without Stack Oxide",
  link:"https://www.researchgate.net/publication/401254609",
  supervisors:[
    { name:"Dr. Md. Mohsinur Rahman Adnan", role:"Asst. Prof., EEE, BUET", period:"Sept 2024 – Feb 2025", link:"https://eee.buet.ac.bd/people/faculty/dr-md-mra" },
    { name:"Md. Shariful Islam", role:"Lecturer, EEE, SUST", period:"Feb 2025 – May 2025", link:"https://www.sust.edu/departments/eee/faculty/shariful-eee@sust.edu" }
  ],
  bullets:["Developed a 1-D analytical model for threshold voltage in DGJLFET and DGSJLFET with p-type channel.","Applied Poisson's equation with electrostatic boundary conditions.","Analyzed impact of stacked oxide (HfO₂) on threshold voltage and validated through TCAD."]
};

const projects = [
  { title:"AI-Powered News Aggregator", sub:"Real-time News Platform", date:"Apr 2026", link:"https://newsbd-frontend1.vercel.app/", tech:["React","Spring Boot","MySQL","OAuth2","OpenAI API"], color:"#22c55e", icon:"📰",
    bullets:["AI-powered news aggregation fetching, categorizing and displaying real-time news from trusted sources.","AI-based summarization and smart filtering by category, section and publication date.","OAuth2 auth, bookmarking, sharing, and admin dashboard for content moderation."] },
  { title:"Kundokoli", sub:"Handmade Artisan E-Commerce", date:"Mar 2026", link:"https://newsbd-frontend1.vercel.app/", tech:["React.js","Spring Boot","MySQL","JWT"], color:"#0ea5e9", icon:"🛒",
    bullets:["Full-stack handmade artisan e-commerce platform built with React.js, Spring Boot and MySQL.","Product management, customer ordering system and JWT authentication.","Admin dashboard for managing products, orders and platform operations."] },
  { title:"Hostel Management System", sub:"Spring Boot REST API", date:"Dec 2025", link:"https://hostelmanagementwithsecurity-production.up.railway.app/swagger-ui.html", tech:["Spring Boot","JWT","MySQL","REST API"], color:"#a855f7", icon:"🏢",
    bullets:["Full hostel management backend using Spring Boot, JWT and MySQL.","Role-based access control for admins, staff and students.","REST APIs for user management, booking and authentication."] },
  { title:"E-Commerce Frontend", sub:"React + Redux Application", date:"Sep 2025", link:"https://quickshoppingsaif.netlify.app/", tech:["React","Redux Toolkit","CSS"], color:"#f97316", icon:"🛍️",
    bullets:["Responsive e-commerce frontend with React and Redux Toolkit for state management.","Product listing, cart management and dynamic UI updates."] },
  { title:"Weather App", sub:"JavaScript + API Integration", date:"Jul 2025", link:"https://weatherappsaif.netlify.app/", tech:["JavaScript","REST API","HTML/CSS"], color:"#06b6d4", icon:"🌦️",
    bullets:["Real-time weather info based on user location or city search via API integration.","Dynamic UI showing temperature, humidity, wind speed and weather conditions."] }
];

const skillGroups = [
  { cat:"Languages", items:[{n:"HTML/CSS",v:90},{n:"JavaScript",v:85},{n:"Java",v:80},{n:"SQL/MySQL",v:78},{n:"Python",v:60}] },
  { cat:"Frameworks", items:[{n:"React.js",v:85},{n:"Spring Boot",v:80},{n:"Redux Toolkit",v:75},{n:"Spring Security",v:72}] },
  { cat:"Tools", items:[{n:"Git & GitHub",v:88},{n:"LaTeX",v:70},{n:"MATLAB",v:65},{n:"Canva/Figma",v:65}] }
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
    const pts = Array.from({length:80}, () => ({
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
        ctx.fillStyle="rgba(34,197,94,0.5)"; ctx.fill();
      });
      pts.forEach((a,i) => pts.slice(i+1).forEach(b => {
        const d=Math.hypot(a.x-b.x,a.y-b.y);
        if (d<120) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y);
          ctx.strokeStyle=`rgba(34,197,94,${.15*(1-d/120)})`; ctx.lineWidth=.5; ctx.stroke(); }
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
      <p style={{color:"#22c55e",fontFamily:"JetBrains Mono,monospace",fontSize:"12px",letterSpacing:"3px",textTransform:"uppercase",marginBottom:"8px"}}>// {label}</p>
      <h2 style={{fontFamily:"Syne,sans-serif",fontSize:"clamp(28px,4vw,42px)",fontWeight:800,color:"#f1f5f9",lineHeight:1.15}}>{title}</h2>
      <div style={{width:"48px",height:"3px",background:"linear-gradient(90deg,#22c55e,transparent)",marginTop:"12px",borderRadius:"2px"}} />
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
        <span style={{color:"#22c55e",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>{value}%</span>
      </div>
      <div style={{background:"rgba(255,255,255,.06)",borderRadius:"99px",height:"6px",overflow:"hidden"}}>
        <div style={{height:"100%",background:"linear-gradient(90deg,#16a34a,#4ade80)",borderRadius:"99px",
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
  const border = dark ? "rgba(34,197,94,.15)" : "rgba(34,197,94,.25)";

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
          <button onClick={()=>goto("home")} style={{fontFamily:"Syne,sans-serif",fontWeight:800,fontSize:"20px",color:"#22c55e",background:"none",border:"none",cursor:"pointer"}}>
            &lt;GSH /&gt;
          </button>
          {/* Desktop */}
          <div style={{display:"flex",gap:"4px",alignItems:"center"}} className="hidden-mobile">
            {navLinks.map(n=>(
              <button key={n} onClick={()=>goto(n)} style={{background:activeNav===n?"rgba(34,197,94,.1)":"none",color:activeNav===n?"#22c55e":sub,border:"none",borderRadius:"8px",padding:"6px 12px",cursor:"pointer",fontSize:"13px",fontFamily:"Outfit,sans-serif",fontWeight:500,transition:"all .2s"}}>
                {n}
              </button>
            ))}
          </div>
          <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <button onClick={()=>setDark(!dark)} style={{background:"rgba(34,197,94,.08)",border:`1px solid ${border}`,color:"#22c55e",borderRadius:"8px",padding:"7px 10px",cursor:"pointer",fontSize:"13px"}}>
              {dark?"☀️":"🌙"}
            </button>
            <a href="mailto:gssaif.tm@gmail.com" style={{background:"#22c55e",color:"#000",borderRadius:"8px",padding:"7px 16px",textDecoration:"none",fontSize:"13px",fontWeight:700,fontFamily:"Outfit,sans-serif"}}>
              ↓ CV
            </a>
            <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"none",border:"none",color:sub,cursor:"pointer",fontSize:"20px",display:"none"}} className="menu-btn">
              {menuOpen?"✕":"☰"}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div style={{background:dark?"#0d1b33":"#fff",borderTop:`1px solid ${border}`,padding:"12px 24px"}}>
            {navLinks.map(n=>(
              <button key={n} onClick={()=>goto(n)} style={{display:"block",width:"100%",textAlign:"left",padding:"10px 12px",background:"none",border:"none",color:activeNav===n?"#22c55e":sub,borderRadius:"8px",cursor:"pointer",fontSize:"14px",fontFamily:"Outfit,sans-serif"}}>
                {n}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,padding:"80px 24px 40px"}}>
        <div style={{textAlign:"center",maxWidth:"800px"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:"8px",background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",borderRadius:"99px",padding:"6px 16px",marginBottom:"28px"}}>
            <span style={{width:"8px",height:"8px",borderRadius:"50%",background:"#22c55e",display:"inline-block",boxShadow:"0 0 8px #22c55e"}}></span>
            <span style={{color:"#22c55e",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",letterSpacing:"1px"}}>Available for opportunities</span>
          </div>
          <h1 style={{fontFamily:"Syne,sans-serif",fontSize:"clamp(36px,6vw,72px)",fontWeight:800,lineHeight:1.1,marginBottom:"16px"}}>
            Hi, I'm <span style={{color:"#22c55e"}}>Shahariar</span>
          </h1>
          <div style={{fontFamily:"JetBrains Mono,monospace",fontSize:"clamp(16px,2.5vw,24px)",color:"#64748b",marginBottom:"24px",minHeight:"36px"}}>
            <span style={{color:"#22c55e"}}>{">"}</span> <span style={{color:dark?"#cbd5e1":"#334155"}}>{typed}</span>
            <span style={{color:"#22c55e",animation:"blink 1s infinite"}}>|</span>
          </div>
          <p style={{color:sub,fontSize:"16px",lineHeight:1.8,maxWidth:"600px",margin:"0 auto 40px",fontWeight:300}}>
            {personal.objective}
          </p>
          <div style={{display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"}}>
            <button onClick={()=>goto("projects")} style={{background:"#22c55e",color:"#000",border:"none",borderRadius:"10px",padding:"13px 28px",fontSize:"15px",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",boxShadow:"0 4px 24px rgba(34,197,94,.35)"}}>
              View Projects →
            </button>
            <button onClick={()=>goto("contact")} style={{background:"transparent",color:"#22c55e",border:"1px solid rgba(34,197,94,.4)",borderRadius:"10px",padding:"13px 28px",fontSize:"15px",fontWeight:600,cursor:"pointer",fontFamily:"Outfit,sans-serif"}}>
              Contact Me
            </button>
          </div>
          <div style={{display:"flex",gap:"20px",justifyContent:"center",marginTop:"36px"}}>
            {[["https://www.linkedin.com/in/gazi-shahariar-hasan-77807a373/","in","LinkedIn"],["https://github.com/Shaharia66","gh","GitHub"],["mailto:gssaif.tm@gmail.com","@","Email"]].map(([href,icon,label])=>(
              <a key={label} href={href} target="_blank" rel="noreferrer"
                style={{color:sub,textDecoration:"none",fontSize:"13px",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",transition:"color .2s"}}
                onMouseEnter={e=>{e.currentTarget.style.color="#22c55e"}}
                onMouseLeave={e=>{e.currentTarget.style.color=sub}}>
                <span style={{width:"38px",height:"38px",borderRadius:"10px",background:"rgba(34,197,94,.08)",border:`1px solid ${border}`,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"JetBrains Mono,monospace",fontWeight:700,fontSize:"12px"}}>{icon}</span>
                <span style={{fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase"}}>{label}</span>
              </a>
            ))}
          </div>
        </div>
        <div style={{position:"absolute",bottom:"40px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",color:"rgba(148,163,184,.4)"}}>
          <span style={{fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase"}}>scroll</span>
          <div style={{width:"1px",height:"40px",background:"linear-gradient(to bottom,rgba(34,197,94,.5),transparent)"}} />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <Section id="about">
        <SectionTitle label="01. about me" title="Who I Am" />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"48px",alignItems:"center"}}>
          <div>
            <p style={{color:sub,lineHeight:1.9,fontSize:"15px",marginBottom:"20px"}}>{personal.objective2}</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"24px"}}>
              {["React.js","Spring Boot","Java","MySQL","OAuth2","Redux","Git"].map(t=>(
                <span key={t} style={{background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",color:"#22c55e",borderRadius:"6px",padding:"5px 12px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
            {[["5+","Projects Built"],["3+","Years Learning"],["5.0","GPA in SSC & HSC"],["2","Research Papers"]].map(([v,l])=>(
              <div key={l} style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"14px",padding:"24px",textAlign:"center",backdropFilter:"blur(8px)"}}>
                <div style={{fontFamily:"Syne,sans-serif",fontSize:"32px",fontWeight:800,color:"#22c55e"}}>{v}</div>
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
          <div style={{position:"absolute",left:"10px",top:0,bottom:0,width:"2px",background:"linear-gradient(to bottom,#22c55e,transparent)"}} />
          {education.map((e,i)=>(
            <div key={i} style={{position:"relative",marginBottom:"32px",paddingLeft:"28px"}}>
              <div style={{position:"absolute",left:"-27px",top:"16px",width:"16px",height:"16px",borderRadius:"50%",background:"#22c55e",border:"3px solid #070e1c",boxShadow:"0 0 12px rgba(34,197,94,.5)"}} />
              <div style={{background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"24px 28px",backdropFilter:"blur(8px)",transition:"all .3s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,197,94,.35)";e.currentTarget.style.transform="translateX(4px)"}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.transform="translateX(0)"}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"8px",marginBottom:"8px"}}>
                  <div>
                    <span style={{fontSize:"22px",marginRight:"10px"}}>{e.icon}</span>
                    <span style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"17px"}}>{e.degree}</span>
                  </div>
                  <span style={{background:"rgba(34,197,94,.1)",color:"#22c55e",borderRadius:"6px",padding:"3px 10px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",whiteSpace:"nowrap"}}>{e.grade}</span>
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
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,197,94,.35)";e.currentTarget.style.boxShadow="0 0 28px rgba(34,197,94,.1)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.boxShadow="none"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"12px",marginBottom:"16px"}}>
                <div>
                  <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"18px",marginBottom:"4px"}}>{e.title}</h3>
                  <p style={{color:"#22c55e",fontSize:"14px"}}>{e.company} · <span style={{color:sub}}>{e.location}</span></p>
                </div>
                <span style={{background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",color:"#22c55e",borderRadius:"6px",padding:"4px 12px",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",whiteSpace:"nowrap"}}>{e.period}</span>
              </div>
              <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"8px"}}>
                {e.bullets.map((b,j)=>(
                  <li key={j} style={{display:"flex",gap:"10px",color:sub,fontSize:"14px",lineHeight:1.7}}>
                    <span style={{color:"#22c55e",marginTop:"2px",flexShrink:0}}>▸</span>{b}
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
          <div style={{display:"inline-flex",gap:"8px",background:"rgba(34,197,94,.08)",border:"1px solid rgba(34,197,94,.2)",borderRadius:"6px",padding:"4px 12px",marginBottom:"20px"}}>
            <span style={{color:"#22c55e",fontSize:"12px",fontFamily:"JetBrains Mono,monospace"}}>Undergraduate Thesis</span>
          </div>
          <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"20px",marginBottom:"20px",lineHeight:1.4}}>
            <a href={research.link} target="_blank" rel="noreferrer" style={{color:"#f1f5f9",textDecoration:"none",borderBottom:"1px solid rgba(34,197,94,.4)"}}
              onMouseEnter={e=>e.currentTarget.style.color="#22c55e"}
              onMouseLeave={e=>e.currentTarget.style.color="#f1f5f9"}>
              {research.paper} ↗
            </a>
          </h3>
          <div style={{display:"flex",gap:"24px",flexWrap:"wrap",marginBottom:"24px"}}>
            {research.supervisors.map((s,i)=>(
              <div key={i} style={{background:"rgba(34,197,94,.04)",border:"1px solid rgba(34,197,94,.1)",borderRadius:"10px",padding:"14px 18px"}}>
                <a href={s.link} target="_blank" rel="noreferrer" style={{color:"#22c55e",fontSize:"14px",fontWeight:600,textDecoration:"none"}}>{s.name}</a>
                <p style={{color:sub,fontSize:"12px",marginTop:"3px"}}>{s.role}</p>
                <p style={{color:"#64748b",fontSize:"11px",fontFamily:"JetBrains Mono,monospace",marginTop:"2px"}}>{s.period}</p>
              </div>
            ))}
          </div>
          <ul style={{listStyle:"none",padding:0,display:"flex",flexDirection:"column",gap:"10px"}}>
            {research.bullets.map((b,i)=>(
              <li key={i} style={{display:"flex",gap:"10px",color:sub,fontSize:"14px",lineHeight:1.7}}>
                <span style={{color:"#22c55e",flexShrink:0}}>▸</span>{b}
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
              <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#22c55e",marginBottom:"20px"}}>{g.cat}</h3>
              {g.items.map((s,j)=><SkillBar key={j} name={s.n} value={s.v} delay={j*80} />)}
            </div>
          ))}
        </div>
        <div style={{marginTop:"32px",background:cardBg,border:`1px solid ${border}`,borderRadius:"16px",padding:"28px",backdropFilter:"blur(8px)"}}>
          <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#22c55e",marginBottom:"16px"}}>Other Tools & Technologies</h3>
          <div style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
            {["MATLAB Simulink","LTspice","PowerWorld","Microwind","AutoCAD","MS Office","Google Workspace","Canva","LaTeX"].map(t=>(
              <span key={t} style={{background:"rgba(34,197,94,.06)",border:"1px solid rgba(34,197,94,.15)",color:sub,borderRadius:"8px",padding:"6px 14px",fontSize:"13px"}}>
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
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,197,94,.35)";e.currentTarget.style.transform="translateY(-3px)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border;e.currentTarget.style.transform="translateY(0)"}}>
              <div style={{fontSize:"32px"}}>🏅</div>
              <div>
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",marginBottom:"6px"}}>{c.title}</h3>
                <p style={{color:sub,fontSize:"13px"}}>{c.issuer}</p>
              </div>
              <a href={c.link} target="_blank" rel="noreferrer"
                style={{marginTop:"auto",display:"inline-flex",alignItems:"center",gap:"6px",color:"#22c55e",fontSize:"13px",textDecoration:"none",fontWeight:600}}>
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
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,197,94,.35)"}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor=border}}>
              <div style={{width:"48px",height:"48px",borderRadius:"12px",background:"rgba(34,197,94,.1)",border:"1px solid rgba(34,197,94,.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"22px",marginBottom:"16px"}}>👨‍🏫</div>
              <a href={r.link} target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"16px",color:"#22c55e",marginBottom:"4px"}}>{r.name}</h3>
              </a>
              <p style={{color:sub,fontSize:"13px",marginBottom:"2px"}}>{r.role}</p>
              <p style={{color:"#64748b",fontSize:"12px",marginBottom:"12px"}}>{r.dept}</p>
              <a href={`mailto:${r.email}`} style={{color:"#22c55e",fontSize:"12px",fontFamily:"JetBrains Mono,monospace",textDecoration:"none",display:"flex",alignItems:"center",gap:"6px"}}>
                ✉ {r.email}
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* ── CONTACT ── */}
      <Section id="contact">
        <SectionTitle label="09. contact" title="Get In Touch" />
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"40px",alignItems:"start"}}>
          <div>
            <p style={{color:sub,fontSize:"15px",lineHeight:1.8,marginBottom:"32px"}}>
              I'm currently open to new opportunities. Whether you have a project, question, or just want to say hi — my inbox is always open!
            </p>
            <div style={{display:"flex",flexDirection:"column",gap:"16px"}}>
              {[[`📧`,personal.email,`mailto:${personal.email}`],[`📱`,personal.phone,`tel:${personal.phone}`],[`🔗`,"LinkedIn Profile",personal.linkedin],[`🐙`,"GitHub Profile",personal.github]].map(([icon,label,href])=>(
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  style={{display:"flex",alignItems:"center",gap:"14px",padding:"14px 18px",background:cardBg,border:`1px solid ${border}`,borderRadius:"12px",textDecoration:"none",color:txt,transition:"all .2s",backdropFilter:"blur(8px)"}}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(34,197,94,.35)";e.currentTarget.style.color="#22c55e"}}
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
                <h3 style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"20px",color:"#22c55e",marginBottom:"8px"}}>Message Sent!</h3>
                <p style={{color:sub,fontSize:"14px"}}>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                {[["name","Your Name","text"],["email","Your Email","email"]].map(([field,placeholder,type])=>(
                  <div key={field}>
                    <input type={type} placeholder={placeholder} value={formData[field]} required
                      onChange={e=>setFormData({...formData,[field]:e.target.value})}
                      style={{width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid ${border}`,borderRadius:"10px",padding:"12px 16px",color:txt,fontSize:"14px",fontFamily:"Outfit,sans-serif",outline:"none",boxSizing:"border-box"}}
                      onFocus={e=>{e.target.style.borderColor="rgba(34,197,94,.5)"}}
                      onBlur={e=>{e.target.style.borderColor=border}} />
                  </div>
                ))}
                <textarea placeholder="Your Message" value={formData.message} required rows={5}
                  onChange={e=>setFormData({...formData,message:e.target.value})}
                  style={{width:"100%",background:"rgba(255,255,255,.04)",border:`1px solid ${border}`,borderRadius:"10px",padding:"12px 16px",color:txt,fontSize:"14px",fontFamily:"Outfit,sans-serif",outline:"none",resize:"vertical",boxSizing:"border-box"}}
                  onFocus={e=>{e.target.style.borderColor="rgba(34,197,94,.5)"}}
                  onBlur={e=>{e.target.style.borderColor=border}} />
                <button type="submit" style={{background:"#22c55e",color:"#000",border:"none",borderRadius:"10px",padding:"13px",fontSize:"15px",fontWeight:700,cursor:"pointer",fontFamily:"Outfit,sans-serif",transition:"all .2s",boxShadow:"0 4px 20px rgba(34,197,94,.3)"}}
                  onMouseEnter={e=>{e.currentTarget.style.background="#4ade80"}}
                  onMouseLeave={e=>{e.currentTarget.style.background="#22c55e"}}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* ── FOOTER ── */}
      <footer style={{position:"relative",zIndex:1,borderTop:`1px solid ${border}`,padding:"32px 24px",textAlign:"center"}}>
        <p style={{fontFamily:"Syne,sans-serif",fontWeight:700,fontSize:"18px",color:"#22c55e",marginBottom:"8px"}}>&lt;GSH /&gt;</p>
        <p style={{color:"#64748b",fontSize:"13px",fontFamily:"JetBrains Mono,monospace"}}>© 2026 Gazi Shahariar Hasan · Built with React + Love</p>
      </footer>

      {/* ── BACK TO TOP ── */}
      <button onClick={()=>goto("home")}
        style={{position:"fixed",bottom:"28px",right:"28px",zIndex:50,width:"44px",height:"44px",background:"#22c55e",color:"#000",border:"none",borderRadius:"12px",fontSize:"18px",cursor:"pointer",boxShadow:"0 4px 20px rgba(34,197,94,.4)",transition:"all .2s",display:scrolled?"flex":"none",alignItems:"center",justifyContent:"center"}}
        onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)"}}
        onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)"}}>↑</button>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
        * { box-sizing: border-box; margin:0; padding:0; }
        @media (max-width:768px) {
          .hidden-mobile { display:none !important; }
          .menu-btn { display:flex !important; }
        }
      `}</style>
    </div>
  );
}