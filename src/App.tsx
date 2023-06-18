import { default as img } from "./assets/profile.jpg";

import Profile from "./partials/Profile";
import Card from "./componets/Card";
import Quote from "./componets/Quote";

export default function App() {

    return (
        <div className="@bg-black @text-neutral-300 @w-full @min-h-screen @p-6 @flex @flex-col @gap-6 sm:@w-[500px] sm:@mx-auto">

            <Card>
                <Profile
                    cover={ img }
                    name="Pedro Santana"
                    brief="Software Developer"
                />
            </Card>

            <Card title="Sobre" id="sobre">
                <p>Estou atualmente cursando a graduação de nível superior na Universidade do Estado de Santa Catarina UDESC para Tecnólogo em Análise e Desenvolvimento de Sistemas, onde pretendo aperfeiçoar meus conhecimentos como empreendedor, com capacidade de trabalho em equipes, dotado de iniciativa na proposta e implementação da solução de problemas e de espírito de cooperação e articulação.</p>
                <p>Sou desenvolvedor certificado pela intituição SENAI de Joinvile Santa Catarina como Técnico em Desenvolvimento de Sistemas desde o final de 2021 e já realizei trabalhos como Designer Freelancer com inicio em São Paulo no ano de 2017.</p>
            </Card>

            <Quote author="Andrei Rosseti">
                <p>Tive o prazer de trabalhar com Pedro durante o último ano, e fiquei impressionado com sua evolução e dedicação em aprender cada vez mais sobre o desenvolvimento de software.</p>
                <p>Desde o início, Pedro demonstrou uma grande vontade de aprender e aplicar novas habilidades em seus projetos. Sempre se mostrou muito comprometido em entregar o melhor resultado a cada novo desenvolvimento.</p>
                <p>Graças a essa dedicação e empenho, Pedro tem alcançado excelentes resultados em seus projetos, superando as expectativas e entregando soluções eficientes para a equipe.</p>
                <p>É um prazer recomendar o Pedro. Tenho certeza que seu trabalho na equipe causa um grande impacto.</p>
                <p>Parabéns, Pedro, pelo seu desempenho excepcional e pela sua jornada de crescimento contínuo. Desejo todo o sucesso em sua carreira.</p>
            </Quote>

        </div>
    )
}