import React from 'react';
import { 
  FaPaw, 
  FaMobile, 
  FaRocket, 
  FaCogs, 
  FaCode, 
  FaGlobe, 
  FaAndroid, 
  FaStore, 
  FaChartLine, 
  FaPlay, 
  FaGraduationCap,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
  FaDollarSign,
  FaHeart,
  FaShieldAlt,
  FaBrain,
  FaMapMarkerAlt
} from 'react-icons/fa';

// Componentes para conteúdo específico
const StatsGrid = ({ stats }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  }}>
    {stats.map((stat, index) => (
      <div 
        key={index} 
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '2.5rem',
          borderRadius: '20px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          animation: 'fadeInUp 0.6s ease-out ' + (index * 0.1) + 's both',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-10px)';
          e.target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
        }}
      >
        <span style={{
          fontSize: '3.5rem',
          fontWeight: '800',
          color: 'var(--primary-color)',
          marginBottom: '0.5rem',
          display: 'block'
        }}>
          {stat.number}
        </span>
        <div style={{
          fontSize: '1.2rem',
          color: 'var(--text-color)',
          fontWeight: '500'
        }}>
          {stat.label}
        </div>
      </div>
    ))}
  </div>
);

const FeatureGrid = ({ features }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2.5rem',
    margin: '3rem 0'
  }}>
    {features.map((feature, index) => (
      <div 
        key={index}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '3rem',
          borderRadius: '25px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          animation: 'fadeInUp 0.6s ease-out ' + (index * 0.1) + 's both',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'translateY(-15px) scale(1.02)';
          e.target.style.boxShadow = '0 30px 80px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'translateY(0) scale(1)';
          e.target.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div style={{
          fontSize: '4rem',
          marginBottom: '1.5rem',
          color: 'var(--primary-color)'
        }}>
          {feature.icon}
        </div>
        <h3 style={{
          fontSize: '1.8rem',
          marginBottom: '1rem',
          color: 'var(--dark-color)',
          fontWeight: '600'
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.6',
          color: 'var(--text-light)'
        }}>
          {feature.description}
        </p>
      </div>
    ))}
  </div>
);

const TechStack = ({ technologies }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    margin: '3rem 0'
  }}>
    {technologies.map((tech, index) => (
      <div 
        key={index}
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          padding: '2.5rem',
          borderRadius: '20px',
          boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
          animation: 'scaleIn 0.6s ease-out ' + (index * 0.1) + 's both',
          transition: 'all 0.3s ease',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 25px 60px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.1)';
        }}
      >
        <div style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: 'var(--primary-color)'
        }}>
          {tech.icon}
        </div>
        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: '0.5rem',
          color: 'var(--dark-color)',
          fontWeight: '600'
        }}>
          {tech.name}
        </h3>
        <p style={{
          fontSize: '1rem',
          color: 'var(--text-light)',
          lineHeight: '1.6'
        }}>
          {tech.description}
        </p>
      </div>
    ))}
  </div>
);

const CodeWindow = ({ title, children }) => (
  <div style={{
    background: '#1e1e1e',
    borderRadius: '15px',
    overflow: 'hidden',
    margin: '3rem auto',
    maxWidth: '900px',
    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.3)',
    animation: 'fadeInUp 0.6s ease-out'
  }}>
    <div style={{
      background: '#2d2d2d',
      padding: '15px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '15px'
    }}>
      <div style={{ display: 'flex', gap: '8px' }}>
        <span style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#ff5f56',
          display: 'block'
        }}></span>
        <span style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#ffbd2e',
          display: 'block'
        }}></span>
        <span style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: '#27ca3f',
          display: 'block'
        }}></span>
      </div>
      <div style={{
        color: '#ffffff',
        fontSize: '0.9rem',
        fontWeight: '500'
      }}>
        {title}
      </div>
    </div>
    <div style={{
      padding: '2rem',
      background: '#1e1e1e',
      color: '#d4d4d4',
      fontFamily: "'Monaco', 'Menlo', 'Ubuntu Mono', monospace",
      fontSize: '1rem',
      lineHeight: '1.6',
      overflowX: 'auto'
    }}>
      {children}
    </div>
  </div>
);

const TeamMember = ({ member }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.95)',
    padding: '2.5rem',
    borderRadius: '25px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'all 0.4s ease',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    cursor: 'pointer',
    maxWidth: '400px',
    margin: '0 auto'
  }}>
    <div style={{
      width: '120px',
      height: '120px',
      borderRadius: '50%',
      background: 'var(--gradient-primary)',
      color: 'white',
      fontSize: '3rem',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
    }}>
      {member.avatar || member.name.split(' ').map(n => n[0]).join('')}
    </div>
    <h3 style={{
      fontSize: '1.8rem',
      marginBottom: '0.5rem',
      color: 'var(--dark-color)',
      fontWeight: '600'
    }}>
      {member.name}
    </h3>
    <p style={{
      fontSize: '1.2rem',
      color: 'var(--primary-color)',
      marginBottom: '1.5rem',
      fontWeight: '500'
    }}>
      {member.role}
    </p>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem'
    }}>
      {member.linkedin && (
        <a 
          href={member.linkedin} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--gradient-primary)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem'
          }}
        >
          <FaLinkedin />
        </a>
      )}
      {member.github && (
        <a 
          href={member.github} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--gradient-dark)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem'
          }}
        >
          <FaGithub />
        </a>
      )}
      {member.email && (
        <a 
          href={'mailto:' + member.email}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--gradient-secondary)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem'
          }}
        >
          <FaEnvelope />
        </a>
      )}
      {member.website && (
        <a 
          href={member.website} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            background: 'var(--gradient-accent)',
            color: 'white',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontSize: '1.2rem'
          }}
        >
          <FaExternalLinkAlt />
        </a>
      )}
    </div>
  </div>
);

const AppMockup = () => (
  <div style={{
    width: '350px',
    height: '700px',
    margin: '3rem auto',
    background: 'linear-gradient(135deg, #000, #333)',
    borderRadius: '40px',
    padding: '20px',
    boxShadow: '0 30px 80px rgba(0, 0, 0, 0.3)',
    animation: 'floating 4s ease-in-out infinite',
    position: 'relative',
    overflow: 'hidden'
  }}>
    <div style={{
      width: '100%',
      height: '100%',
      background: 'var(--gradient-primary)',
      borderRadius: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      position: 'relative'
    }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <FaPaw size={50} />
        <h3 style={{ margin: '1rem 0', fontSize: '2rem', fontWeight: '700' }}>
          PetCare AI
        </h3>
        <p style={{ marginBottom: '2rem', opacity: 0.9, fontSize: '1.2rem' }}>
          Cuidado Inteligente
        </p>
        <div style={{
          background: 'rgba(255, 255, 255, 0.1)',
          padding: '1.5rem',
          borderRadius: '15px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
            ✅ Cardápios IA
          </div>
          <div style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
            ✅ Análises Avançadas
          </div>
          <div style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
            ✅ Localização
          </div>
          <div style={{ margin: '0.5rem 0', fontSize: '1rem', opacity: 0.9 }}>
            ✅ Tracking Saúde
          </div>
        </div>
      </div>
    </div>
  </div>
);

const CurrencyDisplay = ({ amount = 25 }) => {
  const [rate, setRate] = React.useState(5.0);
  
  React.useEffect(() => {
    fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(res => res.json())
      .then(data => setRate(data.rates.BRL))
      .catch(() => setRate(5.0));
  }, []);

  return (
    <div style={{
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '1.5rem 2rem',
      borderRadius: '15px',
      margin: '1rem 0',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textAlign: 'center'
    }}>
      <span style={{
        fontSize: '2rem',
        fontWeight: '700',
        color: 'var(--primary-color)',
        display: 'block'
      }}>
        {'USD $' + amount + '.00'}
      </span>
      <div style={{
        fontSize: '1rem',
        color: 'var(--text-light)',
        marginTop: '0.5rem'
      }}>
        {'≈ R$ ' + (amount * rate).toFixed(2)}
      </div>
    </div>
  );
};

// Dados dos slides
export const slidesData = [
  // Slide 1: Título
  {
    type: 'title',
    layout: 'center',
    icon: '🐾',
    title: 'PetCare AI',
    subtitle: 'Cuidado Inteligente para seu Pet',
    content: (
      <div>
        <p style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Aplicativo desenvolvido com <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>React Native</span> e <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>Inteligência Artificial</span>
        </p>
        <StatsGrid stats={[
          { number: '100%', label: 'React Native' },
          { number: 'AI', label: 'Google Gemini' },
          { number: '15+', label: 'Funcionalidades' }
        ]} />
        <TeamMember member={{
          name: 'Estevam Souza',
          role: 'Desenvolvedor Full Stack & Mobile',
          linkedin: 'https://linkedin.com/in/estevam-souza',
          github: 'https://github.com/estevam5s',
          email: 'contato@estevamsouza.com.br',
          website: 'https://estevamsouza.com.br'
        }} />
        <p style={{ fontSize: '1.3rem', marginTop: '2rem' }}>
          <strong>Disciplina:</strong> Desenvolvimento para Android
        </p>
      </div>
    )
  },

  // Slide 2: Sobre o App
  {
    type: 'content',
    layout: 'center',
    title: '📱 Sobre o PetCare AI',
    subtitle: 'Revolução no Cuidado com Pets',
    content: (
      <div>
        <AppMockup />
        <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          O PetCare AI representa uma <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>nova era</span> no cuidado de animais de estimação, combinando tecnologia de ponta com amor pelos pets.
        </p>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.8' }}>
          Desenvolvido com <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>React Native</span> e integração avançada com <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Google Gemini AI</span> para experiências personalizadas.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <a href="https://petcareai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 2rem',
            background: 'var(--gradient-primary)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.1rem',
            boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
            transition: 'all 0.3s ease'
          }}>
            <FaExternalLinkAlt />
            Visitar Site Oficial
          </a>
        </div>
      </div>
    )
  },

  // Slide 3: Funcionalidades
  {
    type: 'content',
    layout: 'wide',
    title: '🚀 Funcionalidades Principais',
    content: (
      <FeatureGrid features={[
        {
          icon: <FaBrain />,
          title: 'Cardápios Inteligentes',
          description: 'Alimentação personalizada gerada por IA baseada em tipo, idade, peso e preferências específicas do pet.'
        },
        {
          icon: <FaHeart />,
          title: 'Cuidados Personalizados',
          description: 'Dicas de saúde e bem-estar adaptadas para cada animal com análise comportamental avançada.'
        },
        {
          icon: <FaChartLine />,
          title: 'Analytics Avançados',
          description: 'Gráficos interativos de peso, humor, gastos e registros de saúde com insights preditivos.'
        },
        {
          icon: <FaMapMarkerAlt />,
          title: 'Localização Inteligente',
          description: 'Encontre pet shops, veterinários e serviços próximos com análise de reviews e preços.'
        }
      ]} />
    )
  },

  // Slide 4: Tecnologias Mobile
  {
    type: 'content',
    layout: 'center',
    title: '⚡ Stack Tecnológico Mobile',
    subtitle: 'Tecnologias de Vanguarda',
    content: (
      <div>
        <TechStack technologies={[
          {
            icon: <FaMobile />,
            name: 'React Native',
            description: 'Framework principal para desenvolvimento mobile cross-platform'
          },
          {
            icon: <FaBrain />,
            name: 'Google Gemini AI',
            description: 'API avançada de IA para conteúdo personalizado'
          },
          {
            icon: <FaAndroid />,
            name: 'Native Modules',
            description: 'Módulos nativos para funcionalidades do sistema'
          },
          {
            icon: <FaShieldAlt />,
            name: 'AsyncStorage',
            description: 'Persistência local segura de dados'
          }
        ]} />
      </div>
    )
  },

  // Slide 5: Arquitetura
  {
    type: 'content',
    layout: 'wide',
    title: '🏗️ Arquitetura Enterprise',
    subtitle: 'Design Patterns Avançados',
    content: (
      <FeatureGrid features={[
        {
          icon: <FaCogs />,
          title: 'Context API',
          description: 'Gerenciamento de estado global com AuthContext e PetContext para fluxo otimizado.'
        },
        {
          icon: <FaShieldAlt />,
          title: 'Service Layer',
          description: 'Camada de serviços isolada com error handling robusto e retry logic.'
        },
        {
          icon: <FaCode />,
          title: 'Component Library',
          description: 'Biblioteca de componentes reutilizáveis com design system consistente.'
        },
        {
          icon: <FaRocket />,
          title: 'Performance',
          description: 'Otimizações com memoization, lazy loading e code splitting.'
        }
      ]} />
    )
  },

  // Slide 6: Código
  {
    type: 'content',
    layout: 'center',
    title: '💻 Integração IA',
    subtitle: 'Google Gemini Implementation',
    content: (
      <div>
        <CodeWindow title="GeminiService.js">
          <pre style={{ margin: 0, fontSize: '0.9rem' }}>
{
`class GeminiService {
  async generateMealPlan(petData) {
    const prompt = 'Crie um cardápio para ' + petData.type + 
    ' de ' + petData.age + ' anos, ' + petData.weight + 'kg';
    
    try {
      const response = await fetch(
        API_URL + '?key=' + API_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      });
      
      return await response.json();
    } catch (error) {
      console.error('Erro:', error);
      return { fallback: 'Cardápio básico...' };
    }
  }
}`
}
          </pre>
        </CodeWindow>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.8', marginTop: '2rem' }}>
          Integração robusta com <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>error handling</span> e <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>fallback responses</span>.
        </p>
      </div>
    )
  },

  // Slide 7: Site Web
  {
    type: 'content',
    layout: 'center',
    title: '🌐 Ecossistema Web',
    subtitle: 'Site Institucional - React',
    content: (
      <div>
        <TechStack technologies={[
          {
            icon: <FaGlobe />,
            name: 'React 18',
            description: 'Framework moderno com Concurrent Features'
          },
          {
            icon: <FaCode />,
            name: 'Next.js',
            description: 'SSR, SSG e otimizações automáticas'
          },
          {
            icon: <FaRocket />,
            name: 'Vercel',
            description: 'Deploy automático e CDN global'
          }
        ]} />
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>
            Links Oficiais
          </h3>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://petcareai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'var(--gradient-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              <FaGlobe />
              Site Oficial
            </a>
            <a href="https://github.com/estevam5s/petcare-ai" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'var(--gradient-dark)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              <FaGithub />
              Código Fonte
            </a>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Build e Deploy
  {
    type: 'content',
    layout: 'center',
    title: '📦 Build de Produção',
    subtitle: 'Processo Automatizado',
    content: (
      <div>
        <CodeWindow title="build-script.sh">
          <pre style={{ margin: 0, fontSize: '0.9rem' }}>
{
`#!/bin/bash
# Build de produção
npx react-native bundle --platform android
cd android && ./gradlew assembleRelease

# APK gerado em:
# android/app/build/outputs/apk/release/

# Upload para Firebase Distribution
firebase appdistribution:distribute app-release.apk`
}
          </pre>
        </CodeWindow>
        
        <FeatureGrid features={[
          {
            icon: <FaRocket />,
            title: 'CI/CD Pipeline',
            description: 'GitHub Actions com build e deploy automático'
          },
          {
            icon: <FaShieldAlt />,
            title: 'Assinatura Digital',
            description: 'Keystore seguro para releases oficiais'
          }
        ]} />
      </div>
    )
  },

  // Slide 9: Google Play Store
  {
    type: 'content',
    layout: 'center',
    title: '🏪 Google Play Store',
    subtitle: 'Publicação Profissional',
    content: (
      <div>
        <FeatureGrid features={[
          {
            icon: <FaDollarSign />,
            title: 'Developer Account',
            description: (
              <div>
                <CurrencyDisplay amount={25} />
                <p>Taxa única para desenvolvedor</p>
              </div>
            )
          },
          {
            icon: <FaAndroid />,
            title: 'App Bundle (AAB)',
            description: 'Upload otimizado com Dynamic Delivery'
          },
          {
            icon: <FaStore />,
            title: 'Store Listing',
            description: 'Metadados, screenshots e ASO otimizado'
          }
        ]} />
      </div>
    )
  },

  // Slide 10: Analytics
  {
    type: 'content',
    layout: 'center',
    title: '📊 Analytics & Performance',
    subtitle: 'Métricas em Tempo Real',
    content: (
      <div>
        <StatsGrid stats={[
          { number: '95%', label: 'Performance Score' },
          { number: '4.8★', label: 'Avaliação Média' },
          { number: '1.2s', label: 'Tempo de Loading' },
          { number: '99.9%', label: 'Uptime' }
        ]} />

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)', textAlign: 'center' }}>
            Monitoramento Completo
          </h3>
          <TechStack technologies={[
            {
              icon: <FaChartLine />,
              name: 'Firebase Analytics',
              description: 'Tracking de eventos e conversões'
            },
            {
              icon: <FaShieldAlt />,
              name: 'Crashlytics',
              description: 'Monitoramento de crashes'
            }
          ]} />
        </div>
      </div>
    )
  },

  // Slide 11: Demo
  {
    type: 'demo',
    layout: 'center',
    title: '📱 Demo ao Vivo',
    subtitle: '100% Funcional',
    content: (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          <AppMockup />
          
          <div style={{ maxWidth: '500px' }}>
            <FeatureGrid features={[
              {
                icon: <FaPlay />,
                title: 'Teste Agora',
                description: 'Download APK direto do GitHub Releases'
              },
              {
                icon: <FaBrain />,
                title: 'IA Funcionando',
                description: 'Google Gemini respondendo em tempo real'
              }
            ]} />
          </div>
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://github.com/estevam5s/petcare-ai-app/releases" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'var(--gradient-primary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              <FaAndroid />
              Download APK
            </a>
            <a href="https://petcareai.vercel.app/" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'var(--gradient-secondary)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              fontSize: '1.1rem'
            }}>
              <FaPlay />
              Site Demo
            </a>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Conclusão
  {
    type: 'title',
    layout: 'center',
    icon: <FaGraduationCap />,
    title: 'Muito Obrigado!',
    subtitle: 'Projeto Concluído com Sucesso',
    content: (
      <div>
        <FeatureGrid features={[
          {
            icon: <FaRocket />,
            title: 'Objetivos Alcançados',
            description: 'App completo com IA, analytics e deploy profissional'
          },
          {
            icon: <FaCode />,
            title: 'Tecnologias Dominadas',
            description: 'React Native, AI Integration, Google Play Store'
          },
          {
            icon: <FaHeart />,
            title: 'Impacto Real',
            description: 'Solução para 44.3% dos lares brasileiros com pets'
          }
        ]} />

        <TeamMember member={{
          name: 'Estevam Souza',
          role: 'Desenvolvedor Full Stack & Mobile',
          linkedin: 'https://linkedin.com/in/estevam-souza',
          github: 'https://github.com/estevam5s',
          email: 'contato@estevamsouza.com.br',
          website: 'https://estevamsouza.com.br'
        }} />

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '1.5rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
            <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>Dúvidas e feedback</span> são muito bem-vindos!<br />
            Vamos conectar e conversar sobre tecnologia! 🚀
          </p>
        </div>
      </div>
    )
  }
];