"use client";

import { useState } from "react";

const CHECKOUT_URL =
  "https://pay.wiapy.com/Ej-y4tTM0DoZ";

const samplePages = [
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/51-1024x724.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/52-1024x724.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/49-1024x724.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/50-1024x724.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/47-1024x724.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2026/02/48-1024x724.png",
];

const feedbackImages = [
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/951E550A-E10A-4134-8841-A74994F7A0CA-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/14-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/17-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/13-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/20-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2024/05/D646AAEE-5108-44FD-8717-DACD26AC72B1-768x768.jpeg",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/19-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/10/34-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/18-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/10/28-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/08/8-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/15-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/10/29-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/04/12-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/08/10-768x768.png",
  "https://bibliatecamapeada.com/wp-content/uploads/2025/08/7-768x768.png",
];

const antigoTestamento = [
  ["🌎", "A Criação"],
  ["🍎", "Adão e Eva"],
  ["🩸", "Caim e Abel"],
  ["🌧️", "A Arca de Noé"],
  ["⭐", "Abraão"],
  ["👬", "Esaú e Jacó"],
  ["🏛️", "José no Egito"],
  ["🌊", "Moisés e o Mar Vermelho"],
  ["📜", "Os Dez Mandamentos"],
  ["💪", "A Força de Sansão"],
  ["🌾", "A Bondade de Rute"],
  ["👑", "O Chamado de Samuel"],
  ["🪨", "Davi e Golias"],
  ["📖", "A Sabedoria de Salomão"],
  ["👑", "A Coragem de Ester"],
  ["🔥", "A Fé de Jó"],
  ["🦁", "Daniel na Cova dos Leões"],
  ["🐳", "Jonas e o Grande Peixe"],
];

const novoTestamento = [
  ["✨", "Os 4 Evangelhos"],
  ["👼", "A Visita do Anjo"],
  ["👶", "O Nascimento de Jesus"],
  ["👑", "Os Reis Magos"],
  ["💧", "O Batismo de Jesus"],
  ["🍷", "Água em Vinho"],
  ["⛰️", "O Sermão da Montanha"],
  ["👥", "Os Apóstolos"],
  ["🌊", "Acalmando a Tempestade"],
  ["🍞", "Multiplicação de Pães"],
  ["🌊", "Caminhando Sobre as Águas"],
  ["❤️", "O Bom Samaritano"],
  ["🐑", "A Ovelha Perdida"],
  ["🏠", "O Filho Pródigo"],
  ["🌿", "Jesus em Jerusalém"],
  ["🍞", "A Última Ceia"],
  ["💋", "A Traição de Judas"],
  ["⛓️", "A Prisão de Jesus"],
  ["🏛️", "Jesus e Pilatos"],
  ["✝️", "A Crucificação"],
  ["🌅", "A Ressurreição"],
  ["🙌", "Jesus aos Discípulos"],
  ["🔥", "O Espírito Santo"],
];

const recursos = [
  ["💡", "Oração"],
  ["🧠", "Lição"],
  ["🔎", "Valores"],
  ["🌟", "Princípios"],
  ["🙏", "Devoção"],
  ["✍️", "Quiz de Fixação"],
];

const didatica = [
  ["✏️", "Linguagem simples e objetiva"],
  ["📄", "Texto curto e compreensível"],
  ["✍️", "Perguntas para fixação"],
  ["🙏", "Oração aplicada ao tema"],
  ["🎨", "Ilustrações acolhedoras"],
  ["📅", "Organização cronológica clara"],
];

const paraVoce = [
  ["🙏", "Deseja inserir um tempo com Deus na rotina do seu filho, mas não sabe por onde começar;"],
  ["✝️", "Gostaria de ensinar sobre a vida de Jesus através das histórias mais fascinantes da Bíblia;"],
  ["🌱", "Pretende transmitir valores e princípios cristãos às suas crianças desde cedo, de forma leve e eficiente;"],
  ["👨‍👩‍👧", "É pai/mãe, professor, pastor ou líder de ministério e deseja enriquecer o conhecimento dos pequenos sobre a Palavra."]
];

const faqs = [
  {
    q: "O material é físico ou digital?",
    a: "O Mapa Didático da Bíblia Kids é um produto digital de alta qualidade com acesso imediato. Você não precisa esperar dias para recebê-lo e poderá baixar, imprimir e encadernar como desejar e quando quiser, pois o acesso é vitalício.",
  },
  {
    q: "Como será feito o envio do material?",
    a: "O acesso com todos os bônus desta oferta será liberado no seu e-mail de compra logo após a confirmação de pagamento. O material está hospedado na área de membros da Hotmart.",
  },
  {
    q: "É católico ou evangélico?",
    a: "Esta página corresponde à versão Evangélica. Para a versão Católica, acesse a página dedicada no checkout.",
  },
  {
    q: "E se eu não ficar satisfeito?",
    a: "Você tem 7 dias de garantia incondicional. Caso não esteja totalmente satisfeito dentro deste prazo, devolvemos 100% do seu dinheiro. Sem burocracia, sem perguntas.",
  },
];

function Cta({ label = "QUERO O MAPA KIDS!" }: { label?: string }) {
  const handleClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'InitiateCheckout');
    }
  };

  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="inline-flex items-center justify-center rounded-full bg-brand-green px-8 py-5 text-lg font-extrabold uppercase tracking-wide text-white shadow-[0_8px_0_oklch(0.55_0.18_155)] transition-transform hover:scale-[1.02] active:translate-y-[2px] active:shadow-[0_4px_0_oklch(0.55_0.18_155)]"
    >
      {label}
    </a>
  );
}

function TopicBlock({
  title,
  items,
}: {
  title: string;
  items: readonly (readonly string[])[];
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-brand-purple-dark sm:text-2xl">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map(([e, t], i) => (
          <div
            key={`${t}-${i}`}
            className="flex items-center gap-2 rounded-xl bg-card p-3 text-sm shadow-sm"
          >
            <span className="text-lg">{e}</span>
            <span className="font-semibold text-brand-purple-dark">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Announcement bar */}
      <div className="bg-brand-yellow text-brand-purple-dark">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-bold sm:text-base">
          🌟 LANÇAMENTO COM 40% OFF — OFERTA POR TEMPO LIMITADO!
        </div>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 py-10 text-center sm:py-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-purple px-5 py-2 text-sm font-semibold text-white shadow-md">
            📖 Mapa Didático da Bíblia Kids
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-brand-purple-dark sm:text-6xl md:text-7xl">
            Plante a Palavra hoje, colha caráter amanhã.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base font-semibold text-brand-purple sm:text-lg">
            Uma criança que conhece a Bíblia e tem Deus no coração aprende desde cedo princípios cristãos!
          </p>

          <div className="relative mx-auto mt-10 max-w-3xl">
            <img
              src="https://bibliatecamapeada.com/wp-content/uploads/2026/03/COLECAO-INFANTIL-768x543.png"
              alt="Coleção Mapa Didático da Bíblia Kids"
              className="mx-auto w-full"
              loading="eager"
            />
          </div>

          <p className="mx-auto mt-8 max-w-3xl text-lg font-bold text-brand-purple-dark">
            O Mapa Didático da Bíblia Kids traz a Bíblia inteira organizada para a mente de uma criança,
            de forma clara, didática, ilustrada e inesquecível.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
            Um material que conduz seu filho de Gênesis a Apocalipse, mostrando que a Bíblia é uma linda grande
            história — e que <strong className="text-brand-purple-dark">Jesus é o centro de tudo</strong>.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-brand-purple-dark shadow">
            ✨ Aprovado por pastores, professores e líderes de Ministério Infantil
          </div>

          <div className="mt-8">
            <Cta />
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-5xl px-4 pb-12">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-brand-purple p-6 text-white sm:grid-cols-4 sm:p-8">
            {[
              ["115", "Páginas ilustradas"],
              ["66", "Livros da Bíblia"],
              ["+60.000", "Famílias impactadas"],
              ["Todas", "as idades"],
            ].map(([n, l]) => (
              <div key={l} className="text-center">
                <div className="font-display text-3xl font-bold text-brand-yellow sm:text-4xl">{n}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide opacity-90 sm:text-sm">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Barriers */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <p className="text-base text-foreground/90">
          Nossas crianças aprendem com o mundo todos os dias: na escola, com os amiguinhos, na internet,
          com os desenhos, nos ambientes que você não consegue controlar… mas quem está ensinando o que
          agrada a Deus?
        </p>
        <p className="mt-4 font-semibold text-brand-purple-dark">
          Você já reparou que as crianças conseguem decorar tudo o que assistem nos desenhos favoritos delas?
          Imitam os personagens, às vezes até o jeito de falar… e de forma involuntária, começam a se
          espelhar nessas referências que, vamos combinar, não agregam em nada em princípios e valores no
          caráter dos nossos filhos.
        </p>

        <img
          src="https://bibliatecamapeada.com/wp-content/uploads/2026/03/MOCKUPS-2-1024x724.png"
          alt="Mockups do material"
          className="mx-auto my-8 w-full max-w-2xl"
          loading="lazy"
        />

        <p className="font-semibold text-brand-purple-dark">
          Agora pare pra pensar: por que será que isso não acontece com as histórias da Bíblia? A Bíblia é
          encantadora, mas pra que as crianças a vejam dessa forma, nós precisamos apresentá-la como tal.
        </p>

        <p className="mt-6">
          Se você acha difícil despertar o interesse da sua criança pela Palavra e inserir um tempo com
          Deus na rotina dela, o problema não está em você — existem algumas <strong>barreiras</strong>{" "}
          que dificultam essa conexão:
        </p>

        <div className="mt-6 space-y-4">
          {[
            [
              "Excesso de estímulos tecnológicos",
              "Em um mundo dominado pela tecnologia e pelo entretenimento visual, a leitura da Bíblia pode parecer menos atrativa quando comparada a experiências mais dinâmicas.",
            ],
            [
              "Barreira de contexto",
              "As histórias bíblicas fazem parte de um contexto que pode parecer distante da realidade atual das crianças e reforça a falta de interesse pelos detalhes das Escrituras.",
            ],
            [
              "Barreira linguística",
              "Apesar das traduções amenizarem essas barreiras, existem termos que não fazem mais parte do cotidiano, dificultando a conexão e o entendimento das crianças.",
            ],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl border-2 border-brand-purple/20 bg-card p-5 shadow-sm">
              <h3 className="text-lg font-bold text-brand-purple-dark">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-lg font-semibold text-brand-purple-dark">
          …a melhor forma de ultrapassar essas barreiras é através de uma estratégia educativa inovadora —
          e para te ajudar nós criamos o <span className="text-brand-purple">Mapa Didático da Bíblia Kids</span>!
        </p>
      </section>

      {/* Sample pages */}
      <section className="bg-brand-purple/10 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-purple-dark sm:text-4xl">
            Didático, ilustrado, rico em informações…
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {samplePages.map((src, i) => (
              <div
                key={src}
                className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lg transition-transform hover:-rotate-1 hover:scale-[1.02]"
              >
                <img src={src} alt={`Página exemplo ${i + 1}`} loading="lazy" className="w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What child learns */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <h2 className="text-3xl font-bold text-brand-purple-dark sm:text-4xl">
          O que a criança aprende com o Mapa Didático da Bíblia Kids
        </h2>
        <p className="mt-4 text-base text-muted-foreground">
          O <strong className="text-brand-purple-dark">Mapa Didático da Bíblia Kids</strong> é a melhor
          ferramenta para apresentar a Bíblia de forma leve e divertida, motivando o interesse pela Palavra
          e incentivando o estudo desde cedo — através da história mais linda que já existiu: a vida de Jesus!
        </p>
        <ul className="mt-6 space-y-3">
          {[
            "Mapas mentais ilustrados de Gênesis a Apocalipse: todos os livros da Bíblia explicados de forma simples, didática e ilustrada, com lição, versículo relacionado e mais de 80 perguntas para fixação.",
            "Organização cronológica clara, oração aplicada aos temas, ilustrações acolhedoras e textos curtos.",
            "Aprendizado rápido, didático e completo através de uma linguagem simples, lúdica e acessível.",
          ].map((t) => (
            <li key={t} className="flex gap-3 rounded-2xl bg-card p-4 shadow-sm">
              <span className="mt-0.5 shrink-0 rounded-full bg-brand-green px-2 py-0.5 text-sm font-bold text-white">
                ✓
              </span>
              <span className="text-sm sm:text-base">{t}</span>
            </li>
          ))}
        </ul>

        {/* Grids */}
        <div className="mt-12 space-y-8">
          <TopicBlock title="📚 Panorama Geral" items={[["📖", "Panorama de Gênesis a Apocalipse"], ["📚", "AT e NT"], ["🗂️", "Todos os Livros Classificados"]]} />
          <TopicBlock title="⭐ Antigo Testamento" items={antigoTestamento} />
          <TopicBlock title="✨ Novo Testamento" items={novoTestamento} />
          <TopicBlock title="💡 Recursos de Aprendizagem" items={recursos} />
        </div>
      </section>

      {/* Learning to love */}
      <section className="bg-brand-purple py-12 text-white sm:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-sm font-bold text-brand-purple-dark">
            🌱 aprendendo a amar a bíblia
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
            Com o Mapa Didático da Bíblia Kids, seu filho vai:
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Entender a ordem dos acontecimentos bíblicos",
              "Conectar as histórias entre si",
              "Descobrir que Jesus é o centro da Bíblia",
              "Desenvolver princípios como obediência, coragem, fé e perdão",
              "Aprender a refletir e aplicar o que leu",
              "Criar base espiritual sólida desde cedo",
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur"
              >
                <span className="mt-0.5 shrink-0 rounded-full bg-brand-yellow px-2 py-0.5 text-sm font-bold text-brand-purple-dark">
                  ✓
                </span>
                <span className="text-sm sm:text-base">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-xl font-semibold">
            Não é apenas informação. <span className="text-brand-yellow">É formação.</span>
          </p>
        </div>
      </section>

      {/* Didática */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <span className="inline-block rounded-full bg-brand-yellow px-4 py-1 text-sm font-bold text-brand-purple-dark">
          🧠 A didática que faz a diferença
        </span>
        <h2 className="mt-4 text-3xl font-bold text-brand-purple-dark sm:text-4xl">
          Cada página foi estruturada para a mente infantil:
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {didatica.map(([e, t]) => (
            <div
              key={t}
              className="rounded-2xl border-2 border-brand-purple/20 bg-card p-5 text-center shadow-sm"
            >
              <div className="text-3xl">{e}</div>
              <div className="mt-2 text-sm font-semibold text-brand-purple-dark">{t}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-lg">
          A criança entende o <strong>"antes"</strong>, o <strong>"durante"</strong> e o{" "}
          <strong>"depois"</strong>. Isso gera <span className="text-brand-purple font-bold">segurança</span>.
        </p>
      </section>

      {/* Para você */}
      <section className="bg-brand-cream py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-3xl font-bold text-brand-purple-dark sm:text-4xl">
            O Mapa Didático da Bíblia Kids é pra você que:
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {paraVoce.map(([e, t]) => (
              <div key={t} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm">
                <div className="text-3xl">{e}</div>
                <p className="text-sm sm:text-base">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedbacks */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        <h2 className="text-center text-3xl font-bold text-brand-purple-dark sm:text-4xl">
          Já recebemos +1.500 feedbacks de famílias impactadas pela nossa didática!
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {feedbackImages.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Depoimento ${i + 1}`}
              loading="lazy"
              className="w-full rounded-xl border-4 border-white shadow"
            />
          ))}
        </div>
      </section>

      {/* Bonus */}
      <section className="bg-brand-yellow py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <span className="inline-block rounded-full bg-brand-purple px-4 py-1 text-sm font-bold text-white">
            🎁 BÔNUS liberado HOJE
          </span>
          <h2 className="mt-4 text-3xl font-bold text-brand-purple-dark sm:text-4xl">
            Ganhe o nosso Pack de Marca Páginas Divertidamente!
          </h2>
          <img
            src="https://bibliatecamapeada.com/wp-content/uploads/2025/08/2-1-1024x746.png"
            alt="Bônus Marca Páginas"
            className="mx-auto mt-8 w-full max-w-2xl"
            loading="lazy"
          />
        </div>
      </section>

      {/* Offer */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:py-16">
        <h2 className="text-center text-3xl font-bold text-brand-purple-dark sm:text-4xl">
          Garanta agora o Mapa Didático da Bíblia Kids com 40% OFF + BÔNUS
        </h2>
        <img
          src="https://bibliatecamapeada.com/wp-content/uploads/2026/02/MOCKUPS-30-2-1024x656.png"
          alt="Oferta"
          className="mx-auto mt-8 w-full max-w-2xl"
          loading="lazy"
        />

        <div className="mt-8 rounded-3xl border-4 border-brand-purple bg-card p-8 text-center shadow-xl">
          <p className="text-xl font-semibold text-brand-purple-dark">5x de</p>
          <p className="font-display text-6xl font-bold text-brand-purple">R$ 8,19</p>
          <p className="my-3 text-sm text-muted-foreground">— ou —</p>
          <p className="font-display text-4xl font-bold text-brand-purple-dark">R$ 37,00</p>
          <p className="mt-2 text-sm text-muted-foreground">à vista · acesso imediato</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm font-semibold text-brand-purple-dark">
            <span className="rounded-full bg-brand-purple/10 px-3 py-1">📥 Download imediato</span>
            <span className="rounded-full bg-brand-purple/10 px-3 py-1">🔒 Compra segura</span>
            <span className="rounded-full bg-brand-purple/10 px-3 py-1">💜 Acesso vitalício</span>
          </div>

          <div className="mt-8">
            <Cta />
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            *Desconto válido até o limite da turma aberta para esta promoção.
          </p>
        </div>

        {/* Guarantee */}
        <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-brand-green/10 p-8 text-center sm:flex-row sm:text-left">
          <div className="shrink-0 rounded-full bg-brand-green p-5 text-4xl">🛡️</div>
          <div>
            <h3 className="text-xl font-bold text-brand-purple-dark">
              Garantia de 7 dias — risco zero para você!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Confiamos tanto na qualidade do nosso material que oferecemos uma{" "}
              <strong>garantia incondicional de 7 dias</strong>. Caso não esteja totalmente satisfeito,
              devolvemos <strong>100% do seu dinheiro</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-purple/5 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold text-brand-purple-dark sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => (
              <div
                key={f.q}
                className="overflow-hidden rounded-2xl border-2 border-brand-purple/20 bg-card"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold uppercase text-brand-purple-dark">{f.q}</span>
                  <span className="text-2xl text-brand-purple">{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <div className="border-t border-brand-purple/10 p-5 text-sm text-muted-foreground">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-purple py-10 text-center text-white">
        <div className="mx-auto max-w-5xl px-4">
          <img
            src="https://bibliatecamapeada.com/wp-content/uploads/2023/10/logo-bibliotecamapeada.png"
            alt="BíbliaTeca Mapeada"
            className="mx-auto mt-6 h-16 w-auto brightness-0 invert"
            loading="lazy"
          />
          <p className="mt-4 text-xs opacity-80">
            BíbliaTeca Mapeada © 2023 — Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
