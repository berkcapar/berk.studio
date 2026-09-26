/**
 * All page content lives here. Each thread is one "conversation" in the rail.
 *
 * A thread's `turns` render on load; its `chips` are suggested follow-up
 * questions that append a new turn when clicked. Answers are trusted HTML
 * authored in this file (never user input) and are injected with
 * dangerouslySetInnerHTML.
 */

export const EMAIL = "berkcapar@gmail.com";

// Embed URL of the intro video shown on /how-i-work.
// For a Tella video: https://www.tella.tv/video/<id>/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1&o=1
const INTRO_VIDEO =
  "https://www.tella.tv/video/vid_cmuiauodn000z0agmcu1k35is/embed?b=1&amp;title=1&amp;a=1&amp;loop=0&amp;t=0&amp;muted=0&amp;wt=1&amp;o=1";

export const THREADS = [
  {
    id: "welcome",
    path: "/",
    name: "Start here",
    note: "",
    title: "Start here",
    seoTitle: "Berk Çapar · Senior AI Product Manager",
    seoDescription:
      "Product @ Pactum AI, based in Berlin. Ten years building B2B SaaS, AI agents, AdTech, MarTech and procurement products.",
    turns: [
      {
        q: "Who am I talking to?",
        a: `
        <p class="lede">Product @ <a href="https://pactum.com/" target="_blank" rel="noopener noreferrer">pactum ai</a>, based in berlin. relentlessly curious.</p>
        <p>I'm in product management, about ten years now, across AI / ML, agents, AdTech, MarTech, procurement and B2B SaaS.</p>
        <p>Recently I've spent a lot of time building and babysitting AI agents. Having a lot of fun.</p>
        <p>I've also been building mobile apps on the side, and trying to figure out distribution.</p>
        <p>Besides work, you can find me talking about economics, music, football and sometimes politics.</p>
        <p>If you'd like to get in touch about a project, a collab, an opportunity or anything at all, email me at <a href="mailto:${EMAIL}">${EMAIL}</a>. Or send your message to the chat below and I'll reply real quick.</p>`,
      },
    ],
    chips: [],
  },

  {
    id: "about",
    path: "/about",
    name: "About",
    note: "01",
    title: "About",
    seoTitle: "About · Berk Çapar",
    seoDescription:
      "Ten years of product work across AdTech, mobile at carrier scale, developer platforms, agriculture and enterprise agentic AI.",
    // Hidden for now: the Start here thread already covers the intro.
    // Flip this to show it in the rail again; the content is kept below.
    hidden: true,
    turns: [
      {
        q: "Tell me the longer version.",
        a: `
        <p class="lede">Ten years of shipping, mostly in places where the data was messy, the buyer was an enterprise, and the workflow it replaced was somebody's job.</p>
        <p>I started in Turkish digital media building a self-serve ad platform, moved into mobile at Samsung scale, then relocated: Munich for Experteer, Berlin for Stack Overflow and Yara, and now Pactum AI. Alongside Yara I founded <strong>StuntAI</strong>, took it 0-to-1, and exited in 2025.</p>
        <h3>How I think about the job</h3>
        <ul>
          <li><strong>Ambiguity is the input.</strong> If the problem arrived already specified, it probably didn't need a PM.</li>
          <li><strong>Metrics before features.</strong> A roadmap without a measurement plan is a wish list.</li>
          <li><strong>Systems, not screens.</strong> The interesting complexity sits behind the UI: in the workflow, the data, and the incentives of whoever has to adopt it.</li>
          <li><strong>Coach, don't spec.</strong> Leading PMs at Yara and Experteer taught me that roadmap reviews and PRD feedback scale better than my own opinions do.</li>
          <li><strong>Learn to sell, learn to build.</strong> Naval's line, and the reason I taught myself React and finished Helsinki's Full Stack Open in 2020.</li>
        </ul>
        <h3>What I'm good at</h3>
        <div class="skills">
          <span>Agentic AI &amp; LLM workflows</span><span>Enterprise product management</span><span>0-to-1 development</span><span>Rapid prototyping</span><span>Customer discovery</span><span>Platform product strategy</span><span>Workflow automation</span><span>AI guardrails</span><span>Product analytics &amp; experimentation</span><span>API integrations</span><span>Technical scoping</span><span>Cross-functional execution</span><span>Executive communication</span><span>Procurement &amp; supply chain</span>
        </div>`,
      },
    ],
    chips: [
      {
        q: "What's the through-line across such different industries?",
        a: `<p>Every one of them was a <strong>two-sided adoption problem</strong> wearing a different costume.</p>
            <ul>
              <li>Farmers won't use a tool unless agronomists trust the recommendation.</li>
              <li>Developers won't tolerate an ad unless it's genuinely relevant to what they're learning.</li>
              <li>Recruiters need profiles; candidates need it to take thirty seconds instead of thirty minutes.</li>
              <li>Buyers want savings; suppliers need to feel the deal was fair or they don't sign.</li>
            </ul>
            <p>The domain vocabulary changes. The question doesn't: <em>who has to say yes, and what would make that easy?</em></p>`,
      },
      {
        q: "What did founding StuntAI teach you?",
        a: `<p>That being early to a market is indistinguishable from being wrong, until you move.</p>
            <p>We built an AI SaaS product that generated strategy, content and campaign assets for businesses. Took it 0-to-1 with a hands-on team of 2 developers, 1 designer and 1 data engineer, across discovery, prototyping, launch, customer validation and monetization. Exited in 2025 after validating demand and packaging the platform for acquisition.</p>
            <p>The lesson I carry into every roadmap: <strong>distribution and willingness-to-pay are product decisions</strong>, not things sales figures out afterwards.</p>`,
      },
      {
        q: "You ran StuntAI and Yara at the same time?",
        a: `<p>Yes. StuntAI ran July 2023 to October 2025, Yara September 2023 to May 2025. Deliberate, not accidental.</p>
            <p>Yara was a portfolio role: three products, three PMs, squads of twenty. StuntAI was the opposite: four people, no process, every decision mine. Running both taught me things neither would have alone: how much structure a large org actually needs versus how much it performs, and how fast you can move when the only stakeholder is the customer.</p>
            <p><em>It also meant a lot of evenings. I'd do it again.</em></p>`,
      },
    ],
  },

  {
    id: "shipped",
    path: "/shipped",
    name: "Shipped",
    note: "07",
    title: "Shipped",
    seoTitle: "Shipped · Berk Çapar",
    seoDescription:
      "Products Berk Çapar has shipped: AI negotiation agents at Pactum, digital farming at Yara, ML advertising at Stack Overflow, and a founded-and-exited SaaS.",
    turns: [
      {
        q: "What have you shipped recently?",
        a: `
        <p class="lede">My teams ship something new almost every week. Here are 7 of them I'm really proud of.</p>
        <div class="entries">
          <div class="entry">
            <div class="when">2025&ndash;<br>now</div>
            <div class="entry-body">
              <span class="eyebrow">Platform ownership &middot; Building AI agents</span>
              <h3 class="role">Supplier Engagement Platform <span class="at">&middot; Pactum AI</span></h3>
              <p class="blurb"><strong>Pactum's highest-ARR product.</strong> Lets enterprise procurement teams configure, launch and scale autonomous AI-agent negotiations.</p>
              <p class="mine">I own this product end to end: the strategy, the agent decisioning, and hands-on delivery with an Engineering Lead, a Solution Lead, 6 engineers, a designer and a data engineer.</p>
              <ul>
                <li>Define agent negotiation strategy: counteroffers, acceptance thresholds, supplier constraints, human-in-the-loop and savings models. Used every day by teams at <strong>Walmart, Otto and Sandoz</strong>.</li>
                <li>Led the transformation of enterprise-specific customer workflows into reusable agentic capabilities, so onboarding a new customer stops being a services project.</li>
              </ul>
              <div class="tags"><span class="key">Current</span><span>Agentic AI</span><span>AI guardrails</span><span>Procurement</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">2023&ndash;<br>2025</div>
            <div class="entry-body">
              <span class="eyebrow">Founded and exited</span>
              <h3 class="role">StuntAI <span class="at">&middot; AI marketing automation SaaS</span></h3>
              <p class="blurb">Marketing automation: strategy, content and campaign assets, generated with AI.</p>
              <p class="mine">I founded it and ran product myself: discovery, AI workflow design, technical scoping, pricing and the sale, with two developers, a designer and a data engineer.</p>
              <ul>
                <li>Created an AI SaaS product 0-to-1 through discovery, prototyping, launch, customer validation and monetization, to <strong>a successful exit</strong>, with a team of four.</li>
                <li>Designed reusable agentic workflows from structured business context, prompt orchestration and automation logic.</li>
                <li>Built onboarding, subscription pricing, acquisition funnels and B2B sales processes.</li>
              </ul>
              <div class="tags"><span class="key">Founder &amp; exit</span><span>0-to-1</span><span>B2B SaaS</span><span>MarTech</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">2024</div>
            <div class="entry-body">
              <span class="eyebrow">International expansion</span>
              <h3 class="role">Safe mixing guidance <span class="at">&middot; Yara, 2 &rarr; 12 countries</span></h3>
              <p class="blurb">Lets farmers verify whether leaf fertilisers can be safely mixed with hundreds of plant-protection products.</p>
              <p class="mine">I owned the expansion: which markets, in what order, and the chemistry and regulatory re-verification each one needed before it could launch.</p>
              <ul>
                <li>Led the expansion from 2 to 12 countries: <strong>700% more users, 250% more active users</strong>.</li>
                <li>Each market meant re-verifying chemistry and regulation, not translating strings.</li>
              </ul>
              <div class="tags"><span class="key">700% growth</span><span>Go-to-market</span><span>Internationalisation</span></div>
              <a class="out" href="https://de.yaraplus.com/tankmix/" target="_blank" rel="noopener noreferrer">Tankmix &#8599;</a>
            </div>
          </div>

          <div class="entry">
            <div class="when">2024</div>
            <div class="entry-body">
              <span class="eyebrow">Built and scaled</span>
              <h3 class="role">Nutrition &amp; harvest optimisation <span class="at">&middot; YaraPlus</span></h3>
              <p class="blurb">Yara's all-in-one digital farming platform, bringing agronomic tools, services and expert knowledge into one place.</p>
              <p class="mine">I set the strategy, the roadmap priorities and the success metrics, and coached the product owners who ran these day to day.</p>
              <ul>
                <li>Built and scaled data-driven nutrition recommendation and harvest optimisation products, turning agronomic expertise into scalable digital workflows.</li>
                <li><strong>30% YoY sales growth, 65% YoY engagement growth, +10 NPS.</strong></li>
              </ul>
              <div class="tags"><span>Platform strategy</span><span>Data products</span><span>AgTech</span></div>
              <a class="out" href="https://de.yaraplus.com/" target="_blank" rel="noopener noreferrer">de.yaraplus.com &#8599;</a>
            </div>
          </div>

          <div class="entry">
            <div class="when">2023</div>
            <div class="entry-body">
              <span class="eyebrow">Machine learning / AI product launch &middot; A/B experimentation</span>
              <h3 class="role">Course recommendations <span class="at">&middot; Stack Overflow</span></h3>
              <p class="blurb">An advertising product built on Stack Overflow&rsquo;s own first-party data: an ML model read what a developer was reading and asking about on the platform, and served the course that matched it. No third-party tracking.</p>
              <p class="mine">I led the product and its experimentation: what got recommended, where it appeared, and the A/B tests that doubled click-through in a month.</p>
              <ul>
                <li><strong>150M+ impressions</strong>, and rapid experimentation doubled click-through within one month.</li>
              </ul>
              <div class="tags"><span class="key">150M+ impressions</span><span>Machine learning</span><span>Experimentation</span></div>
              <a class="out" href="https://stackoverflow.blog/2023/02/01/announcing-more-ways-to-learn-and-grow-your-skills/" target="_blank" rel="noopener noreferrer">Stack Overflow blog &#8599;</a>
            </div>
          </div>

          <div class="entry">
            <div class="when">2022</div>
            <div class="entry-body">
              <span class="eyebrow">0-to-1 automation</span>
              <h3 class="role">CV-to-Profile <span class="at">&middot; Experteer</span></h3>
              <p class="blurb">Turning unstructured CV uploads into structured candidate profiles, instantly.</p>
              <p class="mine">I defined the strategy and the success metrics, and set up the agile way of working across in-house engineering and an external design team.</p>
              <ul>
                <li><strong>+25% profile creation, +50% CV upload rates.</strong></li>
                <li>Cut manual profile completion effort, shortening the path from sign-up to searchable profile.</li>
              </ul>
              <div class="tags"><span>0-to-1</span><span>SaaS</span><span>Unstructured data</span></div>
              <a class="out" href="https://streamable.com/mgo1lq" target="_blank" rel="noopener noreferrer">Demo &#8599;</a>
            </div>
          </div>

          <div class="entry">
            <div class="when">2021</div>
            <div class="entry-body">
              <span class="eyebrow">Consumer scale</span>
              <h3 class="role">Samsung Galaxy Bizz <span class="at">&middot; 15M devices</span></h3>
              <p class="blurb">New-generation content app pre-installed across 15 million Samsung devices in Turkey.</p>
              <p class="mine">I led product strategy and the release end to end, from discovery through delivery, and owned the engagement and revenue targets.</p>
              <ul>
                <li><strong>+30% logged-in users, +15% first-day retention, +45% ad revenue.</strong></li>
              </ul>
              <div class="tags"><span class="key">15M devices</span><span>Mobile at scale</span><span>Monetisation</span></div>
              <a class="out" href="https://play.google.com/store/apps/details?id=com.setk.widget&amp;hl=tr&amp;gl=US" target="_blank" rel="noopener noreferrer">Google Play &#8599;</a>
            </div>
          </div>
        </div>`,
      },
    ],
    chips: [],
  },

  {
    id: "blog",
    path: "/blog",
    name: "Blog",
    note: "03",
    title: "Blog",
    seoTitle: "Blog · Berk Çapar",
    seoDescription:
      "Notes on product management: OKRs, defining success, and the parts of the job everyone performs and few examine.",
    turns: [
      {
        q: "Do you write?",
        a: `<p class="lede">Occasionally, mostly about the parts of product management everyone performs and few examine.</p>`,
        posts: true,
      },
    ],
    chips: [
      {
        q: "Give me the short version of the OKR piece.",
        a: `<p>OKRs are a <strong>focus</strong> instrument that most companies deploy as a <strong>reporting</strong> instrument, and then wonder why they feel like overhead.</p>
            <ul>
              <li><strong>Embrace</strong> when there are more good ideas than capacity and someone has to say no out loud.</li>
              <li><strong>Avoid</strong> when the work is genuinely exploratory. Quarterly key results on a discovery team just manufacture dishonest numbers.</li>
              <li><strong>Never</strong> tie them to compensation. The moment you do, you've bought sandbagged targets for the rest of the company's life.</li>
            </ul>
            <p>The test: if your OKRs never cause you to stop doing something, they're a status report wearing a framework's clothes.</p>`,
      },
    ],
  },

  {
    id: "cv",
    path: "/cv",
    name: "CV",
    note: "10y",
    title: "CV",
    seoTitle: "CV · Berk Çapar",
    seoDescription:
      "Product roles since 2016: Pactum AI, StuntAI, Yara International, Stack Overflow, Experteer, Bond Digital and Onedio.",
    turns: [
      {
        q: "Walk me through your experience.",
        a: `
        <p class="lede">Product roles since 2016, across AdTech, mobile at carrier scale, developer platforms, agriculture, and now enterprise agentic AI.</p>
        <div class="entries">
          <div class="entry">
            <div class="when">09/2025&ndash;<br>current</div>
            <div class="entry-body">
              <h3 class="role">Senior Product Manager <span class="at">&middot; Pactum AI, Berlin</span></h3>
              <p class="blurb">Pactum is a B2B SaaS company helping Fortune 500 procurement teams scale their impact with AI agents that identify commercial opportunities and autonomously negotiate supplier terms.</p>
              <ul>
                <li>Own end-to-end product strategy and hands-on execution for the Supplier Engagement Platform, Pactum's highest-ARR product, enabling enterprise procurement teams to configure, launch and scale autonomous AI-agent negotiations.</li>
                <li>Work directly with enterprise procurement teams to translate customer-specific workflows into reusable platform capabilities across supplier engagement, orchestration, configuration, analytics and reporting.</li>
                <li>Define agent decisioning across offer strategy, counteroffers, acceptance thresholds, supplier-specific constraints and savings models.</li>
                <li>Drive discovery, prototyping, roadmap decisions and delivery with an Engineering Lead, Solution Lead, 6 engineers, 1 designer and 1 data engineer; partner with operations, CS and sales to improve conversion and time-to-value.</li>
                <li>Present customer insight, product strategy, risks and roadmap trade-offs to the C-level leadership team.</li>
              </ul>
              <div class="tags"><span class="key">Current</span><span>Agentic AI</span><span>Enterprise</span><span>Procurement</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">07/2023&ndash;<br>10/2025</div>
            <div class="entry-body">
              <h3 class="role">Founder &amp; Head of Product <span class="at">&middot; StuntAI, Berlin</span></h3>
              <p class="blurb">StuntAI was an AI-powered marketing automation platform helping businesses generate strategy, content and campaign assets faster.</p>
              <ul>
                <li>Founded and took an AI SaaS product from 0-to-1 through discovery, prototyping, launch, customer validation, monetization and successful exit.</li>
                <li>Led a hands-on team of 2 developers, 1 designer and 1 data engineer across product discovery, AI workflow design, technical scoping and delivery.</li>
                <li>Designed reusable agentic workflows using structured business context, prompt orchestration and automation logic; built onboarding, subscription pricing, acquisition funnels and B2B sales processes.</li>
                <li>Successfully exited the business after validating demand, building the product and packaging the platform for acquisition.</li>
              </ul>
              <div class="tags"><span class="key">Founder</span><span>0-to-1</span><span>Exit</span><span>B2B SaaS</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">09/2023&ndash;<br>05/2025</div>
            <div class="entry-body">
              <h3 class="role">Group Product Manager <span class="at">&middot; Yara International, Berlin</span></h3>
              <p class="blurb">Yara is a global agriculture technology company building digital farming products that help farmers and commercial teams improve crop productivity, sustainability and decision-making.</p>
              <ul>
                <li>Managed a product portfolio of 3 digital farming products within Yara's 8-product portfolio, functionally leading 3 PMs/product owners and cross-functional squads of 15 developers, 2 designers and 3 data analysts.</li>
                <li>Defined product strategy, roadmap priorities and success metrics across nutrition recommendations, harvest optimization and safe mixing guidance products.</li>
                <li>Developed PMs/product owners through regular roadmap reviews, discovery coaching, PRD feedback, prioritization support and stakeholder decision-making.</li>
                <li>Built and scaled data-driven nutrition recommendation and harvest optimization products, driving 30% YoY sales growth, 65% YoY engagement growth and +10 NPS improvement.</li>
                <li>Expanded safe mixing guidance mobile app from 2 to 12 countries, increasing users by 700% and active users by 250%.</li>
              </ul>
              <div class="tags"><span>Portfolio leadership</span><span>Coaching PMs</span><span>AgTech</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">06/2022&ndash;<br>08/2023</div>
            <div class="entry-body">
              <h3 class="role">Senior Product Manager, AI/ML AdTech <span class="at">&middot; Stack Overflow, Berlin</span></h3>
              <p class="blurb">Stack Overflow is one of the world's largest developer communities and knowledge platforms, serving 100M+ monthly users.</p>
              <ul>
                <li>Led product strategy and experimentation for AI/ML-backed AdTech products, connecting advertiser goals with contextual developer intent and campaign performance data.</li>
                <li>Launched an AI/ML-backed course recommendation advertising product, reaching 150M+ impressions and doubling CTR within one month.</li>
                <li>Owned a portfolio of 10+ AdTech products across native advertising, targeting, delivery, reporting, campaign setup and performance optimization.</li>
                <li>Partnered with engineering, design, data, sales, ad operations and customer-facing teams to balance advertiser outcomes, developer experience, revenue growth and technical scalability.</li>
              </ul>
              <div class="tags"><span>Machine learning</span><span>AdTech</span><span>100M+ users</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">08/2021&ndash;<br>04/2022</div>
            <div class="entry-body">
              <h3 class="role">Senior Product Manager <span class="at">&middot; Experteer, Munich</span></h3>
              <p class="blurb">Executive recruitment SaaS platform serving 6M+ professionals.</p>
              <ul>
                <li>Led automated CV-to-profile creation, turning unstructured CV uploads into structured candidate profiles and increasing profile creation by 25% and CV upload rates by 50%.</li>
                <li>Improved candidate onboarding and activation by reducing manual profile completion effort and creating a faster path from sign-up to searchable professional profile.</li>
                <li>Functionally led and coached 2 PMs/product owners on roadmap prioritization, discovery, requirements definition, stakeholder communication and delivery execution.</li>
                <li>Established Agile/Scrum ways of working across in-house engineering and external design teams, improving delivery rhythm, product quality and cross-functional collaboration.</li>
              </ul>
              <div class="tags"><span>SaaS</span><span>Unstructured data</span><span>Coaching PMs</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">09/2017&ndash;<br>08/2021</div>
            <div class="entry-body">
              <h3 class="role">Senior Product Manager / PM for Samsung <span class="at">&middot; Bond Digital, Istanbul</span></h3>
              <p class="blurb">Bond Digital is a leading AdTech and Samsung mobile products partner, building advertising, pre-install and mobile engagement products reaching millions of users across Samsung devices and major digital publishers.</p>
              <ul>
                <li>Led product strategy for Samsung Galaxy Bizz, an app installed on 15M Samsung devices, increasing logged-in users by 30%, first-day retention by 15% and ad revenue by 45%.</li>
                <li>Optimized Samsung's pre-install product portfolio across 10+ partner brands, increasing product revenue by 40% through better packaging, onboarding, activation and performance tracking.</li>
                <li>Built native, video and gamified ad products across 20+ high-traffic publishers, increasing CTR by 30%, video ad revenue by 25% and user engagement by 40%.</li>
                <li>Partnered with Samsung, publishers, advertisers, engineering, design and ad operations teams to ship scalable advertising and monetization products across multiple channels.</li>
              </ul>
              <div class="tags"><span>Mobile at scale</span><span>Samsung</span><span>Monetisation</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">12/2016&ndash;<br>09/2017</div>
            <div class="entry-body">
              <h3 class="role">Product Manager <span class="at">&middot; Onedio.com, Istanbul</span></h3>
              <p class="blurb">Onedio is a leading digital media platform in T&uuml;rkiye, reaching millions of monthly users through viral content, social distribution and branded advertising products.</p>
              <ul>
                <li>Built and launched a self-serve advertising platform, enabling 50+ brands to launch 700+ campaigns and creating a new scalable revenue stream.</li>
                <li>Turned manual branded-content and campaign workflows into a repeatable digital product experience for advertisers, sales teams and campaign operations.</li>
                <li>Defined campaign setup, targeting, reporting and advertiser workflow requirements with sales, editorial, design and engineering.</li>
              </ul>
              <div class="tags"><span>Self-serve</span><span>0-to-1</span><span>New revenue</span></div>
            </div>
          </div>
        </div>

        <h3>Education and training</h3>
        <div class="entries">
          <div class="entry">
            <div class="when">Degree</div>
            <div class="entry-body">
              <h3 class="role">BSc Industrial Engineering</h3>
              <p class="blurb">TOBB University of Economics and Technology</p>
            </div>
          </div>
          <div class="entry">
            <div class="when">Cert.</div>
            <div class="entry-body">
              <h3 class="role">Frontend Developer Certificate</h3>
              <p class="blurb">Bilge Adam Academy</p>
            </div>
          </div>
        </div>`,
      },
    ],
    chips: [
      {
        q: "How do I get in touch?",
        a: `<div class="panel">
              <span class="eyebrow">Contact</span>
              <p><a href="https://www.linkedin.com/in/berkcapar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>. Fastest, I read everything.</p>
              <p><a href="mailto:${EMAIL}">${EMAIL}</a>. For anything longer.</p>
              <p><a href="https://x.com/bcaparing" target="_blank" rel="noopener noreferrer">X / @bcaparing</a>. For the shorter thoughts.</p>
            </div>
            <p>Based in Berlin, comfortable with remote and with the kind of travel enterprise work requires.</p>`,
      },
    ],
  },
  {
    id: "linear",
    path: "/linear-cover-letter-video",
    name: "For Linear",
    note: "",
    title: "For Linear",
    // A cover letter for one application. Reachable by its link only: not in
    // the rail, not in the sitemap, and marked noindex on its own page.
    hidden: true,
    turns: [
      {
        q: "What's this?",
        a: `
        <p class="lede">hey Linear team.<img class="brand" src="/linear-logo-light.svg" alt="Linear" width="200" height="200"></p>
        <p>Cover letters tend to sound the same. And much of good product work is making complex ideas clear to busy people. So rather than write one, I recorded one.</p>
        <div class="video">
          <iframe src="https://www.tella.tv/video/vid_cmufggjbj005f0agm6opk96os/embed?b=1&amp;title=1&amp;a=1&amp;loop=0&amp;t=0&amp;muted=0&amp;wt=1&amp;o=1" title="Berk Çapar, video cover letter for Linear" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <p>The prototype I walk through in the video is live, so you can click around it yourself: <a href="https://negotiation-orchestrator-prototype.vercel.app/" target="_blank" rel="noopener noreferrer">negotiation-orchestrator-prototype.vercel.app</a></p>
        <p>If you'd like the long version, it's all here: what I've <a href="/shipped">shipped</a>, my <a href="/cv">CV</a>, and <a href="/blog">some writing</a>. Looking forward to chatting more.</p>`,
      },
    ],
    chips: [],
  },
  {
    id: "how-i-work",
    path: "/how-i-work",
    name: "How I work",
    note: "",
    title: "How I work",
    // A short video intro sent with referral requests on LinkedIn, to people
    // I haven't met. Reachable by its link only: not in the rail, not in the
    // sitemap, and marked noindex on its own page.
    hidden: true,
    turns: [
      {
        q: "Why am I getting this?",
        a: `
        <p class="lede">if you're reading this, it's because <mark class="marker">your company caught my attention</mark>.</p>
        <p>We haven't met yet. I'm a product leader and builder with about ten years of experience, based in Berlin. Currently I build AI agents that negotiate with suppliers on behalf of large enterprises for <a href="https://pactum.com/" target="_blank" rel="noopener noreferrer">Pactum AI</a>. I'm looking for my next role, and I'd rather show you how I work than send you just a CV and a LinkedIn message.</p>
        <p>So I recorded a couple of minutes on how I approach product work.</p>
        <div class="video">
          <iframe src="${INTRO_VIDEO}" title="Berk Çapar, how I approach product work" allow="autoplay; fullscreen" allowfullscreen></iframe>
        </div>
        <p>If it resonates and you think I'd fit a team at your company, a referral would mean a lot. And if it's not a fit, no worries at all, thanks for watching.</p>
        <p>If you want more: what I've <a href="/shipped">shipped</a>, my <a href="/cv">CV</a>, and <a href="/blog">some writing</a>.</p>`,
      },
    ],
    chips: [],
  },
];
