import { DocumentTextIcon, EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/solid'; // O el nombre correcto de la biblioteca
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { Avatar } from '../atoms/avatar/Avatar';
import { AvatarImage } from '../atoms/avatar/AvatarImage';
import Card from '../atoms/card/Card';
import CardContent from '../atoms/card/CardContent';
import ServiceList from '../organisms/home/ServiceList';
import MainTemplate from '../templates/MainTemplate';
import DonationViewer from '../molecules/viewer/DonationViewer';


export default function PageStatics() {
    const services = [
        { title: "Diseño Web", description: "Creamos sitios web atractivos y funcionales." },
        { title: "Desarrollo de Apps", description: "Aplicaciones móviles para iOS y Android." },
        { title: "SEO", description: "Optimizamos tu presencia en los motores de búsqueda." },
        { title: "Marketing Digital", description: "Estrategias efectivas para tu negocio online." },
    ];

    const featuredPeople = [
        { name: "Ana García", role: "CEO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "Carlos Ruiz", role: "CTO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "Elena Martínez", role: "Diseñadora", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "David López", role: "Desarrollador", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
    ];

    const relatedBrands = [
        { name: "TechCorp", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "InnovateLab", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "DigitalPro", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "WebMasters", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "AppGenius", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
        { name: "CloudSolutions", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Blank_man_placeholder.svg/200px-Blank_man_placeholder.svg.png" },
    ];

    const donationGoal = 10000;
    const currentDonations = 6500;

    return (
        <MainTemplate>
            <div className="bg-accent/10 border border-accent rounded-lg shadow-lg p-6 relative overflow-hidden mb-8">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
                <h1 className="text-3xl font-bold mb-4 text-primary">Bienvenido a nuestra página</h1>
                <p className="mb-4 text-foreground/80">Esta es una página estática de ejemplo con un menú horizontal, tarjetas de servicios y un visualizador de donaciones.</p>
                <DonationViewer donationGoal={donationGoal} currentDonations={currentDonations} />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-primary">Nuestros Servicios</h2>
            <ServiceList services={services} />
            <h2 className="text-2xl font-bold mb-4 text-primary">Personas Destacadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                {featuredPeople.map((person, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <Avatar className="w-24 h-24 mb-2">
                            <AvatarImage src={person.image} alt={person.name} />
                      </Avatar>
                        <h3 className="font-semibold text-center">{person.name}</h3>
                        <p className="text-sm text-muted-foreground text-center">{person.role}</p>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-primary">Marcas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-8">
                {relatedBrands.map((brand, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                        <img src={brand.logo} alt={brand.name} className="max-w-full h-auto" />
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-4 text-primary">Nuestra Esencia</h2>
            <Card >
                <CardContent >
                    <Tabs defaultValue="mission" className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="mission">Misión</TabsTrigger>
                            <TabsTrigger value="vision">Visión</TabsTrigger>
                            <TabsTrigger value="policies">Políticas</TabsTrigger>
                        </TabsList>
                        <TabsContent value="mission" className="mt-4">
                            <div className="flex items-start space-x-4">
                                <RocketLaunchIcon className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Nuestra Misión</h3>
                                    <p>Proporcionar soluciones tecnológicas innovadoras que impulsen el éxito de nuestros clientes, mejorando la eficiencia y productividad de sus negocios.</p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="vision" className="mt-4">
                            <div className="flex items-start space-x-4">
                                <EyeIcon className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Nuestra Visión</h3>
                                    <p>Ser líderes globales en la transformación digital, creando un futuro donde la tecnología mejore la vida de las personas y el funcionamiento de las empresas.</p>
                                </div>
                            </div>
                        </TabsContent>
                        <TabsContent value="policies" className="mt-4">
                            <div className="flex items-start space-x-4">
                                <DocumentTextIcon className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="text-lg font-semibold mb-2">Nuestras Políticas</h3>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>Compromiso con la excelencia en cada proyecto</li>
                                        <li>Respeto a la privacidad y seguridad de los datos</li>
                                        <li>Fomento de la innovación y el aprendizaje continuo</li>
                                        <li>Responsabilidad social y ambiental en nuestras operaciones</li>
                                    </ul>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </Card>
        </MainTemplate>
    );
}
