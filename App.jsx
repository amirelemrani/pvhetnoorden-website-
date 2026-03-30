export default function HetNoordenWebsite() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold tracking-tight text-blue-900">Het Noorden</div>
            <div className="text-sm text-slate-600">vervoer zoals het hoort</div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            <a href="#diensten" className="hover:text-blue-800">Diensten</a>
            <a href="#over" className="hover:text-blue-800">Over ons</a>
            <a href="#particulier" className="hover:text-blue-800">Particulieren</a>
            <a href="#contact" className="hover:text-blue-800">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-blue-100 mb-4">Professioneel en zorgzaam personenvervoer</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Professioneel personenvervoer voor opdrachtgevers en reizigers.</h1>
            <p className="text-lg text-blue-50 leading-8 max-w-xl mb-8">
              Het Noorden verzorgt taxivervoer, schoolvervoer, ouderenvervoer en zakelijk vervoer met focus op betrouwbaarheid, representativiteit en heldere afspraken. Voor organisaties en reizigers die waarde hechten aan continuïteit en professionele uitvoering.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-white text-blue-900 px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-[1.02] transition">Offerte aanvragen</a>
              <a href="#diensten" className="border border-white/40 px-6 py-3 rounded-2xl font-semibold hover:bg-white/10 transition">Bekijk diensten</a>
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-[2rem] p-8 shadow-2xl backdrop-blur">
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/10 rounded-2xl p-5">
                <div className="text-sm text-blue-100 mb-1">Taxivervoer</div>
                <div className="text-xl font-semibold">Comfortabel en representatief</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <div className="text-sm text-blue-100 mb-1">Schoolvervoer</div>
                <div className="text-xl font-semibold">Veilig en vertrouwd voor elke route</div>
              </div>
              <div className="bg-white/10 rounded-2xl p-5">
                <div className="text-sm text-blue-100 mb-1">Zakelijk vervoer</div>
                <div className="text-xl font-semibold">Representatief en punctueel voor bedrijven en organisaties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="diensten" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Onze diensten</h2>
          <p className="text-slate-600 text-lg leading-8">
            Wij bieden passend personenvervoer voor verschillende doelgroepen. De uitstraling is zakelijk en rustig, met duidelijke communicatie en een uitvoering die vertrouwen uitstraalt.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Taxivervoer',
              text: 'Zakelijk en particulier vervoer met focus op stiptheid, comfort en service.'
            },
            {
              title: 'Schoolvervoer',
              text: 'Vaste ritten en vertrouwde routes voor leerlingen, ouders en opdrachtgevers.'
            },
            {
              title: 'Ouderenvervoer',
              text: 'Rustig, verzorgd en betrouwbaar vervoer met aandacht voor comfort en begeleiding.'
            },
            {
              title: 'Zakelijk vervoer',
              text: 'Representatief vervoer voor bedrijven, medewerkers en zakelijke afspraken, uitgevoerd volgens duidelijke afspraken.'
            }
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">
              <h3 className="text-2xl font-semibold mb-3 text-blue-900">{item.title}</h3>
              <p className="text-slate-600 leading-7">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="particulier" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.2em] text-sm text-slate-500 mb-3">Voor particulieren</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Losse ritten boeken zonder ingewikkeld gedoe</h2>
            <p className="text-slate-600 text-lg leading-8 mb-4">
              Naast structureel personenvervoer kunt u bij Het Noorden ook terecht voor losse ritten op afspraak. Denk aan vervoer naar een afspraak, familiebezoek, luchthaven of een andere bestemming waarbij betrouwbaarheid en duidelijkheid belangrijk zijn.
            </p>
            <p className="text-slate-600 text-lg leading-8">
              Aanvragen kunnen eenvoudig worden gedaan via e-mail via info@pvhetnoorden.nl. Na uw aanvraag nemen wij contact op om de rit, het tijdstip en de beschikbaarheid af te stemmen.
            </p>
          </div>
          <div className="bg-white rounded-[2rem] shadow-sm border border-slate-200 p-8">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Rit aanvragen</h3>
            <div className="space-y-4 text-slate-600 leading-7">
              <p><span className="font-semibold text-slate-900">Stap 1:</span> Stuur uw aanvraag met vertrekpunt, bestemming, datum en gewenste tijd naar info@pvhetnoorden.nl.</p>
              <p><span className="font-semibold text-slate-900">Stap 2:</span> U ontvangt zo snel mogelijk een reactie over beschikbaarheid en de verdere afstemming.</p>
              <p><span className="font-semibold text-slate-900">Stap 3:</span> Na bevestiging wordt uw rit netjes ingepland.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="over" className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">Over Het Noorden</h2>
            <p className="text-slate-600 text-lg leading-8 mb-4">
              Het Noorden staat voor vervoer zoals het hoort: professioneel georganiseerd, helder in communicatie en zorgvuldig in uitvoering.
            </p>
            <p className="text-slate-600 text-lg leading-8">
              Wij richten ons op betrouwbare dienstverlening voor zowel particuliere als zakelijke opdrachtgevers. Daarbij ligt de nadruk op vaste kwaliteit, representatieve uitvoering en oplossingen die aansluiten op de praktijk van organisaties, scholen en bedrijven.
            </p>
          </div>
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6">
              <div className="text-sm text-slate-500 mb-1">Waarom kiezen voor ons</div>
              <div className="text-xl font-semibold text-slate-900">Rustige uitstraling, duidelijke afspraken en betrouwbare uitvoering</div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6">
              <div className="text-sm text-slate-500 mb-1">Werkwijze</div>
              <div className="text-xl font-semibold text-slate-900">Flexibel waar nodig, professioneel in iedere rit</div>
            </div>
            <div className="rounded-[2rem] bg-slate-50 border border-slate-200 p-6">
              <div className="text-sm text-slate-500 mb-1">Doel</div>
              <div className="text-xl font-semibold text-slate-900">Duurzame relaties op basis van kwaliteit, vertrouwen en continuïteit</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-blue-900 text-white rounded-[2rem] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact en aanvragen</h2>
            <p className="text-blue-100 text-lg leading-8">
              Wilt u meer weten over onze diensten of een vervoersoplossing bespreken? Wij denken graag mee over een passende en betrouwbare invulling.
            </p>
          </div>
          <div className="bg-white/10 rounded-[2rem] p-6 space-y-4">
            <div>
              <div className="text-sm text-blue-200">E-mail</div>
              <div className="text-lg font-semibold">info@pvhetnoorden.nl</div>
            </div>
            <div>
              <div className="text-sm text-blue-200">Diensten</div>
              <div className="text-lg font-semibold">Taxivervoer, schoolvervoer, ouderenvervoer, zakelijk vervoer en losse ritten op afspraak</div>
            </div>
            <div>
              <div className="text-sm text-blue-200">Werkgebied</div>
              <div className="text-lg font-semibold">In overleg en op afspraak</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-slate-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© 2026 Het Noorden</div>
          <div>vervoer zoals het hoort</div>
        </div>
      </footer>
    </div>
  )
}
