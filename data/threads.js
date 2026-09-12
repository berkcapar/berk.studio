/**
 * All page content lives here. Each thread is one "conversation" in the rail.
 *
 * A thread's `turns` render on load; its `chips` are suggested follow-up
 * questions that append a new turn when clicked. Answers are trusted HTML
 * authored in this file (never user input) and are injected with
 * dangerouslySetInnerHTML.
 */

export const EMAIL = "berkcapar@gmail.com";

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
    chips: [
      {
        q: "What does an AI negotiation agent actually do?",
        a: `<p>A buyer at a Fortune 500 has thousands of tail-spend suppliers they'll never have time to call. Pactum's agents identify the commercial opportunity and then negotiate with all of them at once: in chat, in the supplier's language, inside a mandate the buyer sets.</p>
            <h3>Where the product work lives</h3>
            <ul>
              <li><strong>Agent decisioning.</strong> Offer strategy, counteroffers, acceptance thresholds, supplier-specific constraints and savings models. That's the actual surface I define.</li>
              <li><strong>Configurable, not bespoke.</strong> I translate customer-specific workflows into reusable platform capabilities across engagement, orchestration, configuration, analytics and reporting, so the next customer doesn't need a services project.</li>
            </ul>
            <p>The bet: make it self-serve. Every week of onboarding we remove is a week of value the customer gets back.</p>`,
      },
      {
        q: "What are you building on the side?",
        a: `<p>Mobile apps, mostly. Small ones, built end to end, shipped to the store.</p>
            <p>Building them is the easy half. <strong>Distribution is the part I'm still figuring out</strong>, which is humbling, because I've spent a decade on the other side of that problem with a brand, a budget and a sales team behind me. Turns out none of that transfers when it's just you and an App Store listing.</p>
            <p>It's the most useful thing I do outside work: it keeps me close to the craft, and it keeps me honest about how hard the go-to-market really is.</p>`,
      },
      {
        q: "How do you work with engineering and design?",
        a: `<p>Close, and with the problem framed rather than the solution specified. At Pactum I drive discovery, prototyping, roadmap decisions and delivery alongside an Engineering Lead, a Solution Lead, 6 engineers, 1 designer and 1 data engineer. At Yara I functionally led 3 PMs and squads of 15 developers, 2 designers and 3 data analysts.</p>
            <ul>
              <li>I bring the bet, the metric and the constraint. The team brings the shape.</li>
              <li>Discovery and delivery run in parallel, not in sequence. There's always a next thing being de-risked.</li>
              <li>Anything we ship has an instrumented question attached. If we can't say what would prove us wrong, it isn't ready.</li>
              <li>I prototype myself. Rapid prototyping is faster than a spec at settling an argument.</li>
            </ul>`,
      },
    ],
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
              <p class="role">Supplier Engagement Platform <span class="at">&middot; Pactum AI</span></p>
              <p class="blurb">Pactum's highest-ARR product. Lets enterprise procurement teams configure, launch and scale autonomous AI-agent negotiations.</p>
              <ul>
                <li>Define agent negotiation strategy: counteroffers, acceptance thresholds, supplier constraints, human-in-the-loop and savings models. Used every day by teams at Walmart, Otto and Sandoz.</li>
                <li>Led the transformation of enterprise-specific customer workflows into reusable agentic capabilities, so onboarding a new customer stops being a services project.</li>
              </ul>
              <div class="tags"><span class="key">Current</span><span>Agentic AI</span><span>AI guardrails</span><span>Procurement</span></div>
            </div>
          </div>

          <div class="entry">
            <div class="when">2023&ndash;<br>2025</div>
            <div class="entry-body">
              <p class="role">StuntAI <span class="at">&middot; founded &amp; exited</span></p>
              <p class="blurb">AI-powered marketing automation: strategy, content and campaign assets, generated faster.</p>
              <ul>
                <li>Took an AI SaaS product 0-to-1 through discovery, prototyping, launch, customer validation and monetization, to a successful exit.</li>
                <li>Designed reusable agentic workflows from structured business context, prompt orchestration and automation logic.</li>
                <li>Built onboarding, subscription pricing, acquisition funnels and B2B sales processes.</li>
              </ul>
              <div class="tags"><span class="key">Founder &amp; exit</span><span>0-to-1</span><span>B2B SaaS</span><span>MarTech</span></div>
              <a class="out" href="https://www.stuntai.co" target="_blank" rel="noopener noreferrer">stuntai.co &#8599;</a>
            </div>
          </div>

          <div class="entry">
            <div class="when">2024</div>
            <div class="entry-body">
              <p class="role">Safe mixing guidance <span class="at">&middot; Yara, 2 &rarr; 12 countries</span></p>
              <p class="blurb">Lets farmers verify whether leaf fertilisers can be safely mixed with hundreds of plant-protection products.</p>
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
              <p class="role">Nutrition &amp; harvest optimisation <span class="at">&middot; YaraPlus</span></p>
              <p class="blurb">Yara's all-in-one digital farming platform, bringing agronomic tools, services and expert knowledge into one place.</p>
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
              <p class="role">Course recommendations <span class="at">&middot; Stack Overflow</span></p>
              <p class="blurb">An AI/ML-backed advertising product matching courses to what a developer was actually reading about.</p>
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
              <p class="role">CV-to-Profile <span class="at">&middot; Experteer</span></p>
              <p class="blurb">Turning unstructured CV uploads into structured candidate profiles, instantly.</p>
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
              <p class="role">Samsung Galaxy Bizz <span class="at">&middot; 15M devices</span></p>
              <p class="blurb">New-generation content app pre-installed across 15 million Samsung devices in Turkey.</p>
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
    chips: [
      {
        q: "Which one are you proudest of?",
        a: `<p>The safe mixing guidance app, and not because of the 700%.</p>
            <p>Mixing leaf fertiliser with a plant-protection product can ruin a tank, a spray window, or a crop. Farmers were solving it with phone calls and folklore. We shipped something that answered the question in seconds, then took it from 2 countries to 12, which meant re-verifying chemistry, regulation and language market by market.</p>
            <p>The growth was a consequence. <strong>What I'm proud of is that the answer stayed trustworthy in twelve regulatory regimes.</strong></p>`,
      },
      {
        q: "What's a project that didn't work?",
        a: `<p>StuntAI's first direction. We built a genuinely good product and acquired users who enjoyed it and would not pay for it. I'd confused engagement with willingness-to-pay, a mistake I had every framework available to avoid.</p>
            <p>What saved it was how fast we admitted it: interviews, market research, then a hard pivot toward business buyers. The economics worked, and the company exited in 2025.</p>
            <p><em>I'd rather be wrong in month six than right in month thirty.</em></p>`,
      },
    ],
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
              <p class="role">Senior Product Manager <span class="at">&middot; Pactum AI, Berlin</span></p>
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
              <p class="role">Founder &amp; Head of Product <span class="at">&middot; StuntAI, Berlin</span></p>
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
              <p class="role">Group Product Manager <span class="at">&middot; Yara International, Berlin</span></p>
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
              <p class="role">Senior Product Manager, AI/ML AdTech <span class="at">&middot; Stack Overflow, Berlin</span></p>
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
              <p class="role">Senior Product Manager <span class="at">&middot; Experteer, Munich</span></p>
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
              <p class="role">Senior Product Manager / PM for Samsung <span class="at">&middot; Bond Digital, Istanbul</span></p>
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
              <p class="role">Product Manager <span class="at">&middot; Onedio.com, Istanbul</span></p>
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
              <p class="role">BSc Industrial Engineering</p>
              <p class="blurb">TOBB University of Economics and Technology</p>
            </div>
          </div>
          <div class="entry">
            <div class="when">Cert.</div>
            <div class="entry-body">
              <p class="role">Frontend Developer Certificate</p>
              <p class="blurb">Bilge Adam Academy</p>
            </div>
          </div>
        </div>`,
      },
    ],
    chips: [
      {
        q: "What are you looking for next?",
        a: `<p>I'm building at Pactum and not going anywhere. But the shape of work I keep choosing is consistent, so for the record:</p>
            <ul>
              <li>A product where <strong>automation has to earn trust</strong>. The interesting constraint is human, not technical.</li>
              <li>Enterprise buyers, because the adoption problem is honest and the feedback is specific.</li>
              <li>A team small enough that I'm still close to the craft.</li>
            </ul>
            <p>If that sounds like what you're building, <a href="https://www.linkedin.com/in/berkcapar/" target="_blank" rel="noopener noreferrer">LinkedIn</a> is the fastest way to reach me.</p>`,
      },
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
];
