import React, { useState } from 'react';
import Layout from './Layout';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <Layout>
      <div className="resume-container">
      <h1 className='more-about-me'>More about me</h1>

        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Work Experience
          </button>
          <button 
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education
          </button>
        </div>


        {activeTab === 'experience' && (
          <div className="experience-section">
            <div className="experience-item">
              <h2>Product Manager @ Yara Digital Farming</h2>
              <p className="date">September 2023 - Present</p>
              <p className="company-desc">
                Yara is a global leader in sustainable agriculture, providing digital farming tools to enhance
                food productivity and reduce environmental footprint.
              </p>
              <div className="achievements">
                <p>• Oversaw a cross-functional team (10 Developers, 2 Designers, 3 Data Analysts) to deliver three core digital solutions within Yara's 8-product portfolio.</p>
                <p>• Aligned each product's strategy with corporate goals, ensuring consistent growth and expansions, high adoption rates, and user-centric innovations.</p>
                <p>• Expanded a consumer-faced mobile app from 2 to 12 countries, enabling farmers to safely combine agricultural products and driving a 700% user increase and 250% boost in active users, resulting in broader market adoption and heightened customer satisfaction.</p>
                <p>• Led end-to-end product discovery and enhancements of a web application, enabling farmers to optimize harvest timing and achieve a 45 NPS (up 10 points) and 65% YoY increase in user engagement.</p>
              </div>
            </div>

            <div className="experience-item">
              <h2>Product Manager @ Stack Overflow</h2>
              <p className="date">June 2022 - August 2023</p>
              <p className="company-desc">
                Stack Overflow is the world's largest online community for developers, serving over 100 million users monthly.
              </p>
              <div className="achievements">
                <div className="solution">
                  <h3>Machine Learning Ad Project</h3>
                  <p>• Led ML-powered course recommendation system development by partnering with Udemy and Pluralsight, reaching 150M+ views.</p>
                  <p>• Conducted rapid A/B testing, doubling click-through rates (100% increase in CTRs) within one month.</p>
                </div>
                <div className="solution">
                  <h3>AdTech Products Development</h3>
                  <p>• Led the development of new native advertising features and maintained over 10 AdTech products on the platform.</p>
                  <p>• Developed new native advertising features based on user and advertiser needs</p>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <h2>Product Manager @ Experteer</h2>
              <p className="date">August 2021 - April 2022</p>
              <p className="company-desc">
                Experteer is Europe's premium career and recruitment SaaS platform, serving over 6 million executives and professionals seeking their next career move.
              </p>
              <div className="achievements">
                <div className="solution">
                  <h3>Automated Profile Creation Project</h3>
                  <p>• Led the company's most complex project to automate profile creation from CV uploads.</p>
                  <p>• Established an Agile environment for in-house developers and external design teams.</p>
                  <p>• Increased profile creation numbers by 25% and CV upload rates by 50%.</p>
                </div>
                <div className="solution">
                  <h3>Core Product Management</h3>
                  <p>• Tracked and prioritized bugs and feature requests from internal teams and users.</p>
                  <p>• Ensured timely resolution to enhance product performance and user satisfaction.</p>
                </div>
                <div className="solution">
                  <h3>Team Leadership & Mentorship</h3>
                  <p>• Mentored junior product managers and working students.</p>
                  <p>• Participated in hiring and onboarding of new product managers.</p>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <h2>Senior Product Manager @ Bond Digital</h2>
              <p className="date">December 2018 - August 2021</p>
              <p className="company-desc">
                Bond Digital represents the product development and sales of Samsung's digital mobile products in Turkey, including mobile apps, Samsung Internet browser, and pre-install technologies.
              </p>
              <div className="achievements">
                <div className="solution">
                  <h3>Samsung Galaxy Bizz</h3>
                  <p>• Led product strategy for a content app on 15M devices, ensuring on-time release.</p>
                  <p>• Achieved 30% increase in logged-in users, 15% boost in first-day retention, and 45% growth in advertising revenue.</p>
                </div>
                <div className="solution">
                  <h3>Samsung OMC Project</h3>
                  <p>• Analyzed performance data for 10+ brands and implemented optimization plans.</p>
                  <p>• Drove a 40% revenue increase over the previous period.</p>
                </div>
                <div className="solution">
                  <h3>App Wizard</h3>
                  <p>• Revamped a pre-install technology for Samsung devices in Turkey.</p>
                  <p>• Integrated 40+ apps seamlessly, making it the company's most profitable product.</p>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <h2>Product Manager @ Bond Digital</h2>
              <p className="date">September 2017 - November 2018</p>
              <p className="company-desc">
                Bond Digital is an ad-tech company that develops and integrates advanced ad-tech solutions for its inventory of 60+ digital publishers.
              </p>
              <div className="achievements">
                <div className="solution">
                  <h3>Native Advertising Platform</h3>
                  <p>• Developed user-centered native ad solutions, increasing publishers' CTR by 30%.</p>
                  <p>• Successfully integrated the platform with 20+ publishers, driving revenue growth.</p>
                </div>
                <div className="solution">
                  <h3>Video Advertising Management System</h3>
                  <p>• Defined the strategy for a video monetization system.</p>
                  <p>• Achieved a 25% increase in video ad revenue post-launch.</p>
                </div>
                <div className="solution">
                  <h3>Gamified Ad Experience</h3>
                  <p>• Led the development of a gamification strategy.</p>
                  <p>• Enhanced user engagement by 40% and boosted publisher revenue by 15%.</p>
                </div>
              </div>
            </div>

            <div className="experience-item">
              <h2>Product Manager @ Onedio.com</h2>
              <p className="date">August 2016 - September 2017</p>
              <p className="company-desc">
                Onedio is a leading digital media platform in Turkey, offering engaging content and innovative advertising solutions to connect brands with diverse audiences.
              </p>
              <div className="achievements">
                <div className="solution">
                  <h3>Self-Serve Advertising Platform</h3>
                  <p>• Developed and led the strategy for a self-serve advertising platform, automating ad placements for SMBs.</p>
                  <p>• Drove 50+ brands to launch 700+ campaigns.</p>
                  <p>• Guided cross-functional teams in continuous platform enhancements, aligning with user feedback and company goals to deliver a significant new revenue stream.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="education-section">
            <div className="experience-item">
              <h2>Frontend Developer Certificate</h2>
              <p className="date">2016</p>
              <p className="company-desc">Bilge Adam Academy</p>
              <div className="achievements">
                <p>• Intensive training program focused on modern web development technologies</p>
                <p>• Learned HTML, CSS, JavaScript, and related frontend frameworks</p>
              </div>
            </div>

            <div className="experience-item">
              <h2>Bachelor's Degree in Industrial Engineering</h2>
              <p className="date">2012 - 2016</p>
              <p className="company-desc">TOBB University of Economics and Technology</p>
              <div className="achievements">
                <p>• Studied optimization, process improvement, and systems engineering</p>
                <p>• Combined engineering principles with business process optimization</p>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .resume-container {
            max-width: 1000px;
            margin: 0 auto;
            padding-top: 4rem;
            color: #fff;
          }

          .navigation {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .nav-right {
            display: flex;
            gap: 2rem;
          }

          .navigation a {
            color: lightsalmon;
            text-decoration: none;
            font-weight: 500;
            transition: opacity 0.2s;
          }

          .navigation a:hover {
            opacity: 0.8;
          }

          h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            
          }

          .experience-item {
            margin-bottom: 4rem;
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            transition: transform 0.2s;
          }

          .experience-item:hover {
            transform: translateY(-4px);
          }

          h2 {
            font-size: 1.5rem;
            color: #fff;
            margin-bottom: 0.5rem;
          }

          .date {
            color: lightsalmon;
            font-size: 0.9rem;
            margin-bottom: 1rem;
          }

          .company-desc {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1.5rem;
            font-size: 1.1rem;
            line-height: 1.6;
          }

          .achievements p {
            margin-bottom: 0.75rem;
            line-height: 1.6;
          }

          .solution {
            margin-top: 1.5rem;
            padding-left: 1rem;
            border-left: 2px solid lightsalmon;
          }

          .solution h3 {
            color: lightsalmon;
            margin-bottom: 0.75rem;
            font-size: 1.1rem;
          }

          .tabs {
            display: flex;
            gap: 1rem;
            margin-bottom: 0.5rem;
          }

          .tab {
            padding: 0.5rem 0rem;
            background: none;
            border: none;
            font-size: 1rem;
            font-weight: 500;
            color: lightsalmon;
            cursor: pointer;
            transition: opacity 0.2s;
          }

          .tab.active {
            opacity: 0.8;
          }
          
          @media (max-width: 768px) {
            .resume-container {
              padding: 1rem;
              margin-top: 5rem;
            }

            h1 {
              font-size: 2rem;
              margin-bottom: 1rem;
            }

            .experience-item {
              padding: 1.5rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Resume; 