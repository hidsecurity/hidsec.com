import React from 'react';
import PageHeader from '../components/PageHeader';
import { Shield, Code, Trophy, Server, Cpu, Wifi } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <PageHeader 
        title="About Me" 
        subtitle="Halil Ibrahim Dag"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bio Section */}
        <section className="mb-16">
          <div className="bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold font-mono text-green-400 mb-6">Who Am I?</h2>
            
            <div className="space-y-4 text-green-300/80">
              <p>
                I'll change this when I have something to tell about me.
              </p>

            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono text-green-400 mb-6">Areas of Interest</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillCard 
              icon={<Shield className="h-8 w-8 text-green-400" />}
              title="Penetration Testing"
              description="Ethical hacking techniques to identify and exploit vulnerabilities before malicious actors can."
            />
            <SkillCard 
              icon={<Wifi className="h-8 w-8 text-green-400" />}
              title="Network Security"
              description="Protecting network infrastructure from unauthorized access and attacks."
            />
            <SkillCard 
              icon={<Cpu className="h-8 w-8 text-green-400" />}
              title="Malware Analysis"
              description="Studying malicious software to understand its behavior, purpose, and how to mitigate threats."
            />
            <SkillCard 
              icon={<Trophy className="h-8 w-8 text-green-400" />}
              title="CTF Competitions"
              description="Participating in Capture The Flag events to sharpen skills and learn from the community."
            />
          </div>
        </section>
        
        {/* Philosophy Section */}
        {/* Philosophy Section Placeholder */}
<section className="mb-16">
  <div className="bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg p-6 md:p-8">
    <h2 className="text-2xl font-bold font-mono text-green-400 mb-6">My Philosophy</h2>
    <p className="text-green-300/80">[I'll update this later.]</p>
  </div>
</section>

        
        {/* Contact CTA */}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-bold font-mono text-green-400 mb-6">Get In Touch</h2>
          <p className="text-green-300/80 mb-8">
            Have questions, suggestions, or want to collaborate? I'd love to hear from you!
          </p>
          <a 
            href="mailto:contact@hidsec.com" 
            className="inline-block px-6 py-3 bg-green-500/20 text-green-400 font-mono font-bold border border-green-500/30 rounded-md hover:bg-green-500/30 transition-colors"
          >
            contact@hidsec.com
          </a>
        </section>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-green-900/40 rounded-lg p-6 transform transition duration-300 hover:scale-[1.02] hover:border-green-500/40">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-3 text-xl font-bold font-mono text-green-400">{title}</h3>
      </div>
      <p className="text-green-300/80">{description}</p>
    </div>
  );
};

export default AboutPage;