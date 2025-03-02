import { Network, FileSpreadsheet, Monitor, Terminal, ClipboardList, Laptop, Code2, HeadphonesIcon, Command } from 'lucide-react';

function SkillCard({ title, description, Icon }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-colors">
      <div className="text-red-500 mb-4">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

export function AboutSection() {
  const skills = [
    {
      title: "Cisco",
      description: "Ik heb de Cisco 1 en 2 cursussen afgerond en ben gecertificeerd. Tijdens deze cursussen heb ik praktische ervaring opgedaan met netwerkinstellingen door het werken met virtuele Cisco-apparatuur in Packet Tracer. Hierin heb ik netwerkinstellingen ingevoerd en getest. Momenteel ben ik bezig met de Cisco 3 cursus en herhaal ik de stof ter voorbereiding op het Cisco-examen.",
      Icon: Network
    },
    {
      title: "Microsoft Office",
      description: "Ik heb het Office onderdeel succesvol afgerond en beschik over een goede kennis van Word, PowerPoint en Excel. Ik ben in staat om functies en instellingen te vinden, documenten aan te passen en verschillende soorten documenten te exporteren. Deze vaardigheden helpen me om efficiënt te werken met de belangrijkste Office-toepassingen.",
      Icon: FileSpreadsheet
    },
    {
      title: "Windows Server 2022",
      description: "Ik heb het eerste boek van de Windows Server cursus afgerond en enkele oefenservers opgezet. Hierdoor heb ik basiskennis opgedaan in het instellen en beheren van Active Directory (AD), het beheren van gebruikers, het configureren van DHCP-pools en het instellen van gedeelde bestandsshares. Dit geeft me een solide basis om verder te leren en servers te beheren.",
      Icon: Monitor
    },
    {
      title: "Linux",
      description: "Ik heb ervaring met het uitvoeren van basiscommando's voor het configureren van Linux-servers en ben bekend met het installeren van beveiligingssoftware. Daarnaast heb ik gewerkt met het installeren en configureren van WordPress en MySQL. Hoewel ik nog in de leer ben, heb ik een goed begrip van de basisprincipes van serverbeheer en webhosting.",
      Icon: Terminal
    },
    {
      title: "TOPdesk",
      description: "Ik heb mijn examen voor TopDesk succesvol afgerond en heb een goed begrip van de belangrijkste functies en processen binnen het systeem. Ik ben bekend met het beheren van incidenten, het verwerken van serviceverzoeken en het configureren van workflows. Mijn kennis stelt me in staat om efficiënt met het platform te werken en bijdragen te leveren aan een vlotte afhandeling van klantverzoeken en IT-processen.",
      Icon: ClipboardList
    },
    {
      title: "Computer Hardware",
      description: "Ik heb een sterke basiskennis van computerhardware, inclusief het samenstellen van systemen en het uitvoeren van onderhoud. Daarnaast beschik ik over basisvaardigheden in troubleshooting, waarmee ik veelvoorkomende hardwareproblemen kan identificeren en oplossen.",
      Icon: Laptop
    },
    {
      title: "Python",
      description: "Ik heb basiskennis van Python opgedaan en mijn examen hierin succesvol afgerond. Ik ben in staat om fouten in bestaande scripts te identificeren en aan te passen. Daarnaast kan ik zelf eenvoudige scripts schrijven en begrijp ik bestaande, niet al te ingewikkelde Python-scripts. Deze vaardigheden stellen me in staat om met Python te werken en verder te ontwikkelen in het programmeren.",
      Icon: Code2
    },
    {
      title: "Servicedesk",
      description: "Tijdens mijn stage en IT-werk bij Compatible heb ik veel ervaring opgedaan die mijn basiskennis van service desk werk, opgedaan in TopDesk, aanzienlijk heeft versterkt. Ik heb geleerd hoe ik effectief met klanten communiceer via e-mail en telefoon, hoe ik omga met problemen en escalaties, en hoe ik zelfstandig technische problemen kan oplossen. Deze praktische ervaring heeft mijn vaardigheden in klantcontact en probleemoplossing verder ontwikkeld, en ik blijf me nog steeds verder ontwikkelen in deze aspecten van mijn werk.",
      Icon: HeadphonesIcon
    },
    {
      title: "Powershell",
      description: "Ik heb de basisprincipes van PowerShell geleerd, waaronder het werken met variabelen en het schrijven van eenvoudige scripts. Daarnaast ben ik bekend met het gebruik van hulpmiddelen zoals ChatGPT om PowerShell-scripts te genereren en deze vervolgens verder te fine-tunen. Ik heb al examen gedaan in PowerShell en dit succesvol afgerond, wat mijn kennis en vertrouwen in het werken met PowerShell verder heeft versterkt.",
      Icon: Command
    }
  ];

  return (
    <div className="space-y-16">
      <div className="grid gap-8 md:grid-cols-2">
        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 md:col-span-2">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Wie ben ik</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
          Hoi, ik ben Daan, 19 jaar oud, en ik woon in Bussum samen met mijn ouders en mijn zus. Ik heb een grote passie voor ICT en ben altijd gemotiveerd om nieuwe dingen te leren, vooral op technologisch gebied. Ook kan je mijn passie terugzien tijdens het dagelijkse gebruik van technologie.
          </p>
          <p className="text-gray-300 leading-relaxed">
          In mijn vrije tijd spreek ik graag af met vrienden, ben ik aan het werken bij de Albert Heijn of Compatible, waar ik mijn werkervaring opdoe en mijn sociale vaardigheden verder ontwikkel. Daarnaast ben ik ook vaak buiten te vinden, waar ik geniet van de natuur terwijl ik rijd met mijn RC-auto, waardoor ik kan ontspannen en technische vaardigheden gebruik om aan de auto te sleutelen.
          </p>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Wat doe ik</h2>
          <p className="text-gray-300 leading-relaxed">
          Op dit moment ben ik bezig met de ICT Expert opleiding bij de ICT Campus. Bij deze opleiding leer ik over verschillende onderwerpen zoals Windows server en Powershell commando's. Wat ik nog meer kan staat onder het kopje "wat kan ik". Een voordeel van deze opleiding en is dat ik de onderwerpen die ik aangeleerd krijg als onderdeel van een project in de praktijk kan oefenen om het echt onder de knie te krijgen. Ik heb voor deze opleiding gekozen, omdat ik graag mijn technische vaardigheden wilde ontwikkelen en praktisch te werk wilde gaan in de ICT.
          </p>
        </section>

        <section className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Wat wil ik</h2>
          <p className="text-gray-300 leading-relaxed">
          Na het afronden van mijn opleiding wil ik graag doorleren in de HBO ICT, terwijl ik werk bij een ICT-bedrijf. Dit stelt me in staat om mijn kennis in de praktijk toe te passen, werkervaring op te doen en verder te groeien als professional in de ICT.
          </p>
        </section>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-red-500 mb-8 text-center">Wat kan ik</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              description={skill.description}
              Icon={skill.Icon}
            />
          ))}
        </div>
      </section>
    </div>
  );
}