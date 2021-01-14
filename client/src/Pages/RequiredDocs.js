import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCheckCircle, FaStar } from 'react-icons/fa';
function RequiredDocs() {
    return <section id="re-sec">
        <div className="py-5 text-center">
            <h1 className="re-page-title">ACTE NECESARE</h1>
            <h2 className="subtitle-h2">PROCEDURA DE ÎNREGISTRARE CA SOFER RIDE SHARING ȘI MODUL DE COLABORARE</h2>
        </div>
        <Container className="py-5">
            <p>Ghid util pentru persoanele interesate sa desfasoare activitatea de Transport Alternativ, repectand toate reglementarile legale din Ordonanța de urgență nr. 49/2019 privind activitățile de transport alternativ cu autoturism și conducător auto.</p>
            <p>Am decis sa publicam acest ghid de indrumarea a soferilor care doresc sa inceapa sa desfasoare aceasta activitate, respectand reglementarile Ordonanței de urgență nr. 49/2019 privind activitățile de transport alternativ cu autoturism și conducător auto. Acest ghid are rolul de a explica pe intelesul tuturor care este mecanismul de lucru abordat de firmele partenere (flote partenere), ce comisioane percep acestia, care sunt obligatiile flotelor fata de sofer si fata de contributia la bugetul de stat a taxelor si a impozitelor, pe care acestia trebuie sa le plateasca lunar. Ce riscuri isi asuma un sofer colaborand cu o firma care nu respecta reglementarile in vigoare si care sunt avantajele in cazul unei colaborari 100% legala.</p>
        </Container>
        <section className="bg-green py-5">
            <Container>
                <div className="text-center mb-5">
                    <h3 className="re-page-title mb-4">ELIBERARE COPIE CONFORMĂ PENTRU TRANSPORT ALTERNATIV PENTRU BUCURESTI, TIMISIOARA SAU CLUJ</h3>
                    <h4 className="subtitle-h4">IacobsDrive te ajuta sa obții copia conformă și ecusoanele pentru Uber, Yango, Bolt si Free-now, fără costuri suplimentare</h4>
                </div>
                <Row>
                    <Col lg={6}>
                        <p>In primul rand trebuie menionat faptul ca serviciile de transport alternativ sunt reglementate de OUG 49/2019, iar pana la 01 februarie 2020 toate firmele si soferii au beneficiat de o perioada de tranzitie pentru a se conforma noilor reglementari.</p>
                        <p>IacobsDrive este activ ca Operator de Transport Alternativ autorizat ARR si este afliliat la platfomele Uber,Yango, Bolt si Free NOW</p>
                        <p>Colaborarea intre sofer si IacobsDrive are la baza trei contracte.</p>
                        <ol>
                            <li><p>Contract de locatiune/ inchiriere a autoturismului propietate personala.</p></li>
                            <li><p>Contractul individual de munca.</p></li>
                            <li><p>Conventia de colaborare.</p></li>
                        </ol>
                    </Col>
                    <Col lg={6}>
                        <p>Contractul de inchiriere se declara la ANAF pentru a obtine un exemplar stampilat, exemplar ce trebuie depus la ARR, sau dupa caz depus prin SPV, urmand sa depunem recipisa ca dovada a inregistrarii.</p>
                        <p>Copia conforma a autorizatiei pentru transportul alternativ se elibereaza, conform cererii operatorului de transport alternativ, pentru o perioada de 1 an, 2 ani sau 3 ani, fara a depasi perioada de valabilitate a autorizatiei de transport alternativ, numai pentru autoturismele care au la data expirarii valabilitatii copiei conforme mai putin de 15 ani vechime de la data fabricatiei. Deci maxim 12 ani vechime, pentru 3 ani valabilitate. Pentru eliberarea copiei conforme este necesar ca ITP-ul sa fie refacut in regim de 6 luni</p>
                    </Col>
                </Row>
            </Container>
        </section>

        {/* next section */}
        <Container className="py-5">
            <h2 className="subtitle-h2 text-center mb-5">CREAREA CONTURILOR PE APLICATIILE DE RIDESHARING</h2>
            <Row>
                <Col lg={6}>
                    <strong style={{ fontSize: "20px", display: "inline-block", marginBottom: "20px" }}>DOCUMENTE NECESARE</strong>
                    <p>Crearea unui cont Uber necesită o adresă de e-mail validă și un număr de telefon. De asemenea, trebuie să creezi o parolă și să accepți Termenii și condițiile și Politica de confidențialitate de pe site-ul Uber.</p>
                    <p>Procedura de inregistrare presupune sa ai langa tine cateva documente pe care trebuie sa le incarci pe platforma Uber.</p>
                </Col>
                <Col lg={6}>
                    <ParaLi text="Permis de conducere (obținut de minim 2 ani)" />
                    <ParaLi text="Carte de identitate (vârsta minimă 21 de ani)" />
                    <ParaLi text="Certificat profesional pentru conducătorii auto în regim de închiriere" />
                    <ParaLi text="Cazier judiciar fără înscrisuri" />
                    <ParaLi text="Cazier auto (Istoric auto)" />
                    <ParaLi text="O fotografie de profil pentru șofer" />
                </Col>
            </Row>
        </Container>
        <Container className="my-5">
            <h3 className="re-page-title mb-4 text-center">ALEGEREA PARTENERULUI</h3>
            <ParaOnly text="* Firmele care sunt platitoare de TVA Intracomunitar percep soferilor un comision de 10% din valoarea incasata, urmand ca din suma colectata, firma sa plateasca toate taxele si impozitele aferente. Cota TVA se aplica doar la comisionul de 25% incasat de Uber. Chiar si asa, dupa ce sunt sunt platite toate taxele, din cei 10% patronul ramane cu un profit de 1%. In cel mai fericit caz." />
            <ParaOnly text="* Firmele care sunt platitoare de TVA national nu au cum sa perceapa comision de 10% din valoarea incasata, deoarece cota TVA se aplica la toata suma facturata (Brut). Nu pot sa opresti un comision de 10% din suma incasata, cand este de platit 19% din suma bruta facturata. Avantajul este ca firmele platitoare de tva in Romania, pot deduce din TVA cu cheltuieli eligibile. In acest sens, soferul poate aduce bonuri de reparatii, cheltuieli cu combustibil, etc. Chiar si asa, nu se pot acoperii cheltuielile societatii dintr-un comision de 10%" />
        </Container>
        <Container>
            <h5><b>CE TAXE SUNT PLATITE?</b></h5>
            <ParaWithHeading heading="TVA intracomunitar:"
                text=" Avand in vedere ca Uber are sediul in Comunitatea Europeana, cota tva de 19% se aplica la comisionul incasat de acesta si se plateste in Romania, conform reglementarilor fiscale de la noi din tara." />
            <ParaWithHeading heading="TVA National:"
                text=" Cota de 19% se aplica la suma bruta facturata. TVA-ul se poate deduce cu cheltuielile" />
            <ParaWithHeading heading="Impozitul pe Venit: "
                text=" Acesta este impozitul pe venit al microintreprienderilor (SRL) si la firmele neplatitoare de tva (intracomunitar), se aplica la valoarea bruta. La societatile platitoare de TVA national, cota TVA se obtine din valoare neta (valoarea fara tva). In functie de numarul de angajati din societati, cat si de norma de munca in care sunt incadrati, firma plateste 1% sau 3%. Acest impozit nu se poate deduce cu cheltuieli." />
            <ParaWithHeading heading="Impozitul pe profit:"
                text=" Acesta este cunscut ca si impozit pe dividende. La inchiderea bilantului trimestrial si repartizarea profitului, patronul isi poate ridica din societate profitul, urmand sa plateasca pentru acesta un impozit de 5%. In 2018 a fost introdusa contributia la sanatate (CASS), in procent de 10%, care revine persoanelor care incaseaza dividendele. cota de 10% pentru sanatate platita de persoanele fizice are loc doar in cazul in care acestea obtin intr-un an din dividende si alte activitati independente (chirii, drepturi de proprietate intelectuala, activitati agricole) venituri cu valoare cel putin egala cu 12 salarii de baza minime brute (adica minim suma de > 12 luni * 1900 lei salariul brut minim pe economie = 22.800 lei)" />
            <ParaWithHeading heading="Contributii sociale la contractul individual de munca:"
                text=" Contractul de munca este obligatoriu pentru toti soferii Uber care desfasoara activitate de transport altrnativ. In acest sens, valoarea contributiilor este retinuta automat din totalul incasarilor." />
            <ParaWithHeading heading="Impozitul pe venitul soferului:"
                text=" Orice suma incasata de sofer in urma activiatii trebuie impozitata ca atare. Impozitul de 10% pe venit se poate declara prin completarea declaratiei unice in baza unui contract. Exista solutii practice care pot ajuta soferul sa incaseze toata suma legal, iar impozitul anaf sa fie foarte mic. Atat de mic, incat nu merita sa risti evitand sa-l declari. (Exemplu: La la 9500 lei realizati pe aplicatie, 7500 lei este suma incasata de sofer, iar separat impozitul pe tot venitul este de doar 200 lei)." />
            <ParaWithHeading heading="Explicatie:"
                text=" Daca valoarea unei curse realizate de sofer printr-o firma cu tva intracomunitar este de 7.5 lei, inseamna ca valoarea platita de client este 10 lei. Diferenta de 2.5 lei reprezinta comisionul UBER 25%. Firma are obligatia sa plateasca la bugetul de stat TVA 19% din 2.5 lei (0,40 lei). Acest TVA nu se poate deduce cu tva-ul din cheltuieli, iar in cazul in care cifra de afaceri depaseste 300.000 lei/ an, firma devine platitoare de TVA in Romania, urmand ca aceasta sa colecteze TVA 19% din suma integrala, adica 19% din 10 lei (1,6 lei)" />
        </Container>
        <section className="bg-green py-5">
            <Container>
                <HeadingH3 title="ACTE NECESARE PENTRU ELIBERARE COPIE CONFORMĂ" />
                <h4 className="subtitle-h4 text-center mb-5">Documente care stau la baza copiei conforme si a ecusoanelor pentru Transport Alternativ de Persoane cu Conducător</h4>
                <Row>
                    <Col lg={6}>
                        <ParaLi text="Copie a autorizației pentru transportul alternativ cu autoturism şi conducător auto" />
                        <ParaLi text="Copii ale certificatelor de înmatriculare şi cărţilor de identitate pentru autoturismele, pentru care se doreşte eliberarea copiei conforme" />
                        <ParaLi text="Declaraţia pe propria răspundere privind îndeplinirea de către autoturismele respective a condiţiilor prevăzute la art.19 din O.U.G. nr.49/2019;" />
                        <ParaLi text="Copia contractului de închiriere a autoturismului;" />
                    </Col>
                    <Col lg={6}>
                        <p>Cererea se depune la Agenţia Teritorială a Autorităţii Rutiere Române – ARR emitentă a autorizației pentru transportul alternativ cu autoturism şi conducător auto.<br />Copiile conforme se eliberează numai pentru autoturismele deţinute în proprietate, închiriere sau comodat, indiferent unde sunt înmatriculate acestea.</p>
                    </Col>
                </Row>
            </Container>
        </section>
        <Container className="py-5">
            <HeadingH3 title="CE ÎNSEAMNĂ SĂ LUCREZI LEGAL?" />
            <StarHeading title="Cerinte pentru șofer​" />
            <ul className="mb-5">
                <li>Permis de conducere (obținut de minim 2 ani)</li>
                <li>Carte de identitate (vârsta minimă 21 de ani)</li>
                <li>Certificat profesional pentru conducătorii auto în regim de închiriere</li>
                <li>Cazier judiciar fără înscrisuri</li>
                <li>Cazier auto (Istoric auto)</li>
                <li>să nu aibă suspendată exercitarea dreptului de a conduce în ultimul an pentru conducerea sub influența băuturilor alcoolice sau a substanțelor psihoactive sau să nu fi fost implicat în accidente rutiere soldate, din culpa sa, cu decesul sau vătămarea gravă a uneia sau mai multor persoane</li>
            </ul>
            <StarHeading title="Obligatiile societatii​" />
            <ul className="mb-5">
                <li>Obligatia societatii de a inregistra toate veniturile soferului pentru a fi supuse impozitari aferente. Inregistrarea facturilor si a incasarilor</li>
                <li>Punerea la dispozitia soferului casa de marcat fiscalizata pentru emiterea bonurilor fiscale.</li>
                <li>Respectarea Legea 31/1990 actualizata 2020. Legea societatilor comerciale cat si celelalte reglementari fiscale si juridice in vigoare, care stabilesc rapoartele de munca dintre persoane fizize si societatii</li>
            </ul>
            <StarHeading title="Cartea de muncă​" />
            <ul className="mb-5">
                <li>Raportul de muncă al soferului trebuie justificat prin contractul individual de muncă.</li>
                <li>Norma de incadrare trebuie sa fie cat mai aproape de timpul lucrat efectiv (timpul din timpul curselor)</li>
                <li>Protectia muncii si Medicina muncii sunt obligatorii pentru toti soferii</li>
            </ul>
            <div className="mb-5">
                <StarHeading title="Retragerea copiei conforme​" />
                <ParaOnly text="Copia conformă a autorizației de transport alternativ se retrage în următoarele cazuri:" />
                <ParaOnly text="a) a fost obținută pe baza unor documente false;" />
                <ParaOnly text="b) dacă a fost suspendată de două ori în 12 luni consecutive;" />
                <ParaOnly text="c) copia conformă și/sau ecusonul pentru transport alternativ, după caz, au fost încredințate sau utilizate pentru un alt autoturism decât cel pentru care au fost atribuite;" />
                <ParaOnly text="d) dacă autoturismul execută activitate de transport pe perioada în care copia conformă este suspendată;" />
                <ParaOnly text="e) în cazul în care conducătorul auto nu deține certificat de atestare a pregătirii profesionale valabil;" />
                <ParaOnly text="f) în cazul în care transmite copia conformă a autorizației de transport alternativ către alt operator de transport alternativ sau oricărei alte persoane, pentru a fi utilizate în vederea efectuării transportului alternativ;" />
                <ParaOnly text="g) nu deține asigurare de răspundere civilă auto;" />
                <ParaOnly text="h) la cerere;" />
                <ParaOnly text="i) dacă autoturismul nu este dotat cu aparat de marcat electronic de către deținătorul legal al autorizației de transport alternativ, în cazul în care se încasează direct de la pasager, integral sau parțial, cu numerar sau prin utilizarea cardurilor de credit/debit sau a substitutelor de numerar, contravaloarea serviciului prestat." />
            </div>
            <div className="mb-5">
                <StarHeading title="Suspendarea copiei conforme" />
                <ParaOnly text="Copia conformă a autorizației de transport alternativ se suspendă, pe o durată de 1-3 luni:" />
                <ParaOnly text="a) nu mai este îndeplinită cel puțin una dintre condițiile care au stat la baza eliberării documentului;" />
                <ParaOnly text="b) a expirat valabilitatea inspecției tehnice periodice;" />
                <ParaOnly text="c) nu deține asigurare pentru persoane și bunurile acestora;" />
                <ParaOnly text="d) când autoturismele utilizate la efectuarea transportului alternativ utilizează însemne sau dotări specifice ale autovehiculelor taxi;" />
                <ParaOnly text="e) neîndeplinirea în termen a prevederilor art. 12 alin. (4);" />
                <ParaOnly text="f) în situația achitării contravalorii transportului alternativ în numerar sau prin utilizarea cardurilor de credit/debit sau a substitutelor de numerar, pentru care nu s-a emis și înmânat bon fiscal pasagerului." />
            </div>
            <div className="mb-5">
                <StarHeading title="Obligatiile soferului" />
                <ParaOnly text="Conducătorii auto au următoarele obligații:" />
                <ParaOnly text="a) să aibă ținută corespunzătoare, un comportament civilizat și preventiv în relația cu clientul;" />
                <ParaOnly text="b) să nu refuze efectuarea cursei în condițiile inițial agreate;" />
                <ParaOnly text="c) să nu solicite plata de către pasager a unei alte sume de bani în schimbul activității de transport efectuate;" />
                <ParaOnly text="d) să transporte bagajele clienților, în cazul transportului de persoane, în limitele spațiului destinat pentru acestea, fără perceperea de tarife suplimentare;" />
                <ParaOnly text="e) să se supună controlului autorităților cu atribuții în domeniu și să prezinte la control, în timpul activității, documentele prevăzute de prezenta ordonanță de urgență și de legislația în vigoare;" />
                <ParaOnly text="f) să nu utilizeze mijloacele audio/video fără acordul clientului;" />
                <ParaOnly text="g) să informeze în termen de 24 de ore operatorul de transport alternativ cu privire la modificarea oricăror informații referitoare la persoana sa, comunicate acestuia în scopul admiterii sale pe platforma digitală;" />
                <ParaOnly text="h) să efectueze cursa doar cu un autoturism înscris pe platforma digitală." />
            </div>
            <StarHeading title="Casa de marcat" />
            <ul>
                <li>În cazul în care se încasează direct de la pasager, integral sau parțial, cu numerar sau prin utilizarea cardurilor de credit/debit sau a substitutelor de numerar, contravaloarea serviciului prestat, operatorul de transport alternativ are obligația de a utiliza aparat de marcat electronic fiscal, în conformitate cu dispozițiile Ordonanței de urgență a Guvernului nr. 28/1999 privind obligația operatorilor economici de a utiliza aparate de marcat electronice fiscale, republicată, cu modificările și completările ulterioare, de a emite și înmâna bon fiscal pasagerului, precum și de a emite factură la solicitarea acestuia.</li>
                <li>Lispa casei de marcat nu se pedepseste decat in situatiile in care soferul nu a emis bon fiscal, desi era obligat sa o faca, conform legii.</li>
                <li>Soferul risca amenda intre 300 lei – 1500 lei pentru faptul ca nu a emis bons fiscal, cat si societatea la randul ei.</li>
            </ul>
        </Container>
    </section>
}
export default RequiredDocs;

function ParaLi({ text }) {
    return <p><FaCheckCircle size={20} className="mr-3" />{text}</p>
}
function ParaWithHeading({ heading, text }) {
    return <p className="mb-4"><b>{heading}</b>{text}</p>
}
function ParaOnly({ text }) {
    return <p>{text}</p>
}
function HeadingH3({ title }) {
    return <h3 className="re-page-title mb-4 text-center">{title}</h3>
}
function StarHeading({ title }) {
    return <h3 className="mb-4 re-page-title"><FaStar size={30} /> {title}</h3>
}